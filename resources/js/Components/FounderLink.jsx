import ExternalLink from '@/Components/ExternalLink';
import { CONTROLLED_EXTERNAL_LINKS } from '@/lib/controlledExternalLinks';

export const FOUNDER_NAME = CONTROLLED_EXTERNAL_LINKS.founder.name;
export const FOUNDER_PROFILE_URL = CONTROLLED_EXTERNAL_LINKS.founder.href;

export default function FounderLink({ children = FOUNDER_NAME, className = '' }) {
    return (
        <ExternalLink
            href={FOUNDER_PROFILE_URL}
            ariaLabel={`${typeof children === 'string' ? children : FOUNDER_NAME} (opens in new tab)`}
            className={className}
        >
            {children}
        </ExternalLink>
    );
}
