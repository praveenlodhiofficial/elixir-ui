"use client";

import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "../lib/utils";

const actionButtonVariants = cva(
  "group relative flex items-center justify-between overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ActionButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ActionButton({
  children = "Button Name",
  icon = <ChevronDown size={20} />,
  variant = "default",
  className,
  onClick,
}: ActionButtonProps & VariantProps<typeof actionButtonVariants>) {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onClick}
      data-variant={variant}
      className={cn(clsx(actionButtonVariants({ variant })), className)}
    >
      {/* TEXT */}
      <div className="relative h-5 overflow-hidden">
        {/* original */}
        <motion.span
          variants={{
            rest: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          className="block"
        >
          {children}
        </motion.span>

        {/* replica */}
        <motion.span
          variants={{
            rest: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          className={cn(
            "absolute top-0 left-0 block",
            variant === "link" && "underline"
          )}
        >
          {children}
        </motion.span>
      </div>

      {/* ICON */}
      <div className="relative ml-4 h-6 w-6 overflow-hidden">
        {/* original */}
        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: "100%" },
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="flex h-full w-full items-center justify-center"
        >
          {icon}
        </motion.div>

        {/* replica */}
        <motion.div
          variants={{
            rest: { y: "-100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
        >
          {icon}
        </motion.div>
      </div>
    </motion.button>
  );
}
