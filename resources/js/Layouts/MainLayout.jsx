import BrandLogo from '@/Components/BrandLogo';
import LanguageToggle from '@/Components/LanguageToggle';
import { PageHead, SiteLink, useSite } from '@/lib/site';

export default function MainLayout({ title, children }) {
    const { pageComponent } = useSite();
    const isPt = /Pt$/.test(pageComponent ?? '');

    const nav = isPt
        ? [
              ['Início', 'home.pt'],
              ['Sobre', 'about.pt'],
              ['Liderança', 'leadership.pt'],
              ['Estrutura', 'corporate.structure.pt'],
              ['Subsidiárias', 'subsidiaries.pt'],
              ['Investidores', 'investor.relations.pt'],
              ['Contacto', 'contact.pt'],
          ]
        : [
              ['Home', 'home'],
              ['About', 'about'],
              ['Leadership', 'leadership'],
              ['Corporate Structure', 'corporate.structure'],
              ['Subsidiaries', 'subsidiaries'],
              ['Investor Relations', 'investor.relations'],
              ['Contact', 'contact'],
          ];

    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
            <PageHead title={title} />
            <header className="border-b border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
                    <SiteLink
                        routeName={isPt ? 'home.pt' : 'home'}
                        className="flex min-w-0 items-center gap-2.5"
                    >
                        <BrandLogo />
                        <div className="flex min-w-0 flex-col leading-tight">
                            <span className="truncate text-sm font-medium text-zinc-900">Biu-g Holdings</span>
                            <span className="truncate text-[11px] text-zinc-500">
                                {isPt ? 'Estados Unidos e Angola' : 'United States and Angola'}
                            </span>
                        </div>
                    </SiteLink>
                    <nav className="hidden items-center gap-7 text-xs font-normal tracking-wide text-zinc-600 lg:flex xl:gap-8">
                        {nav.map(([label, routeName]) => (
                            <SiteLink
                                key={routeName}
                                routeName={routeName}
                                className="whitespace-nowrap transition-colors hover:text-zinc-900"
                            >
                                {label}
                            </SiteLink>
                        ))}
                    </nav>
                    <div className="flex shrink-0 items-center gap-3">
                        <LanguageToggle />
                    </div>
                </div>
                <div className="border-t border-zinc-100 bg-white lg:hidden">
                    <nav className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2.5 px-4 py-3.5 text-xs font-normal tracking-wide text-zinc-600 sm:px-6">
                        {nav.map(([label, routeName]) => (
                            <SiteLink
                                key={routeName}
                                routeName={routeName}
                                className="transition-colors hover:text-zinc-900"
                            >
                                {label}
                            </SiteLink>
                        ))}
                    </nav>
                </div>
            </header>
            <main className="site-main flex flex-1 flex-col">
                <div className="flex flex-1 flex-col">{children}</div>
            </main>
            <footer className="mt-auto shrink-0 border-t border-zinc-200 bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
                    <p className="text-xs leading-relaxed text-zinc-500">
                        {isPt
                            ? '© 2026 Biu-g Holdings. Todos os direitos reservados.'
                            : '© 2026 Biu-g Holdings. All rights reserved.'}
                    </p>
                </div>
            </footer>
        </div>
    );
}
