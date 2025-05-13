"use client";

import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./ToggleTheme";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SearchComponent } from "./SearchComponent";

interface NavbarProps {
    className?: string;
    pageName?: string;
}

export default function Navbar({ className, pageName }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="w-full mt-2 md:px-6 lg:px-2">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 py-4">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-2 justify-center">
                        <Image src="/logo/elixir-logo.png" alt="Elixir UI" width={18} height={18} className="invert-0 dark:invert-100" />
                        <span className="text-2xl font-bold">Elixir UI</span>
                    </Link>

                    <div className="items-center gap-5  hidden md:flex md:font-semibold">
                        <Link href="/components">Components</Link>
                        <Link href="/templates">Templates</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    {/* social handles */}
                    <div className="items-center gap-5 hidden lg:flex md:font-semibold">
                        <Link href="https://x.com/praveenlodhi99" target="_blank">Twitter</Link>
                        <Link href="https://github.com/praveenlodhiofficial" target="_blank">Github</Link>
                    </div>

                    {/* toggle theme */}
                    <div className="sm:block">
                        <ToggleTheme />
                    </div>

                    {/* search component */}
                    <div className="hidden lg:block">
                        <SearchComponent onClick={handleLinkClick}/>
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


                    <Link href="/" onClick={handleLinkClick} className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">Home</Link>
                    <Link href="/components" onClick={handleLinkClick} className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">Components</Link>
                    
                    <div className="w-full px-8 mb-4">
                        <SearchComponent onClick={handleLinkClick} className="w-full" />
                    </div>

                    <Link href="/templates" onClick={handleLinkClick} className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">Templates</Link>
                    <Link href="/about" onClick={handleLinkClick} className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">About</Link>
                    <Link href="/contact" onClick={handleLinkClick} className="text-4xl font-extrabold md:text-7xl md:font-bold mb-3 md:mb-4">Contact</Link>
                </motion.div>
            </div>
        </nav>
    )
}
