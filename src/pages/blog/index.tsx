import { Search } from "lucide-react";

export default function BlogPage() {
   return (
    <div className="container py-28">
        <header className="">
            <div className="space-y-3">
                <span className="text-body-tag text-cyan-100 uppercase bg-cyan-300 px-3 py-1.5 rounded-sm">Blog</span>

                <h1 className="text-heading-lg md:text-heading-xl text-gray-100">Dicas e estratégias para impulsionar seu negócio</h1>
            </div>

            <div className="h-10 flex gap-3 border border-gray-400 rounded-md px-4">
                <Search className="h-4 w-4 text-gray-300"/>

                <input placeholder="Buscar"/>
            </div>
        </header>
    </div>
   ) 
};
