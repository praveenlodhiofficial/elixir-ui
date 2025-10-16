"use client";

import { Terminal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function CopyCLI({ componentName }: { componentName: string }) {
   const [copied, setCopied] = useState(false);

   const handleCopyCLI = async () => {
      const cli = `npx shadcn@latest add ${componentName}`;
      try {
         await navigator.clipboard.writeText(cli);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      } catch (err) {
         console.error("Failed to copy: ", err);
      }
   };

   return (
      <motion.div
         className="relative w-full overflow-hidden rounded-md md:w-fit md:min-w-40"
         animate={{
            backgroundColor: copied ? "#16a34a" : "transparent",
            borderColor: copied ? "#16a34a" : "hsl(var(--border))",
         }}
         transition={{ duration: 0.3, ease: "easeInOut" }}
      >
         <Button
            variant="outline"
            onClick={handleCopyCLI}
            className="relative h-full w-full border bg-transparent hover:bg-transparent"
         >
            <motion.div
               className="flex items-center justify-center gap-2"
               initial={{ scale: 1 }}
               whileTap={{ scale: 0.95 }}
               transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
               }}
            >
               <AnimatePresence mode="wait">
                  {copied ? (
                     <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{
                           type: "spring",
                           stiffness: 500,
                           damping: 20,
                        }}
                     >
                        <Check className="h-5 w-5 text-white" />
                     </motion.div>
                  ) : (
                     <motion.div
                        key="terminal"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -180 }}
                        transition={{
                           type: "spring",
                           stiffness: 500,
                           damping: 20,
                        }}
                     >
                        <Terminal className="h-5 w-5" />
                     </motion.div>
                  )}
               </AnimatePresence>
               <motion.h3
                  animate={{
                     color: copied ? "white" : "inherit",
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-sm whitespace-nowrap"
               >
                  {copied ? "Copied!" : `${componentName}`}
               </motion.h3>
            </motion.div>
         </Button>
      </motion.div>
   );
}
