"use client";

import { CopyButton } from "@/components/ui/copy-button";
import { useRef, useEffect, useState } from "react";

interface UsageStepsProps {
   stepNumber: number;
   title: React.ReactNode;
   children: React.ReactNode;
}

export function UsageSteps({ stepNumber, title, children }: UsageStepsProps) {
   const codeRef = useRef<HTMLDivElement>(null);
   const [codeText, setCodeText] = useState("");

   useEffect(() => {
      if (codeRef.current) {
         // Extract visible text as copied by users and normalize line breaks
         const codeElement = codeRef.current.querySelector("pre code") as HTMLElement | null;
         const raw = codeElement?.innerText ?? codeRef.current.innerText ?? "";
         const normalized = raw
            .replace(/\r\n/g, "\n")
            .replace(/\n{2,}/g, "\n")
            .replace(/[\t ]+$/gm, "")
            .trimEnd();
         setCodeText(normalized);
      }
   }, [children]);

   return (
      <div className="mt-5 flex flex-col">
         <div className="flex items-center gap-2 text-[13px] font-semibold md:gap-3 md:text-[15px]/6 md:font-bold">
            <span className="flex size-4 items-center justify-center rounded-full bg-zinc-800 p-2.5 text-white md:size-5 lg:size-6">
               <p className="text-xxs md:text-xs">{stepNumber}</p>
            </span>
            <h4 className="text-[13px] font-medium md:text-[15px]/6 md:font-semibold">{title}</h4>
         </div>

         <div className="relative">
            <div
               ref={codeRef}
               className="mt-2 ml-2 flex w-full gap-5 border-l-2 border-zinc-300 pl-6 text-xs leading-[calc(1em-1px)] tracking-tight md:ml-2.5 md:pl-9 md:text-[15px] lg:pl-12 dark:border-zinc-800"
            >
               {children}
            </div>
            {codeText && (
               <div className="animate-in fade-in-0 slide-in-from-right-2 absolute top-5 right-5.5 duration-300">
                  <CopyButton
                     text={codeText}
                     className="bg-background/90 hover:bg-background scale-80 rounded-lg border-zinc-200 p-2 shadow-sm backdrop-blur-sm dark:border-zinc-700"
                  />
               </div>
            )}
         </div>
      </div>
   );
}
