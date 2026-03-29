"use client";

import Image from "next/image";

import clsx from "clsx";

import { cn } from "../lib/utils";
import { CardContent, CardDescription, CardTitle } from "./card";

/* -------------------- Types -------------------- */
type Variant = "background" | "media" | "text";

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
  variant,
  title,
  subtitle,
  description,
  statLabel,
  statValue,
  bgImage = "https://images.unsplash.com/photo-1670884307458-4977f638a933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  image = "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  className = "",
}: FeatureCardProps) {
  /* ---------- Background Variant ---------- */
  if (variant === "background") {
    return (
      <CardContent
        className={cn(
          clsx(
            "mx-auto flex h-full w-full max-w-5xl flex-col gap-22 rounded-2xl px-5 text-white"
          ),
          className
        )}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <p className="text-sm font-semibold uppercase">{subtitle}</p>
        <CardTitle className="max-w-2xl text-2xl font-semibold md:text-3xl lg:text-5xl">
          {description}
        </CardTitle>
        <p className="flex flex-col">
          <span className="text-lg font-semibold">{title}</span>
          <CardDescription className="text-base font-light">
            {statLabel}
          </CardDescription>
        </p>
      </CardContent>
    );
  }

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
