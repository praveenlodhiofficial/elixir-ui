import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./ToggleTheme";
import { Input } from "./ui/input";

export default function Navbar() {
    return (
        <nav>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
                <div className="flex items-center gap-10">
                    
                    <Link href="/" className="flex items-center gap-2 justify-center">
                        <Image src="/logo/elixir-logo.png" alt="Elixir UI" width={21} height={21} className="invert-0 dark:invert-100" />
                        <span className="text-3xl font-bold">Elixir UI</span>
                    </Link>
                    
                    <div className="flex items-center gap-5">
                        <Link href="/components">Components</Link>
                        <Link href="/templates">Templates</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                </div>

                <div className="flex items-center gap-10">

                    {/* sovial handles */}
                    <div className="flex items-center gap-5">
                        <Link href="/">Twitter</Link>
                        <Link href="/">Github</Link>
                    </div>

                    {/* toggle theme */}
                    <ToggleTheme />

                    {/* search component */}
                    <Input
                        placeholder="Search components..."
                        className="border rounded-full bg-gray-100 active:border-none active:ring-0 active:ring-offset-0 text-white px-3"
                    />

                </div>
            </div>
        </nav>
    )
}
