"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  src?: string;
  className?: string;
}

export function CopyButton({
  value,
  className,
  src,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        "relative z-10 h-8 w-8 bg-secondary cursor-pointer transition-all duration-100",
        className
      )}
      onClick={() => {
        navigator.clipboard.writeText(value);
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only transition-all duration-300">Copy</span>
      {hasCopied ? (
        <Check className="h-4 w-4 text-green-600 dark:text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-zinc-800 dark:text-zinc-200 cursor-pointer" />
      )}
    </Button>
  );
} 