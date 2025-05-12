"use client";

import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./ToggleTheme";
import { Input } from "./ui/input";
import { Menu, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DOCS } from "@/app/(components)/layout-parts/documentation.constant";

interface NavbarProps {
    className?: string;
    pageName?: string;
}

export default function Navbar({ className, pageName }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
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
        <nav className="w-full mt-2 md:px-6 lg:px-2">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 py-4">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-2 justify-center">
                        <Image src="/logo/elixir-logo.png" alt="Elixir UI" width={18} height={18} className="invert-0 dark:invert-100" />
                        <span className="text-2xl font-bold">Elixir UI</span>
                    </Link>

                    <div className="items-center gap-5  hidden md:flex">
                        <Link href="/components">Components</Link>
                        <Link href="/templates">Templates</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    {/* social handles */}
                    <div className="items-center gap-5 hidden lg:flex ">
                        <Link href="https://x.com/praveenlodhi99" target="_blank">Twitter</Link>
                        <Link href="https://github.com/praveenlodhiofficial" target="_blank">Github</Link>
                    </div>

                    {/* toggle theme */}
                    <div className="sm:block">
                        <ToggleTheme />
                    </div>

                    {/* search component */}
                    <div className="relative hidden lg:block">
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
                            <div className="absolute top-full right-0 w-2xs text-sm mt-4 bg-white dark:bg-transparent rounded-lg shadow-2xl border dark:border-gray-200 border-zinc-700 z-50 overflow-hidden">
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

                {/* Mobile Menu Button */}
                <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} className="z-20" /> : <Menu size={24} className="z-20" />}
                </button>

                {/* Mobile Menu with Stretching Animation */}
                <motion.div
                    initial={{ scaleY: 0, scaleX: 0.8, opacity: 0 }}
                    animate={isOpen ? { scaleY: 1, scaleX: 1, opacity: 1 } : {}}
                    exit={{ scaleY: 0, scaleX: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute top-5 right-3 left-3 w-[calc(100%-24px)] uppercase border text-black dark:text-white bg-white dark:bg-black flex-wrap gap-1 text-2xl font-exo text-center shadow-lg rounded-md flex flex-col px-5 py-10 md:hidden z-50`}
                    style={{ transformOrigin: "top right" }}
                >
                    <button className="md:hidden cursor-pointer absolute top-0 right-0" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} className="z-20 m-1 scale-110" /> : <Menu size={24} className="z-20" />}
                    </button>

                    <Link href="/" className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">Home</Link>
                    <Link href="/components" className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">Components</Link>
                    <Link href="/templates" className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">Templates</Link>
                    <Link href="/about" className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">About</Link>
                    <Link href="/contact" className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">Contact</Link>
                </motion.div>
            </div>
        </nav>
    )
}
