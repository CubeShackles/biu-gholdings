import EntityStatusBadge from '@/Components/EntityStatusBadge';
import MainLayout from '@/Layouts/MainLayout';
import { renderLinkedEntityName } from '@/lib/publicLinks';

const clusters = [
    {
        title: 'Grupo CubeShackles – Tecnologia Core & Infraestrutura',
        items: [
            {
                name: 'CubeShackles, Inc. (EUA)',
                type: 'Tecnologia / Propriedade Intelectual',
                status: 'operating',
                description:
                    'Empresa global de tecnologia e propriedade intelectual do ecossistema CubeShackles. Responsável por investigação de protocolos, arquitetura de software, gestão de marca e futuros quadros de licenciamento.',
            },
            {
                name: 'CubeShackles, S.A.',
                type: 'Operadora Nacional',
                status: 'formation',
                description:
                    'Sociedade operacional em Angola que localiza a infraestrutura CubeShackles para plataformas nacionais, alinhamento regulatório e parcerias institucionais.',
            },
            {
                name: 'National Data Platform',
                platform: 'Plataforma dentro da CubeShackles, S.A.',
                type: 'Plataforma de Dados',
                status: 'internalProduct',
                description:
                    'Plataforma de dados económicos e sociais — inflação, desemprego, mercados informais, índices de preços e métricas de acesso.',
            },
            {
                name: 'Kulifikila',
                platform: 'Plataforma dentro da CubeShackles, S.A.',
                type: 'Plataforma de Inteligência de Crédito',
                status: 'internalProduct',
                description:
                    'Inteligência de crédito para sectores formal e informal, com scoring multi-camada em AOA e inteligência de risco.',
            },
            {
                name: 'Angola National Transit Platform',
                platform: 'Plataforma dentro da CubeShackles, S.A.',
                type: 'Mobilidade & Transporte',
                status: 'internalProduct',
                description:
                    'Aplicação nacional de mobilidade para motoristas e passageiros, com rails de pagamento e fiscais integrados.',
            },
            {
                name: 'PraçaNgola',
                platform: 'Plataforma dentro da CubeShackles, S.A.',
                type: 'Infraestrutura de E-commerce',
                status: 'internalProduct',
                description:
                    'Plataforma nacional de e-commerce e logística para Angola e escala regional.',
            },
            {
                name: 'BualaBuitu Terminal',
                platform: 'Plataforma dentro da CubeShackles, S.A.',
                type: 'Plataforma de Inteligência de Mercado',
                status: 'internalProduct',
                description:
                    'Terminal de inteligência de mercado financeiro para dados em tempo real, análises e infraestrutura de mercado.',
            },
        ],
    },
    {
        title: 'Cluster FGM / FGMS & Investimento',
        items: [
            {
                name: 'FGM Capital, Lda.',
                type: 'Trading & Capital',
                status: 'formation',
                description:
                    'Entidade de trading e mercados de capitais focada em estratégias proprietárias, formação de capital, operações de tesouraria e atividades de estruturação financeira de longo prazo em Angola e mercados africanos.',
            },
            {
                name: 'Grupo FGMS & Associados, Lda.',
                type: 'Plataforma Financeira Integrada',
                status: 'formation',
                description:
                    'Plataforma financeira integrada desenhada para suportar operações de capital multi-estratégia, estruturação de investimento, coordenação de tesouraria e desenvolvimento institucional de longo prazo em Angola.',
            },
            {
                name: 'Biu-g Investment Management, Lda.',
                type: 'Gestão de Ativos',
                status: 'formation',
                description:
                    'Plataforma de gestão de ativos focada em AOA, desenhada para operar veículos de investimento dedicados em mercados públicos, sectores estratégicos e iniciativas de desenvolvimento de capital nacional de longo prazo.',
            },
            {
                name: '1975 Nzila, Lda.',
                type: 'VC / PE & Experiências',
                status: 'formation',
                description:
                    'Veículo de investimento e experiência de marca planead no ecossistema Biu-g Holdings.',
            },
            {
                name: 'FGMS & Co.',
                type: 'Operações Imobiliárias',
                status: 'formation',
                description:
                    'Braço operacional imobiliário planead para Angola e Portugal na estrutura do grupo.',
            },
            {
                name: 'FGM & Co.',
                type: 'SPV de Estruturação',
                status: 'formation',
                description:
                    'Veículo planead de estruturação financeira e coinvestimento para operações do grupo.',
            },
        ],
    },
    {
        title: 'Fiduciário & Educação',
        items: [
            {
                name: 'Fundo Fiduciário Estratégico',
                type: 'Veículo Fiduciário',
                status: 'formation',
                description:
                    'Estrutura fiduciária interna planead para continuidade e alinhamento no grupo Biu-g.',
            },
            {
                name: 'Sango Trust',
                type: 'Veículo de Trust',
                status: 'operating',
                description:
                    'Estrutura fiduciária privada de gestão patrimonial de longo prazo, que apoia governance intergeracional, planeamento sucessório e preservação estratégica de capital no ecossistema Biu-g Holdings.',
            },
            {
                name: 'BIU.G Academy',
                type: 'Educação & Capacitação',
                status: 'operating',
                description:
                    'Iniciativa ativa de educação e capacitação em tecnologia, literacia financeira, infraestrutura digital e talento nativo em IA em Angola e África, com investigação, formação e aprendizagem comunitária alinhadas com a missão da Biu-g Holdings.',
            },
        ],
    },
];

export default function SubsidiariesPt() {
    return (
        <MainLayout title="Subsidiárias & Portefólio – Biu-g Holdings">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Portefólio</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Subsidiárias &amp; Empresas do Portefólio</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        A Biu-g Holdings opera um portefólio multi-entidade em tecnologia, finanças, dados, mobilidade,
                        e-commerce, media e educação. As entidades listadas são controladas pelo grupo ou veículos internos
                        planeados.
                    </p>
                    <p className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-xs leading-relaxed text-zinc-600">
                        As referências a entidades planeadas podem evoluir consoante condições legais e regulatórias. Esta
                        página não implica endosso, propriedade, investimento, parceria ou aprovação por qualquer terceiro ou
                        instituição pública.
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
                                        <EntityStatusBadge status={item.status} locale="pt" />
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
