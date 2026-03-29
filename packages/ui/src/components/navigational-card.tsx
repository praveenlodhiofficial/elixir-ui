"use client";

import Link from "next/link";

import clsx from "clsx";
import { ArrowRightIcon, BookOpenIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardTitle } from "./card";

export interface NavigationalCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  trailingIcon?: React.ReactNode; 
  href?: string;
  className?: string;
}

export function NavigationalCard({
  title = "Navigational Card",
  description = "This is a description for the navigational card. It can be a brief summary or key information.",
  icon = <BookOpenIcon />,
  trailingIcon, 
  href = "#",
  className,
}: NavigationalCardProps) {
  return (
    <Link
      href={href}
      className={clsx("group max-w-85 no-underline", className)}
    >
      <Card className="flex h-fit justify-center">
        <CardContent className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
          {icon && (
            <div className="bg-muted flex aspect-square size-full items-center justify-center rounded-md">
              {icon}
            </div>
          )}

          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription className="line-clamp-2 text-[13px] font-normal">
              {description}
            </CardDescription>
          </div>

          {trailingIcon && (
            <div
              className={clsx(
                "flex items-center justify-center",
                "transition-all duration-200",
                "group-hover:translate-x-1 group-hover:-rotate-45 group-hover:opacity-100"
              )}
            >
              {trailingIcon}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}