import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react"

export function SupportSection() {
    return (
        <section className="relative container py-12 md:py-[120px] bg-gradient-to-r from-gray-500 to-gray-700">
            <div className="absolute inset-0 hidden md:block bg-[url('/assets/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

            <div className="relative flex flex-col items-center gap-8 md:gap-12">
                <h2 className={`font-sans text-balance text-heading-md md:text-heading-lg md:max-w-[488px] mx-auto text-center text-gray-100`}>Sua loja de afiliados, simples, do jeito que deveria ser</h2>

                <div className="grid gap-4 md:gap-6 md:grid-cols-3">
                    <div className="space-y-4 bg-blue-400 rounded-xl p-6">
                        <div className="bg-blue-300 w-fit p-2 rounded-md">
                            <PaintbrushVertical className="h-5 w-5 text-white" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-heading-sm text-gray-100 font-sans">Personalize seu site</h3>

                            <p className="text-body-sm text-gray-200">Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.</p>
                        </div>
                    </div>

                    <div className="space-y-4 bg-cyan-300 rounded-xl p-6">
                        <div className="bg-cyan-200 w-fit p-2 rounded-md">
                            <Store className="h-5 w-5 text-white" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-heading-sm text-gray-100 font-sans">Venda de qualquer loja</h3>

                            <p className="text-body-sm text-gray-200">Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado.</p>
                        </div>
                    </div>

                    <div className="space-y-4 bg-blue-400 rounded-xl p-6">
                        <div className="bg-blue-300 w-fit p-2 rounded-md">
                            <HeartHandshake className="h-5 w-5 text-white" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-heading-sm text-gray-100 font-sans">Receba suporte amigável</h3>

                            <p className="text-body-sm text-gray-200">Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
