"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { useState } from "react";
import { motion } from "framer-motion";
// import { KBarSearchComponent } from './KBarSearch'
import { TwitterIcon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ActionInput } from "@/components/elixir-ui/action-input";
import { Search } from "lucide-react";
import { IoSparkles } from "react-icons/io5";
import PromoBanner from "@/components/elixir-ui/promo-banner";
import { useKBar } from "kbar";
import KBarSearchComponent from "@/components/KBarSearch";

interface NavbarProps {
   className?: string;
   pageName?: string;
}

// export default function Navbar({ className, pageName }: NavbarProps) {
export default function Navbar({ className: _className, pageName: _pageName }: NavbarProps) {
   // Suppress unused parameter warnings
   void _className;
   void _pageName;
   const [isOpen, setIsOpen] = useState(false);
   const { query } = useKBar();

   const handleLinkClick = () => {
      setIsOpen(false);
   };

   return (
      <div className="mx-auto w-full">
         <PromoBanner
            message="Access an ever-growing collection of premium, meticulously crafted components"
            icon={<IoSparkles className="size-3.5 md:size-4" />}
         />
         <nav className="mx-auto w-full px-4 md:px-6 lg:px-[10.5rem]">
            <div className="flex items-center justify-between border-b border-gray-100 md:py-2.5 dark:border-zinc-800">
               <div className="flex items-center gap-2 md:gap-4">
                  <SidebarTrigger className="lg:hidden" />
                  <Link href="/" className="flex items-center justify-center gap-1 md:gap-1.5">
                     <Image
                        src="/logo/elixir-logo-light.png"
                        alt="Elixir UI"
                        width={20}
                        height={20}
                        className="size-5 rounded-md contrast-200 invert-0 md:size-7 dark:contrast-120 dark:invert-100 dark:saturate-150"
                        style={{ objectFit: "contain" }}
                     />
                     <span className="text-lg font-semibold md:text-2xl md:font-bold lg:text-[27px]">
                        Elixir UI
                     </span>
                  </Link>

                  <div className="ml-5 hidden items-center gap-5 text-[15px] md:font-semibold lg:flex">
                     <Link href="/docs">Documentation</Link>
                     <Link href="/templates">Templates</Link>
                     <Link href="/about">About</Link>
                     <Link href="/contact">Contact</Link>
                  </div>
               </div>

               <div className="flex items-center gap-10 text-[15px]">
                  {/* social handles */}
                  <div className="hidden items-center gap-5 md:font-semibold lg:flex">
                     <Link href="https://x.com/praveenlodhi99" target="_blank">
                        Twitter
                     </Link>
                     <Link href="https://github.com/praveenlodhiofficial" target="_blank">
                        Github
                     </Link>
                  </div>

                  <div className="flex items-center gap-2">
                     <div className="hidden w-full min-w-[14rem] md:block">
                        <ActionInput
                           type="search"
                           placeholder="Search commands…"
                           onFocus={() => query.toggle()}
                           rightIcon={
                              <Search className="mr-1 h-6 w-6 scale-115 rounded-full bg-zinc-900 p-1.5 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" />
                           }
                           rightIconRotate={false}
                           className="border-primary-text-color/15 text-light text-primary-text-color/70 w-full rounded-full border bg-zinc-900/1 px-5 py-4.5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                     </div>

                     <KBarSearchComponent />

                     {/* toggle theme */}
                     <div className="sm:block">
                        <ThemeToggleButton
                           variant="circle-blur"
                           start="top-right"
                           className="scale-95 md:scale-115"
                        />
                     </div>
                  </div>

                  {/* search component */}
                  {/* <div className="hidden lg:block">
            <KBarSearchComponent onClick={handleLinkClick} />
          </div> */}

                  {/* Mobile Menu with Stretching Animation */}
                  <motion.div
                     initial={{
                        scaleY: 0,
                        scaleX: 0.8,
                        opacity: 0,
                     }}
                     animate={
                        isOpen
                           ? {
                                scaleY: 1,
                                scaleX: 1,
                                opacity: 1,
                             }
                           : {}
                     }
                     exit={{
                        scaleY: 0,
                        scaleX: 0.8,
                        opacity: 0,
                     }}
                     transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                     }}
                     className={`font-exo absolute top-5 right-3 left-3 z-50 flex w-[calc(100%-24px)] flex-col flex-wrap gap-1 rounded-md border bg-white px-5 py-10 text-center text-2xl text-black uppercase shadow-lg md:hidden dark:bg-black dark:text-white`}
                     style={{
                        transformOrigin: "top right",
                     }}
                  >
                     <button
                        className="absolute top-0 right-0 cursor-pointer md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                     >
                        {isOpen ? (
                           <TwitterIcon className="z-20 m-1 scale-110" />
                        ) : (
                           <MenuIcon className="z-20" />
                        )}
                     </button>

                     <Link
                        href="/"
                        onClick={handleLinkClick}
                        className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                     >
                        Home
                     </Link>
                     <Link
                        href="/components"
                        onClick={handleLinkClick}
                        className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                     >
                        Components
                     </Link>

                     <div className="mb-4 w-full px-8">
                        {/* <KBarSearchComponent
                                        onClick={handleLinkClick}
                                        className="w-full"
                                   /> */}
                     </div>

                     <Link
                        href="/templates"
                        onClick={handleLinkClick}
                        className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                     >
                        Templates
                     </Link>
                     <Link
                        href="/about"
                        onClick={handleLinkClick}
                        className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                     >
                        About
                     </Link>
                     <Link
                        href="/contact"
                        onClick={handleLinkClick}
                        className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                     >
                        Contact
                     </Link>
                  </motion.div>
               </div>
            </div>
         </nav>
      </div>
   );
}
