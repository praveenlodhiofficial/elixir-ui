"use client";

import Image from "next/image";

import clsx from "clsx";

import { cn } from "../lib/utils";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

/* -------------------- Types -------------------- */
type Variant = "background" | "stat" | "media" | "text";

export interface FeatureCardProps {
  variant: Variant;
  title?: string;
  subtitle?: string;
  description?: string;
  statLabel?: string;
  statValue?: string | number;
  bgImage?: string;
  image?: string;
  className?: string;
}

/* -------------------- Component -------------------- */
export function FeatureCard({
  variant = "background",
  title = "Feature Card",
  subtitle = "Subtitle Here",
  description = "This is a description for the feature card. It can be a brief summary or key information about the feature being highlighted.",
  statLabel = "Stat Label",
  statValue = "0",
  bgImage = "https://images.unsplash.com/photo-1670884307458-4977f638a933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  image = "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  className = "",
}: FeatureCardProps) {
  /* ---------- Background Variant ---------- */
  if (variant === "background") {
    return (
      <Card
        style={{ backgroundImage: `url(${bgImage})` }}
        className="aspect-video w-4xl rounded-xl lg:rounded-2xl"
      >
        <CardContent className="flex h-full flex-col justify-between">
          <div className="flex h-full flex-col justify-between p-3">
            <div className="space-y-5">
              <p className="text-muted-foreground text-sm font-medium uppercase">
                {subtitle}
              </p>
              <CardTitle className="max-w-2xl text-2xl font-semibold text-white md:text-3xl lg:text-5xl">
                {description}
              </CardTitle>
            </div>
            <div>
              <CardDescription className="text-lg font-semibold text-white">
                {title}
              </CardDescription>
              <p className="text-muted-foreground text-sm font-medium uppercase">
                {statLabel}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  /* ---------- Stat Variant ---------- */
  if (variant === "stat") {
    return (
      <Card
        className={cn(
          clsx("relative flex aspect-12/17 h-full w-xs"),
          className
        )}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        <CardContent className="flex h-full flex-col justify-between">
          <div className="flex h-full flex-col justify-between p-3">
            <p className="text-muted-foreground text-sm font-medium uppercase">
              {subtitle}
            </p>
            <div className="space-y-3">
              <CardTitle className="text-xl font-semibold text-white md:text-2xl lg:text-6xl">
                {statValue}
              </CardTitle>
              <p className="text-muted-foreground text-sm font-medium uppercase">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // if (variant === "stat") {
  //   return (
  //     <CardContent
  //       className={cn(
  //         clsx(
  //           "flex aspect-13/16 h-full max-w-xs flex-col justify-between rounded-2xl bg-amber-200 px-5 text-black"
  //         ),
  //         className
  //       )}
  //     >
  //       <p className="text-sm font-semibold uppercase">{subtitle}</p>

  //       <p className="flex flex-col gap-2">
  //         <span className="text-6xl font-bold">{statValue}</span>
  //         <span className="font-medium">{description}</span>
  //       </p>
  //     </CardContent>
  //   );
  // }

  /* ---------- Media Variant ---------- */
  if (variant === "media") {
    return (
      <CardContent
        className={cn(
          clsx(
            "relative aspect-13/16 h-full max-w-sm rounded-2xl bg-zinc-900 px-5 text-white"
          ),
          className
        )}
      >
        <p className="text-sm font-semibold uppercase">{subtitle}</p>

        <div className="absolute bottom-0 w-full max-w-85">
          <p className="text-sm">{description}</p>

          <div className="rounded-xl">
            <Image
              src={image || ""}
              alt={title || "card image"}
              width={450}
              height={450}
              className="aspect-video h-full w-full rounded-2xl object-contain object-center"
            />
          </div>
        </div>
      </CardContent>
    );
  }

  /* ---------- Text Variant ---------- */
  if (variant === "text") {
    return (
      <div
        className={cn(
          clsx(
            "mx-auto w-full max-w-5xl space-y-50 rounded-2xl bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 p-4 text-black"
          ),
          className
        )}
      >
        <CardContent>
          <p className="text-sm font-medium uppercase">{subtitle}</p>
          <CardTitle className="text-2xl font-semibold md:text-3xl lg:text-5xl">
            {description}
          </CardTitle>
        </CardContent>
        <p className="flex flex-col px-4">
          <span className="text-lg font-semibold">{title}</span>
          <span className="text-base font-light">{statLabel}</span>
        </p>
      </div>
    );
  }

  return null;
}
