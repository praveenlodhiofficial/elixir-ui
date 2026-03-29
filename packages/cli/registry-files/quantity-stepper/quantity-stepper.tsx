"use client";

import * as React from "react";

import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "../lib/utils";
import { Button } from "./button";

export interface QuantityStepperProps {
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function QuantityStepper({
  className,
  variant = "outline",
  size = "lg",
}: QuantityStepperProps) {
  const [count, setCount] = React.useState(0);

  return (
    <div className={cn("relative min-w-28", clsx(className))}>
      <AnimatePresence mode="wait" initial={false}>
        {count === 0 ? (
          <motion.div
            key="add"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            <Button
              variant={variant}
              size={size}
              className="w-full cursor-pointer py-5"
              onClick={() => setCount(1)}
            >
              ADD
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="stepper"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="bg-primary flex items-center justify-between rounded-md border"
          >
            <Button
              type="button"
              size="icon-lg"
              variant="default"
              onClick={() => setCount((c) => Math.max(0, c - 1))}
              className="cursor-pointer"
            >
              <Minus />
            </Button>

            <motion.span
              key={count}
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-primary-foreground w-8 text-center font-medium"
            >
              {count}
            </motion.span>

            <Button
              type="button"
              size="icon-lg"
              variant="default"
              onClick={() => setCount((c) => c + 1)}
              className="cursor-pointer"
            >
              <Plus />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
