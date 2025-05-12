"use client";

import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./ToggleTheme";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { DOCS } from "@/app/(components)/layout-parts/documentation.constant";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<{ label: string; url: string }[]>([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchResults([]);
            return;
        }

        const results = DOCS.flatMap(group => 
            group.children.filter(child => 
                child.label.toLowerCase().includes(searchQuery.toLowerCase())
            ).map(child => ({
                label: child.label,
                url: child.url
            }))
        );

        setSearchResults(results);
    }, [searchQuery]);

    return (
        <nav className="w-full mt-2">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 py-4">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-2 justify-center">
                        <Image src="/logo/elixir-logo.png" alt="Elixir UI" width={18} height={18} className="invert-0 dark:invert-100" />
                        <span className="text-2xl font-bold">Elixir UI</span>
                    </Link>
                    
                    <div className="flex items-center gap-5">
                        <Link href="/components">Components</Link>
                        <Link href="/templates">Templates</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    {/* social handles */}
                    <div className="flex items-center gap-5">
                        <Link href="https://x.com/praveenlodhi99" target="_blank">Twitter</Link>
                        <Link href="https://github.com/praveenlodhiofficial" target="_blank">Github</Link>
                    </div>

                    {/* toggle theme */}
                    <ToggleTheme />

                    {/* search component */}
                    <div className="relative">
                        <Input
                            placeholder="Search components..."
                            className="w-[200px] rounded-full bg-gray-100 dark:bg-zinc-800 border-none active:border-none active:ring-0 active:ring-offset-0 pl-10 pr-3"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowResults(true)}
                            onBlur={() => setTimeout(() => setShowResults(false), 200)}
                        />
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        
                        {showResults && searchResults.length > 0 && (
                            <div className="absolute top-full right-0 w-2xs text-sm mt-4 bg-white dark:bg-transparent rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700 z-50 overflow-hidden">
                                {searchResults.map((result, index) => (
                                    <Link
                                        key={index}
                                        href={result.url}
                                        className="block m-1 p-2 rounded-md transition-all duration-200 hover:text-[107%] hover:bg-gray-100 dark:hover:bg-zinc-700 text-sm border-gray-200 dark:border-zinc-700"
                                    >
                                        {result.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
