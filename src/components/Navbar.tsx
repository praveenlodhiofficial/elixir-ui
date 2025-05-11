import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
    return (
        <nav>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-2 justify-center">
                        <Image src="/logo/elixir-logo.png" alt="Elixir UI" width={21} height={21} className="invert" />
                        <span className="text-3xl font-bold">Elixir UI</span>
                    </Link>
                    <div className="flex items-center gap-5">
                        <Link href="/components">Components</Link>
                        <Link href="/templates">Templates</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                <div>

                    {/* sovial handles */}
                    <div className="flex items-center gap-5">
                        <Link href="/">Twitter</Link>
                        <Link href="/">Github</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
