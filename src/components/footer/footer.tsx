import Link from "next/link";
import { Logo } from "../logo";

export function Footer() {
    return (
        <footer className="bg-gray-500">
            <div className="mx-auto max-w-7xl px-6 md:px-[200px] py-8">
                <div className="flex items-start md:items-center justify-between md:flex-row gap-8">
                    <Logo />

                    <nav className="flex flex-col md:flex-row  gap-3 md:gap-6 text-sm text-blue-100">
                        <Link href='/termos-de-uso' className="hover:text-blue-200">Termos de uso</Link>
                        <Link href='/politica-de-privacidade' className="hover:text-blue-200">Política de privacidade</Link>
                        <Link href='/feedback' className="hover:text-blue-200">Feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
};
