import MainLayout from '@/Layouts/MainLayout';

export default function HomePt() {
    return (
        <MainLayout title="Biu-g Holdings – Página Inicial">
            <div className="mx-auto max-w-5xl space-y-12 px-4 py-16">
                <section className="max-w-3xl space-y-5">
                    <p className="site-eyebrow">Biu-g Holdings</p>
                    <h1 className="text-4xl font-semibold text-zinc-900 md:text-5xl">
                        Construção da Infraestrutura Institucional de África
                    </h1>
                    <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
                        A Biu-g Holdings é uma plataforma global de holdings que constrói sistemas financeiros e
                        tecnológicos duradouros para Angola, com coordenação estratégica a partir dos Estados Unidos.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Plataformas Nacionais</h2>
                        <p className="text-xs text-zinc-600">
                            CubeShackles, sistemas nacionais de carteira planeados e rails financeiros nativos em AOA em
                            desenvolvimento no grupo.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Disciplina Regulatória</h2>
                        <p className="text-xs text-zinc-600">
                            Estruturado para clareza jurisdicional, alinhamento regulatório e disciplina de longo prazo.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Ecossistema Multi-Vertical</h2>
                        <p className="text-xs text-zinc-600">
                            De dados e transporte a mercados de capitais e educação, o grupo opera uma stack vertical
                            completa para Angola e mercados regionais.
                        </p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
