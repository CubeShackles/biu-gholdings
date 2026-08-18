import { getEntityStatusLabel } from '@/lib/entityStatus';

export default function EntityStatusBadge({ status, locale = 'en', className = '' }) {
    return (
        <span
            className={`inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-zinc-600 ${className}`}
        >
            {getEntityStatusLabel(status, locale)}
        </span>
    );
}
