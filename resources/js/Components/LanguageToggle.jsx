import { SiteLink, useSite } from '@/lib/site';

const PAGE_LOCALE_ROUTE_MAP = {
    Home: { en: 'home', pt: 'home.pt' },
    HomePt: { en: 'home', pt: 'home.pt' },
    About: { en: 'about', pt: 'about.pt' },
    AboutPt: { en: 'about', pt: 'about.pt' },
    Leadership: { en: 'leadership', pt: 'leadership.pt' },
    LeadershipPt: { en: 'leadership', pt: 'leadership.pt' },
    CorporateStructure: { en: 'corporate.structure', pt: 'corporate.structure.pt' },
    CorporateStructurePt: { en: 'corporate.structure', pt: 'corporate.structure.pt' },
    Subsidiaries: { en: 'subsidiaries', pt: 'subsidiaries.pt' },
    SubsidiariesPt: { en: 'subsidiaries', pt: 'subsidiaries.pt' },
    Contact: { en: 'contact', pt: 'contact.pt' },
    ContactPt: { en: 'contact', pt: 'contact.pt' },
    ContactThankYou: { en: 'contact.thankyou', pt: 'contact.thankyou.pt' },
    ContactThankYouPt: { en: 'contact.thankyou', pt: 'contact.thankyou.pt' },
    InvestorRelations: { en: 'investor.relations', pt: 'investor.relations.pt' },
    InvestorRelationsPt: { en: 'investor.relations', pt: 'investor.relations.pt' },
    InvestorRelationsThankYou: { en: 'investor.relations.thankyou', pt: 'investor.relations.thankyou.pt' },
    InvestorRelationsThankYouPt: { en: 'investor.relations.thankyou', pt: 'investor.relations.thankyou.pt' },
};

export default function LanguageToggle() {
    const { pageComponent } = useSite();
    const cfg = PAGE_LOCALE_ROUTE_MAP[pageComponent];

    if (!cfg) {
        return null;
    }

    const isPt = pageComponent.endsWith('Pt');

    return (
        <div className="flex items-center gap-1.5 text-[11px] font-normal tracking-wide">
            <SiteLink
                routeName={cfg.en}
                className={
                    'rounded border px-2 py-1 transition-colors ' +
                    (!isPt
                        ? 'border-zinc-900 bg-zinc-900 text-white'
                        : 'border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-800')
                }
            >
                EN
            </SiteLink>
            <SiteLink
                routeName={cfg.pt}
                className={
                    'rounded border px-2 py-1 transition-colors ' +
                    (isPt
                        ? 'border-zinc-900 bg-zinc-900 text-white'
                        : 'border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-800')
                }
            >
                PT
            </SiteLink>
        </div>
    );
}
