import ExternalLink from '@/Components/ExternalLink';
import { CONTROLLED_EXTERNAL_LINKS } from '@/lib/controlledExternalLinks';

export const ACADEMY_NAME = CONTROLLED_EXTERNAL_LINKS.academy.name;
export const ACADEMY_URL = CONTROLLED_EXTERNAL_LINKS.academy.href;

export default function AcademyLink({ children = ACADEMY_NAME, className = '' }) {
    return (
        <ExternalLink
            href={ACADEMY_URL}
            ariaLabel={`${typeof children === 'string' ? children : ACADEMY_NAME} (opens in new tab)`}
            className={className}
        >
            {children}
        </ExternalLink>
    );
}
