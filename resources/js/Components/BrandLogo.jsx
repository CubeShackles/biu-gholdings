import logoUrl from '@/assets/biu-gholdings-logo.png';

export default function BrandLogo({ className = 'h-8 w-8 shrink-0 object-contain' }) {
    return (
        <img
            src={logoUrl}
            alt="Biu-g Holdings"
            width={32}
            height={32}
            className={className}
            decoding="async"
        />
    );
}
