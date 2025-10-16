"use client";

import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CopyButtonProps {
   text: string;
   className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
   const [copied, setCopied] = useState(false);

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(text);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      } catch (err) {
         console.error("Failed to copy: ", err);
      }
   };

   return (
      <Button
         variant="outline"
         size="sm"
         onClick={handleCopy}
         className={`transform transition-all duration-300 ease-in-out hover:scale-90 active:scale-95 ${
            copied
               ? "border-green-500 bg-green-500 text-white dark:border-green-600 dark:bg-green-600"
               : ""
         } ${className}`}
      >
         <div className="relative h-4 w-4">
            <Copy
               className={`h-4 w-4 transition-all duration-300 ease-in-out ${
                  copied ? "scale-75 rotate-180 opacity-0" : "scale-100 rotate-0 opacity-100"
               }`}
            />
            <Check
               className={`absolute inset-0 h-4 w-4 transition-all duration-300 ease-in-out ${
                  copied ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-180 opacity-0"
               }`}
            />
         </div>
      </Button>
   );
}
