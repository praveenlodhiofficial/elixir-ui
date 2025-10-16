"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ActionInputProps extends React.ComponentProps<"input"> {
   leftIcon?: React.ReactNode;
   rightIcon?: React.ReactNode;
   leftIconRotate?: boolean;
   rightIconRotate?: boolean;
}

function ActionInput({
   className,
   type,
   leftIcon,
   rightIcon,
   leftIconRotate = false,
   rightIconRotate = true,
   ...props
}: ActionInputProps) {
   return (
      <div className="relative flex items-center">
         <input
            type={type}
            data-slot="input"
            className={cn(
               "file:text-foreground placeholder:text-muted-foreground selection:bg-primary placeholder- selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
               leftIcon && "pl-10",
               rightIcon && "pr-10",
               !leftIcon && !rightIcon && "px-3",
               "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
               "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
               className
            )}
            style={{
               textIndent: leftIcon ? "0" : "0",
               paddingLeft: leftIcon ? "2.8rem" : undefined,
               paddingRight: rightIcon ? "2.8rem" : undefined,
            }}
            {...props}
         />
         {leftIcon && (
            <div
               className={cn(
                  "absolute top-1/2 left-2 z-10 flex -translate-y-1/2 items-center justify-center duration-200",
                  leftIconRotate && "rotate-0 transition-all hover:rotate-[-45deg]"
               )}
            >
               {leftIcon}
            </div>
         )}
         {rightIcon && (
            <div
               className={cn(
                  "absolute top-1/2 right-1 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center duration-200",
                  rightIconRotate && "rotate-0 transition-all hover:rotate-[-45deg]"
               )}
            >
               {rightIcon}
            </div>
         )}
      </div>
   );
}

export { ActionInput };
