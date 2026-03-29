"use client";

import Link from "next/link";

import clsx from "clsx";
import { ArrowRightIcon, BookOpenIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardTitle } from "./card";

export interface NavigationalCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export function NavigationalCard({
  title = "Navigational Card",
  description = "This is a description for the navigational card. It can be a brief summary or key information.",
  icon = <BookOpenIcon />,
  href = "#",
  className,
}: NavigationalCardProps) {
  return (
    <Link
      href={href}
      className={clsx("group max-w-85 no-underline", className)}
    >
      <Card className="flex h-full justify-center">
        <CardContent
          className={clsx("grid grid-cols-[auto_1fr_auto] items-center gap-4")}
        >
          {icon && (
            <div
              className={clsx(
                "bg-muted flex aspect-square size-full items-center justify-center rounded-md"
              )}
            >
              {icon}
            </div>
          )}

          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription className="line-clamp-2 text-[13px] font-normal">
              {description}
            </CardDescription>
          </div>

          <ArrowRightIcon
            className={clsx(
              "size-4 transition-all delay-100 duration-200",
              "group-hover:translate-x-1 group-hover:-rotate-45 group-hover:opacity-100"
            )}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
