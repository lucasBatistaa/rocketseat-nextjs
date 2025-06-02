import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export function Search() {
    const router = useRouter()
    const query = router.query.q as string

    const handleSarch = useCallback((event: React.FormEvent) => {
        event.preventDefault()

        if (query.trim()) {
            router.push(`~/blog?q=${encodeURIComponent(query)}`)
        }
    }, [query, router])

    return (
        <div className="h-10 flex gap-3 items-center border border-gray-400 rounded-md px-4">
            <SearchIcon className="h-4 w-4 text-gray-300 transition-colors duration-200" />

            <input placeholder="Buscar" className="bg-transparent" />
        </div>
    )
}