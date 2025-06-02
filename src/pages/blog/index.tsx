import { Search } from "@/components/search";

export default function BlogPage() {
   return (
    <div className="container py-28">
        <header className="flex flex-col gap-6">
            <div className="space-y-3">
                <span className="text-body-tag text-cyan-100 uppercase bg-cyan-300 px-3 py-1.5 rounded-sm">Blog</span>

                <h1 className="text-balance text-heading-lg md:text-heading-xl text-gray-100">Dicas e estratégias para impulsionar seu negócio</h1>
            </div>

            <Search />
        </header>
    </div>
   ) 
};
