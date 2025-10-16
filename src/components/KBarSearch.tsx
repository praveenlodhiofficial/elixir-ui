"use client";

import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { TbComponents } from "react-icons/tb";
import { BsAlignStart } from "react-icons/bs";
import { motion } from "motion/react";
import {
   KBarAnimator,
   KBarPortal,
   KBarPositioner,
   KBarSearch,
   KBarResults,
   useMatches,
} from "kbar";

function RenderResults() {
   const { results } = useMatches();

   return (
      <KBarResults
         items={results}
         onRender={({ item, active }) => {
            if (typeof item === "string") {
               // Section header
               return (
                  <div className="text-muted-foreground px-3 py-2 text-[10px] font-medium tracking-wider uppercase dark:text-lime-300">
                     {item}
                  </div>
               );
            }

            // Action item
            const isExternal = item.subtitle?.startsWith("http");
            let Icon: React.ReactNode = isExternal ? "🔗" : "→";

            // Use components icon for all docs items except non-component sections
            const isDocs = typeof item.id === "string" && item.id.startsWith("docs:");
            const sectionLabel = typeof item.section === "string" ? item.section : "";
            const isComponentSection =
               isDocs &&
               sectionLabel !== "Getting Started" &&
               sectionLabel !== "Follow for more updates";
            if (isComponentSection) Icon = <TbComponents className="h-4 w-4" />;
            if (isDocs && sectionLabel === "Getting Started")
               Icon = <BsAlignStart className="h-4 w-4" />;

            // Explicit overrides
            if (item.id === "docs:components") Icon = <TbComponents className="h-4 w-4" />;
            if (item.id === "docs:templates") Icon = <HiTemplate className="h-4 w-4" />;
            if (item.id === "docs:Twitter @praveenlodhi99")
               Icon = <FaXTwitter className="h-4 w-4" />;
            if (item.id === "twitter") Icon = <FaXTwitter className="h-4 w-4" />;
            if (item.id === "github") Icon = <IoLogoGithub className="h-4 w-4" />;
            const isNew = (item as { new?: boolean }).new;

            return (
               <motion.div
                  className={`group relative flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                     active ? "text-accent-foreground" : "hover:bg-accent/50"
                  }`}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                     duration: 0.25,
                     ease: "easeOut",
                  }}
               >
                  {active && (
                     <motion.div
                        layoutId="kbar-active-bg"
                        className="absolute inset-0 border-l-2 border-lime-400 bg-gradient-to-r from-lime-400/15 via-lime-400/7 to-transparent"
                        transition={{
                           type: "spring",
                           stiffness: 300,
                           damping: 26,
                           mass: 1,
                        }}
                     />
                  )}
                  <div className="bg-muted text-muted-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm transition-colors duration-200 group-hover:text-lime-400">
                     {Icon}
                  </div>
                  <div className="min-w-0 flex-1">
                     <div className="flex items-center gap-2">
                        <div className="text-foreground truncate text-sm font-medium">
                           {item.name}
                        </div>
                        {isNew && (
                           <span className="rounded-full bg-zinc-900 px-1.5 py-[0.7px] text-[11px] font-semibold text-zinc-100 dark:bg-lime-400 dark:text-black">
                              New
                           </span>
                        )}
                     </div>
                     {/* {description && !hideDescription ? (
                        <div
                           className={`mt-0.5 line-clamp-2 text-[12px] ${
                              active ? 'text-accent-foreground/80' : 'text-muted-foreground'
                           }`}
                           title={description}
                        >
                           {description}
                        </div>
                     ) : null} */}
                  </div>
                  {item.shortcut && (
                     <div className="flex gap-1">
                        {item.shortcut.map((key, index) => (
                           <kbd
                              key={index}
                              className="border-border bg-muted rounded border px-1.5 py-0.5 text-xs"
                           >
                              {key}
                           </kbd>
                        ))}
                     </div>
                  )}
               </motion.div>
            );
         }}
      />
   );
}

export default function KBarSearchComponent() {
   return (
      <KBarPortal>
         <KBarPositioner className="fixed inset-0 z-[100] bg-black/50 p-4 backdrop-blur-md md:p-8">
            <KBarAnimator className="bg-background ring-border mx-auto w-full max-w-2xl overflow-hidden rounded-xl border shadow-lg ring-1">
               {/* Header with search */}
               <div className="border-border border-b p-3">
                  <div className="flex items-center gap-3">
                     <Search className="text-muted-foreground h-4 w-4" />
                     <KBarSearch
                        className="text-foreground placeholder:text-muted-foreground flex-1 bg-transparent text-sm outline-none"
                        placeholder="Search commands, components, or pages…"
                     />
                  </div>
               </div>

               {/* Results container */}
               <ScrollArea className="max-h-[70vh]">
                  <RenderResults />
               </ScrollArea>

               {/* Footer with shortcuts */}
               <div className="border-border text-muted-foreground border-t p-3 text-xs">
                  <div className="flex items-center justify-between">
                     <span>
                        Press{" "}
                        <kbd className="border-border bg-muted rounded border px-1.5 py-0.5">
                           ↑↓
                        </kbd>{" "}
                        to navigate,{" "}
                        <kbd className="border-border bg-muted rounded border px-1.5 py-0.5">↵</kbd>{" "}
                        to select
                     </span>
                     <span>
                        Press{" "}
                        <kbd className="border-border bg-muted rounded border px-1.5 py-0.5">
                           esc
                        </kbd>{" "}
                        to close
                     </span>
                  </div>
               </div>
            </KBarAnimator>
         </KBarPositioner>
      </KBarPortal>
   );
}
