"use client";
import React, { useState } from "react";
import Highlight from "react-highlight";
// import "highlight.js/styles/tomorrow-night-blue.css";
import "highlight.js/styles/atom-one-light.css";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeHighlightProps {
  code?: string;
  className?: string;
  inTab?: boolean;

  withExpand?: boolean;
  lang?: "tsx" | "shell";
}

const CodeHighlight = ({
  code,
  inTab = false,
  withExpand = false,
  lang = "tsx",
  className,
}: CodeHighlightProps) => {
  const [copied, setCopied] = useState(false);
  const [expand, setExpanded] = useState(!withExpand);
  return (
    <div className={cn("relative rounded-md m-5 font-exo dark:text-zinc-200 text-zinc-800 bg-background", className)}>
      <Button
        className={cn(
          "absolute right-4 top-4 h-8 w-8 bg-secondary cursor-pointer transition-all duration-100",
          (inTab || lang === "shell") && "right-1 top-1"
        )}
        variant="ghost"
        size="icon"
        onClick={() => {
          navigator.clipboard.writeText(code || "");
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        }}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600 dark:text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-zinc-800 dark:text-zinc-200 cursor-pointer" />
        )}
      </Button>
      <div
        className={cn(
          "max-h-[130px] overflow-y-auto overflow-x-hidden rounded-md custom-scrollbar contrast-150 saturate-200",
          expand && "max-h-[400px] overflow-y-auto overflow-x-hidden scroll-smooth"
        )}
      >
        <Highlight className={cn("h-full font-exo text-xs", lang)}>{code}</Highlight>
      </div>
      <div
        className={cn(
          "absolute bottom-2 flex w-full items-center justify-center  transition-opacity duration-300 ",
          inTab && "bottom-0",
          !withExpand && "hidden"
        )}
      >
        <Button
          variant="outline"
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        >
          {expand ? "Collapse" : "Expand"}
        </Button>
      </div>
    </div>
  );
};

export default CodeHighlight;
