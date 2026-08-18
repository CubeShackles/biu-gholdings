#!/usr/bin/env node
/**
 * Scans the repository for terms that must not appear in a public institutional release.
 * Excludes dependencies, build output, and lockfiles.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const SKIP_DIRS = new Set([
    'node_modules',
    'vendor',
    'storage',
    'public/build',
    'dist-pages',
    'dist-pages-publish',
    '.git',
    '.venv-logo',
    '.venv-pdf',
]);

const SCAN_EXTENSIONS = new Set([
    '.js',
    '.jsx',
    '.md',
    '.php',
    '.yml',
    '.yaml',
    '.blade.php',
    '.html',
    '.json',
]);

const SKIP_FILES = new Set(['package-lock.json', 'composer.lock', 'scripts/audit-public-release.mjs']);

/** Hard-block: no public-safe context */
const FORBIDDEN_STRICT = [
    { id: 'mucho-dinero', pattern: /mucho\s*dinero/i },
    { id: 'unitel', pattern: /\bunitel\b/i },
    { id: 'movicel', pattern: /\bmovicel\b/i },
    { id: 'africell', pattern: /\bafricell\b/i },
    { id: 'minfin', pattern: /\bminfin\b/i },
    { id: 'mintrans', pattern: /\bmintrans\b/i },
    { id: 'opaia', pattern: /\bopaia\b/i },
    { id: 'fipa', pattern: /\bfipa\b/i },
    { id: 'kimbo', pattern: /\bkimbo\b/i },
    { id: 'bodiva', pattern: /\bbodiva\b/i },
    { id: 'nasdaq', pattern: /\bnasdaq\b/i },
    { id: 'vanguard', pattern: /\bvanguard\b/i },
    { id: 'coinbase', pattern: /\bcoinbase\b/i },
    { id: 'pre-seed', pattern: /\bpre-?seed\b/i },
    { id: 'seed-round', pattern: /\bseed\s+round\b/i },
    { id: 'dual-ipo', pattern: /\bdual\s+ipo\b/i },
    { id: 'data-room', pattern: /\bdata\s+room\b/i },
    { id: 'cto-checklist', pattern: /\bcto\s+checklist\b/i },
    { id: 'deployment-guide', pattern: /\bdeployment\s+guide\b/i },
    { id: 'frontend-only', pattern: /\bfrontend-?only\b/i },
    { id: 'backend-route', pattern: /\bbackend\s+route\b/i },
    { id: 'laravel-forge', pattern: /\blaravel\s+forge\b/i },
    { id: 'forge-deploy', pattern: /\bforge\b.*\bdeploy/i },
    { id: 'vps-host', pattern: /\bvps\b/i },
    { id: 'pages-mistake', pattern: /github\s+pages\s+(mistake|leak)/i },
    { id: 'source-pdf', pattern: /docs\/source|source\s+pdf/i },
    { id: 'private-docs', pattern: /private\s+docs?/i },
    { id: 'crm', pattern: /\bcrm\b/i },
    { id: 'bna-shareholder', pattern: /\bbna\s+shareholder\b/i },
    { id: 'phone-angola', pattern: /\+244\s*\d/i },
    { id: 'phone-us', pattern: /\+1\s*\(\d{3}\)/i },
];

/** Block in user-facing UI paths unless allowlisted */
const FORBIDDEN_UI = [
    { id: 'internal-only', pattern: /\binternal\s+only\b/i },
    { id: 'operational-weakness', pattern: /operational\s+weakness/i },
];

const ALLOWLIST = [
    { file: /CONTRIBUTING\.md$/i, pattern: /cap tables?|confidential|internal manuals|private deployment/i },
    { file: /transparency-principles\.md$/i, pattern: /confidential|cap tables?/i },
    { file: /CODE_OF_CONDUCT\.md$/i, pattern: /confidential/i },
    { file: /audit-public-release\.mjs$/i, pattern: /.*/ },
    { file: /verify-pages-artifact\.mjs$/i, pattern: /internal paths|source leak|Forbidden/i },
    { file: /ci\.yml$/i, pattern: /internal paths/i },
    { file: /deploy-pages\.yml$/i, pattern: /docs\/source/i },
    { file: /\.gitignore$/i, pattern: /docs\/source/i },
];

function isUiPath(rel) {
    return /^resources\/js\/(Pages|Components)\//.test(rel);
}

function walk(dir, files = []) {
    for (const entry of readdirSync(dir)) {
        if (SKIP_DIRS.has(entry)) {
            continue;
        }
        const full = join(dir, entry);
        const rel = relative(root, full);
        if (statSync(full).isDirectory()) {
            walk(full, files);
            continue;
        }
        if (SKIP_FILES.has(entry)) {
            continue;
        }
        const ext = entry.includes('.') ? entry.slice(entry.indexOf('.')) : '';
        if (entry.endsWith('.blade.php')) {
            files.push(rel);
            continue;
        }
        if (SCAN_EXTENSIONS.has(ext)) {
            files.push(rel);
        }
    }
    return files;
}

function isAllowlisted(rel, _pattern, match, content) {
    const line = excerpt(content, match.index, 120);
    return ALLOWLIST.some((rule) => rule.file.test(rel) && rule.pattern.test(line));
}

function findAllMatches(content, pattern) {
    const re = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`);
    const matches = [];
    let match = re.exec(content);
    while (match) {
        matches.push(match);
        match = re.exec(content);
    }
    return matches;
}

function scanFile(rel) {
    const content = readFileSync(join(root, rel), 'utf8');
    const hits = [];
    const ui = isUiPath(rel);

    for (const { id, pattern } of FORBIDDEN_STRICT) {
        for (const match of findAllMatches(content, pattern)) {
            if (!isAllowlisted(rel, pattern, match, content)) {
                hits.push({ id, rel, excerpt: excerpt(content, match.index) });
            }
        }
    }

    if (ui) {
        for (const { id, pattern } of FORBIDDEN_UI) {
            for (const match of findAllMatches(content, pattern)) {
                hits.push({ id, rel, excerpt: excerpt(content, match.index) });
            }
        }
    }

    return hits;
}

function excerpt(content, index, radius = 40) {
    const start = Math.max(0, index - radius);
    const end = Math.min(content.length, index + radius);
    return content.slice(start, end).replace(/\s+/g, ' ').trim();
}

function checkNoPdfOrSourceDocs() {
    const errors = [];
    const docsSource = join(root, 'docs/source');
    const deployDir = join(root, 'deploy');

    try {
        if (statSync(docsSource).isDirectory()) {
            errors.push('docs/source/ must not exist in the public repository');
        }
    } catch {
        // absent — good
    }

    try {
        if (statSync(deployDir).isDirectory()) {
            errors.push('deploy/ must not exist in the public repository');
        }
    } catch {
        // absent — good
    }

    for (const rel of walk(root)) {
        if (rel.endsWith('.pdf')) {
            errors.push(`PDF file must not be committed: ${rel}`);
        }
    }

    return errors;
}

const files = walk(root);
const hits = files.flatMap(scanFile);
const structural = checkNoPdfOrSourceDocs();

if (hits.length || structural.length) {
    console.error('Public release audit failed:\n');
    for (const e of structural) {
        console.error(`  - [structure] ${e}`);
    }
    for (const { id, rel, excerpt } of hits) {
        console.error(`  - [${id}] ${rel}: …${excerpt}…`);
    }
    process.exit(1);
}

console.log(`OK: public release audit passed (${files.length} files scanned).`);
