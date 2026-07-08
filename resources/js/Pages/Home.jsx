import MainLayout from '@/Layouts/MainLayout';

export default function Home() {
    return (
        <MainLayout title="Biu-g Holdings – Corporate Home">
            <div className="mx-auto max-w-5xl space-y-12 px-4 py-16">
                <section className="max-w-3xl space-y-5">
                    <p className="site-eyebrow">Biu-g Holdings</p>
                    <h1 className="text-4xl font-semibold text-zinc-900 md:text-5xl">
                        Building Africa&apos;s Institutional Infrastructure
                    </h1>
                    <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
                        Biu-g Holdings is a global holdings platform building durable financial and technology systems
                        for Angola, with strategic coordination from the United States.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">National Platforms</h2>
                        <p className="text-xs text-zinc-600">
                            CubeShackles, planned national wallet systems, and AOA-native financial rails under group
                            development.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Regulatory Discipline</h2>
                        <p className="text-xs text-zinc-600">
                            Structured for jurisdictional clarity, regulatory alignment, and long-term discipline.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Multi-Vertical Ecosystem</h2>
                        <p className="text-xs text-zinc-600">
                            From data and transit to capital markets and education, the group operates a full vertical
                            stack for Angola and regional markets.
                        </p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
