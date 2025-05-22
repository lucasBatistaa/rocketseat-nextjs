import { PaintbrushVertical } from "lucide-react"
import { PT_Sans_Caption } from "next/font/google"

const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})

export function FeatureSupport() {
    return (
        <section className="container pb-8 mdpy-10 bg-gradient-to-r from-gray-500 to-gray-700">
            <div className="flex flex-col items-center gap-12">
                <h2 className={`${ptSansCaption.className} text-balance text-heading-md md:text-heading-lg md:max-w-[488px] mx-auto text-center text-gray-100`}>Sua loja de afiliados, simples, do jeito que deveria ser</h2>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-4 bg-blue-400 rounded-xl p-6">
                        <div className="bg-blue-300 w-fit p-2 rounded-md">
                            <PaintbrushVertical className="h-5 w-5 text-white" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-heading-sm text-gray-100">Personalize seu site</h3>

                            <p className="text-body-sm text-gray-200">Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.</p>
                        </div>
                    </div>

                    <div className="space-y-4 bg-blue-400 rounded-xl p-6">
                        <div className="bg-blue-300 w-fit p-2 rounded-md">
                            <PaintbrushVertical className="h-5 w-5 text-white" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-heading-sm text-gray-100">Personalize seu site</h3>

                            <p className="text-body-sm text-gray-200">Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
