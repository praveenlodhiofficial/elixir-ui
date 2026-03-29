"use client";

import { useState } from "react";

import { ActionButton } from "@workspace/ui/components/action-button";
import { cn } from "@workspace/ui/lib/utils";

interface TabsProps {
  component: React.ReactNode;
  source: React.ReactNode;
  hideCode?: boolean;
  align?: "center" | "start" | "end";
  relative?: boolean;
  className?: string;
  previewClassName?: string;
}

export function ComponentPreviewTabs({
  component,
  source,
  hideCode,
  align = "center",
  relative = false,
  className,
  previewClassName,
}: TabsProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  // ✅ Shared container styles (FIXED POSITION)
  const containerStyles = cn(
    "w-full rounded-xl border bg-background hide-scrollbar",
    "min-h-[60vh] max-h-[70vh]",
    "overflow-auto",
    relative && "relative"
  );

  return (
    <div className={cn("not-prose", className)}>
      {/* Tabs */}
      {!hideCode && (
        <div className="mb-4 flex justify-end gap-2">
          <ActionButton
            icon={null}
            onClick={() => setTab("preview")}
            className={cn(
              "h-10 min-w-30 rounded-md px-5 py-1 text-sm",
              tab === "preview"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80 border"
            )}
          >
            Preview
          </ActionButton>

          <ActionButton
            icon={null}
            onClick={() => setTab("code")}
            className={cn(
              "h-10 min-w-30 rounded-md px-5 py-1 text-sm",
              tab === "code"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80 border"
            )}
          >
            Code
          </ActionButton>
        </div>
      )}

      {/* Preview */}
      {tab === "preview" && (
        <div
          className={cn(
            containerStyles,
            "flex",
            {
              "items-center justify-center": align === "center",
              "items-start justify-start": align === "start",
              "items-end justify-end": align === "end",
            },
            previewClassName
          )}
        >
          {component}
        </div>
      )}

      {/* Code */}
      {!hideCode && tab === "code" && (
        <div className={cn(containerStyles, "h-full")}>{source}</div>
      )}
    </div>
  );
}
