import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./ToggleTheme";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export default function Navbar() {
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
                    <Input
                        placeholder="Search components..."
                        className="w-[200px] rounded-full bg-gray-100 dark:bg-zinc-800 border-none active:border-none active:ring-0 active:ring-offset-0 pl-10 pr-3"
                        icon={<Search className="w-4 h-4 cursor-pointer" />}   
                    />
                </div>
            </div>
        </nav>
    )
}
