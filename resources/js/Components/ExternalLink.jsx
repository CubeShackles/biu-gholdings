/**
 * External outbound link with institutional styling (new tab, noopener, subtle hover).
 */
export default function ExternalLink({ href, children, className = '', ariaLabel }) {
    const resolvedLabel =
        ariaLabel ??
        (typeof children === 'string' ? `${children} (opens in new tab)` : 'External link (opens in new tab)');

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={resolvedLabel}
            className={
                'inline rounded-sm text-inherit no-underline decoration-zinc-400 underline-offset-[0.2em] transition-colors transition-[text-decoration-color] hover:text-zinc-900 hover:underline hover:decoration-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-1 ' +
                className
            }
        >
            {children}
        </a>
    );
}
