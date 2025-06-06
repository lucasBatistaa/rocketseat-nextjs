import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="container relative flex items-center justify-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
                <div className="flex flex-col items-center justify-center gap-4 md:items-start">
                    <h1 className="text-heading-hg text-gray-100 font-sans text-center md:text-left">Venda seus produtos como afiliado em um único lugar</h1>

                    <div className="flex flex-col items-center md:items-start justify-center gap-4 ">
                        <div className="">
                            <div className="flex gap-3 items-center">
                                <Clock className="text-cyan-100 h-5 w-5" />

                                <span className="text-gray-200">Crie o seu site em menos de 5 minutos</span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Store className="text-cyan-100 h-5 w-5" />

                                <span className="text-gray-200">Acompanhe e otimize seu negócio online</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-5">
                            <Button className="rounded-full" asChild>
                                <Link href='/criar-loja'>
                                    Criar loja grátis
                                    <ArrowRight className="text-white" />
                                </Link>
                            </Button>

                            <p className="text-gray-300 text-body-xs">Não precisa de cartão de crédito</p>
                        </div>
                    </div>
                </div>

                <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
                    <Image
                        src='/assets/hero-section.svg'
                        alt='Ilustração com ícones de loja, tag e sacola'
                        width={200}
                        height={400}
                    />
                </div>
            </div>
        </section>
    )
};
