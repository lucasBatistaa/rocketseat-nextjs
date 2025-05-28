import Link from "next/link";

import { Button } from "../../../../components/ui/button";

import { ArrowRight, Store } from "lucide-react";

export function CallToAction() {
    return (
        <section className='relative bg-gradient-to-b from-cyan-950/20 to-gray-700'>
            <div className="absolute inset-0 bg-[url('/assets/background-footer.svg')] bg-cover bg-no-repeat bg-center " />

            <div className="relative container flex flex-col items-center justify-center gap-14 mt-[-28px]">
                <div className="p-[14px] bg-cyan-300 w-fit rounded-full">
                    <Store className="h-7 w-7 text-cyan-100" />
                </div>

                <div className="max-w-[450px] flex flex-col items-center justify-center gap-10 mb-[72px]">
                    <h2 className={`font-sans text-gray-100 text-balance text-heading-md md:text-heading-xl text-center mt-7 mb:mt-14 mb-8 mb:mt-10`}>Crie uma loja online e inicie suas vendas ainda hoje</h2>

                    <Button variant='primary' asChild>
                        <Link href='/criar-loja'>
                            Criar loja grátis
                            <ArrowRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}