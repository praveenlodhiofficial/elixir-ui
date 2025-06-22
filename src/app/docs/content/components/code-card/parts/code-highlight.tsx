"use client";
import React, { useState } from "react";
import Highlight from "react-highlight";
// import "highlight.js/styles/tomorrow-night-blue.css";
import "highlight.js/styles/atom-one-light.css";

import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy";
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
  const [expand, setExpanded] = useState(!withExpand);

  if (!code) return null;

  return (
    <div className={cn("relative rounded-md my-5 mx-2 md:mx-5 font-exo dark:text-zinc-200 text-zinc-800 bg-background no-scrollbar code-highlight-container", className)}>
      <CopyButton
        value={code}
        className={cn(
          "absolute right-4 top-4",
          (inTab || lang === "shell") && "right-1 top-1"
        )}
        aria-label="Copy code"
      />
      <div
        className={cn(
          "max-h-[400px] min-h-[40px] overflow-y-auto overflow-x-auto rounded-md contrast-150 saturate-200",
          expand ? "max-h-[400px]" : "max-h-[130px]"
        )}
      >
        <Highlight className={cn("font-exo text-xs/6 whitespace-pre", lang)}>
          {code}
        </Highlight>
      </div>
      {withExpand && (
        <div
          className={cn(
            "absolute bottom-2 flex w-full items-center justify-center transition-opacity duration-300",
            inTab && "bottom-0"
          )}
        >
          <Button
            variant="outline"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expand ? "Collapse" : "Expand"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CodeHighlight;
