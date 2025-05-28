import Link from "next/link";

import { Button } from "../ui/button";
import { Logo } from "../logo";
import { ActiveLink } from "../active-link";

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
            <div className=" mx-auto max-w-7xl px-4 md:px-[200px] ">
                <div className="flex h-20 md:h-24 items-center justify-between">
                    <Logo />

                    <nav className="flex items-center gap-6">
                        <ActiveLink href='/'>Início</ActiveLink>
                        <ActiveLink href='/blog'>Blog</ActiveLink>
                        
                        <Button variant='secondary' asChild>
                            <Link href='/comecar'>Começar</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
};
