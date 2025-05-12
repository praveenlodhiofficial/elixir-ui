"use client";

import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DOCS } from "@/app/(components)/layout-parts/documentation.constant";

interface SearchComponentProps {
    className?: string;
    onClick?: () => void;
}

export function SearchComponent({ className, onClick }: SearchComponentProps) {
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
                url: child.url,
                onClick: onClick
            }))
        );

        setSearchResults(results);
    }, [searchQuery]);

    return (
        <div className={`relative ${className}`}>
            <Input
                placeholder="Search components..."
                className="w-full md:w-[200px] rounded-full bg-gray-100 dark:bg-zinc-800 border-none active:border-none active:ring-0 active:ring-offset-0 pl-10 pr-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

            {showResults && searchResults.length > 0 && (
                <div className="absolute top-full right-0 w-2xs text-sm/6 mt-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-2xl z-50 overflow-hidden">
                    {searchResults.map((result, index) => (
                        <Link
                            onClick={onClick}
                            key={index}
                            href={result.url}
                            className="w-full md:w-[200px] block m-1 p-2 rounded-md transition-all duration-200 hover:text-[107%] hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm/6 border-gray-200 dark:border-zinc-700"
                        >
                            {result.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
} 