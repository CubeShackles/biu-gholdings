import EntityStatusBadge from '@/Components/EntityStatusBadge';
import MainLayout from '@/Layouts/MainLayout';
import { renderLinkedEntityName } from '@/lib/publicLinks';

const clusters = [
    {
        title: 'CubeShackles Group – Core Technology & Infrastructure',
        items: [
            {
                name: 'CubeShackles, Inc. (USA)',
                type: 'Technology / IP Company',
                status: 'operating',
                description:
                    'Global technology and intellectual property company for the CubeShackles ecosystem. Responsible for protocol research, software architecture, brand stewardship, and future licensing frameworks.',
            },
            {
                name: 'CubeShackles, S.A.',
                type: 'Operating Company',
                status: 'formation',
                description:
                    'National operating company localizing CubeShackles for national platforms, regulatory alignment, and regulated partnerships.',
            },
            {
                name: 'National Data Platform',
                platform: 'Platform inside CubeShackles, S.A.',
                type: 'Data Platform',
                status: 'groupProduct',
                description:
                    'Economic and social data platform — inflation, unemployment, informal markets, local price indices and access metrics.',
            },
            {
                name: 'Kulifikila',
                platform: 'Platform inside CubeShackles, S.A.',
                type: 'Credit Intelligence Platform',
                status: 'groupProduct',
                description:
                    'Credit intelligence for formal and informal sectors, with multi-layer AOA credit scoring and risk intelligence.',
            },
            {
                name: 'Angola National Transit Platform',
                platform: 'Platform inside CubeShackles, S.A.',
                type: 'Mobility / Transit',
                status: 'groupProduct',
                description:
                    'National mobility application for drivers and riders, with integrated payment and tax rails.',
            },
            {
                name: 'PraçaNgola',
                platform: 'Platform inside CubeShackles, S.A.',
                type: 'E-commerce Infrastructure',
                status: 'groupProduct',
                description:
                    'National e-commerce and logistics platform for Angola and regional scale.',
            },
            {
                name: 'BualaBuitu Terminal',
                platform: 'Platform inside CubeShackles, S.A.',
                type: 'Market Intelligence Platform',
                status: 'groupProduct',
                description:
                    'Financial market intelligence terminal for real-time data, analytics, and market infrastructure.',
            },
        ],
    },
    {
        title: 'FGM / FGMS & Investment Cluster',
        items: [
            {
                name: 'FGM Capital, Lda.',
                type: 'Trading & Capital',
                status: 'formation',
                description:
                    'Trading and capital markets entity focused on proprietary strategies, capital formation, treasury operations and long-term financial structuring across regional markets.',
            },
            {
                name: 'Grupo FGMS & Associados, Lda.',
                type: 'Integrated Financial Platform',
                status: 'formation',
                description:
                    'Integrated financial platform designed to support multi-strategy capital operations, investment structuring, treasury coordination and long-term development across national markets.',
            },
            {
                name: 'Biu-g Investment Management, Lda.',
                type: 'Asset Management',
                status: 'formation',
                description:
                    'AOA-focused asset management platform designed to operate dedicated investment vehicles across public markets, strategic sectors and long-term national capital development initiatives.',
            },
            {
                name: '1975 Nzila, Lda.',
                type: 'VC / PE & Experiences',
                status: 'formation',
                description:
                    'Planned local investment and brand experience vehicle within the Biu-g Holdings ecosystem.',
            },
            {
                name: 'FGMS & Co.',
                type: 'Real Estate Operations',
                status: 'formation',
                description:
                    'Planned real estate operating arm for Angola and Portugal within the group structure.',
            },
            {
                name: 'FGM & Co.',
                type: 'Advisory & Structuring SPV',
                status: 'formation',
                description:
                    'Planned financial structuring and co-investment vehicle for group transactions.',
            },
        ],
    },
    {
        title: 'Fiduciary & Education',
        items: [
            {
                name: 'Fundo Fiduciário Estratégico',
                type: 'Fiduciary Vehicle',
                status: 'formation',
                description:
                    'Planned group fiduciary structure supporting continuity and alignment within the Biu-g group.',
            },
            {
                name: 'Sango Trust',
                type: 'Trust Vehicle',
                status: 'operating',
                description:
                    'Private fiduciary and long-term asset stewardship structure supporting intergenerational governance, succession planning, and strategic capital preservation within the Biu-g Holdings ecosystem.',
            },
            {
                name: 'BIU.G Academy',
                type: 'Education / Capacity Building',
                status: 'operating',
                description:
                    'Active educational and capacity-building initiative focused on technology, financial literacy, digital systems, and AI-native workforce development, with research, training, and community-led learning aligned with the Biu-g Holdings mission.',
            },
        ],
    },
];

export default function Subsidiaries() {
    return (
        <MainLayout title="Subsidiaries & Portfolio – Biu-g Holdings">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Subsidiaries &amp; Portfolio Companies</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Biu-g Holdings operates a multi-entity portfolio across technology, finance, data, mobility,
                        e-commerce, media and education. Listed entities are group-controlled or planned group vehicles.
                    </p>
                    <p className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-xs leading-relaxed text-zinc-600">
                        References to planned entities may evolve as legal and regulatory conditions change. This page does
                        not imply endorsement, ownership, investment, partnership, or approval by any third party or public
                        institution.
                    </p>
                </header>

                {clusters.map((cluster) => (
                    <section key={cluster.title} className="space-y-4">
                        <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">{cluster.title}</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {cluster.items.map((item) => (
                                <article
                                    key={item.name}
                                    className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-4 md:p-5"
                                >
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-semibold text-zinc-900">
                                            {renderLinkedEntityName(item.name, 'font-semibold')}
                                        </h3>
                                        {item.platform && (
                                            <p className="text-[11px] font-medium text-zinc-500">{item.platform}</p>
                                        )}
                                        <p className="text-[11px] font-medium text-zinc-700">{item.type}</p>
                                        <EntityStatusBadge status={item.status} locale="en" />
                                    </div>
                                    <p className="mt-3 text-xs leading-relaxed text-zinc-600">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </MainLayout>
    );
}
