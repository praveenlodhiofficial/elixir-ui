"use client";

import { useState } from "react";

import * as motion from "motion/react-client";
import clsx from "clsx";

import { cn } from "../lib/utils";
import { ActionButton } from "./action-button";

export interface ReadMoreProps {
  children: React.ReactNode;
  lines?: number;
  className?: string;
  duration?: number;
}

export function ReadMore({
  children,
  lines = 4,
  className,
  duration = 0.35,
}: ReadMoreProps) {
  const [open, setOpen] = useState(false);

  // ✅ FIXED: always convert to string
  const textContent = Array.isArray(children)
    ? children.join("")
    : String(children);

  const content = textContent.split("\n\n");

  return (
    <div className={cn(clsx("w-full", "space-y-5"), className)}>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : `${lines * 1.5}em`,
        }}
        transition={{ duration, ease: "easeInOut" }}
        className={cn("overflow-hidden")}
      >
        <div className={cn(clsx("whitespace-pre-line", "space-y-4"))}>
          {content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </motion.div>

      <ActionButton
        variant="link"
        onClick={() => setOpen(!open)}
        className={cn(
          clsx("cursor-pointer", "rounded-none", "p-0", "text-blue-500")
        )}
      >
        {open ? "Read less" : "Read more"}
      </ActionButton>
    </div>
  );
}
