import clsx from "clsx";

import { cn } from "../lib/utils";
import { Card, CardContent } from "./card";

export type StatCardVariant =
  | "dark"
  | "colorful"
  | "glass"
  | "neon"
  | "earth"
  | "editorial"
  | "aurora"
  | "minimal";

export interface StatCardProps {
  variant?: StatCardVariant;
  className?: string;
  label?: string;
  value?: string;
  caption?: string;
  badge?: string;
  badgeTone?: "positive" | "negative" | "neutral";
}

const rootStyles: Record<StatCardVariant, string> = {
  // light: clean slate card  |  dark: deep zinc gradient
  dark: [
    "bg-card border border-border text-card-foreground shadow-sm",
    "dark:bg-gradient-to-br dark:from-zinc-950 dark:via-zinc-900 dark:to-black dark:border-white/10 dark:shadow-none",
  ].join(" "),

  // light: soft purple tint  |  dark: saturated indigo
  colorful: [
    "border border-border text-foreground",
    "bg-gradient-to-br from-purple-100/60 via-indigo-100/60 to-blue-100/60",
    "dark:from-purple-900/40 dark:via-indigo-900/40 dark:to-blue-900/40 dark:border-white/10",
  ].join(" "),

  // light: soft frosted  |  dark: classic glass
  glass: [
    "border border-border text-foreground",
    "bg-background/70 backdrop-blur-xl",
    "dark:bg-white/5 dark:border-white/10",
  ].join(" "),

  // light: muted green tint  |  dark: near-black terminal
  neon: [
    "border text-foreground",
    "bg-green-50 border-green-300/40",
    "dark:bg-[#080f08] dark:border-green-500/30",
  ].join(" "),

  // light: warm amber cream  |  dark: deep burnt amber
  earth: [
    "border",
    "bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100/60 border-amber-200 text-amber-950",
    "dark:from-amber-950 dark:via-stone-900 dark:to-amber-900/60 dark:border-amber-700/30 dark:text-amber-50",
  ].join(" "),

  // light: stark white ink  |  dark: zinc-900 surface
  editorial: [
    "border",
    "bg-white border-zinc-200 text-zinc-900",
    "dark:bg-zinc-900 dark:border-zinc-700/60 dark:text-zinc-100",
  ].join(" "),

  // light: lavender mist  |  dark: deep space blue-violet
  aurora: [
    "border border-border text-foreground",
    "bg-gradient-to-br from-violet-50/80 via-sky-50/60 to-purple-50/80",
    "dark:from-[#0d0d1a] dark:via-[#0a1628] dark:to-[#0d0d1a] dark:border-white/10",
  ].join(" "),

  // Uses shadcn tokens directly — works perfectly in both modes out of the box
  minimal: "bg-card border border-border text-card-foreground shadow-sm",
};

// ---------------------------------------------------------------------------
// Label styles
// ---------------------------------------------------------------------------

const labelStyles: Record<StatCardVariant, string> = {
  dark: "text-muted-foreground dark:text-zinc-400",
  colorful: "text-indigo-500/80 dark:text-indigo-300/70",
  glass: "text-muted-foreground dark:text-white/50",
  neon: "text-green-700/70 dark:text-green-400/60",
  earth: "text-amber-700/80 dark:text-amber-300/70",
  editorial: "text-zinc-400 dark:text-zinc-500",
  aurora: "text-violet-500/70 dark:text-cyan-300/60",
  minimal: "text-muted-foreground",
};

// ---------------------------------------------------------------------------
// Value styles
// ---------------------------------------------------------------------------

const valueStyles: Record<StatCardVariant, string> = {
  dark: "text-foreground",
  colorful: "text-foreground",
  glass: "text-foreground",
  neon: "text-green-700 dark:text-green-400 dark:drop-shadow-[0_0_12px_rgba(74,222,128,0.6)]",
  earth: "text-amber-900 dark:text-amber-100",
  editorial: "text-zinc-900 dark:text-zinc-100",
  // Warm in light, cool aurora in dark
  aurora:
    "bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 dark:from-cyan-300 dark:via-violet-300 dark:to-pink-300 bg-clip-text text-transparent",
  minimal: "text-foreground",
};

// ---------------------------------------------------------------------------
// Caption styles
// ---------------------------------------------------------------------------

const captionStyles: Record<StatCardVariant, string> = {
  dark: "text-muted-foreground",
  colorful: "text-indigo-500/60 dark:text-indigo-300/50",
  glass: "text-muted-foreground dark:text-white/40",
  neon: "text-green-700/50 dark:text-green-500/50",
  earth: "text-amber-700/60 dark:text-amber-400/60",
  editorial: "text-zinc-400 dark:text-zinc-500",
  aurora: "text-violet-500/60 dark:text-slate-400",
  minimal: "text-muted-foreground",
};

// ---------------------------------------------------------------------------
// Badge tone styles — light and dark values per variant
// ---------------------------------------------------------------------------

const badgeToneStyles: Record<
  "positive" | "negative" | "neutral",
  Record<StatCardVariant, string>
> = {
  positive: {
    dark: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-400 dark:ring-emerald-500/30",
    colorful:
      "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:ring-emerald-400/30",
    glass:
      "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:ring-emerald-400/30",
    neon: "bg-green-100 text-green-800 ring-1 ring-green-300 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/40",
    earth:
      "bg-amber-100 text-amber-800 ring-1 ring-amber-300 dark:bg-amber-400/20 dark:text-amber-200 dark:ring-amber-300/30",
    editorial:
      "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:ring-emerald-500/30",
    aurora:
      "bg-cyan-100 text-cyan-800 ring-1 ring-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-300 dark:ring-cyan-400/30",
    minimal:
      "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20",
  },
  negative: {
    dark: "bg-red-100 text-red-700 ring-1 ring-red-300 dark:bg-red-500/15 dark:text-red-400 dark:ring-red-500/30",
    colorful:
      "bg-red-100 text-red-700 ring-1 ring-red-300 dark:bg-red-500/20 dark:text-red-300 dark:ring-red-400/30",
    glass:
      "bg-red-100 text-red-700 ring-1 ring-red-300 dark:bg-red-500/20 dark:text-red-300 dark:ring-red-400/30",
    neon: "bg-red-100 text-red-800 ring-1 ring-red-300 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/40",
    earth:
      "bg-red-100 text-red-800 ring-1 ring-red-300 dark:bg-red-800/30 dark:text-red-300 dark:ring-red-600/30",
    editorial:
      "bg-red-50 text-red-700 ring-1 ring-red-200 dark:bg-red-500/15 dark:text-red-400 dark:ring-red-500/30",
    aurora:
      "bg-pink-100 text-pink-800 ring-1 ring-pink-300 dark:bg-pink-500/10 dark:text-pink-300 dark:ring-pink-400/30",
    minimal:
      "bg-red-50 text-red-700 ring-1 ring-red-200 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/20",
  },
  neutral: {
    dark: "bg-secondary text-secondary-foreground ring-1 ring-border dark:bg-white/10 dark:text-zinc-300 dark:ring-white/20",
    colorful:
      "bg-secondary text-secondary-foreground ring-1 ring-border dark:bg-white/10 dark:text-white/70 dark:ring-white/20",
    glass:
      "bg-secondary text-secondary-foreground ring-1 ring-border dark:bg-white/10 dark:text-white/70 dark:ring-white/20",
    neon: "bg-secondary text-secondary-foreground ring-1 ring-border dark:bg-white/5 dark:text-green-300/60 dark:ring-white/10",
    earth:
      "bg-amber-100 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-300/60 dark:ring-amber-400/20",
    editorial:
      "bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700",
    aurora:
      "bg-secondary text-secondary-foreground ring-1 ring-border dark:bg-white/5 dark:text-slate-400 dark:ring-white/10",
    minimal: "bg-secondary text-secondary-foreground ring-1 ring-border",
  },
};

// ---------------------------------------------------------------------------
// Glow overlays — toned down in light mode, vibrant in dark
// ---------------------------------------------------------------------------

function GlowLayer({ variant }: { variant: StatCardVariant }) {
  if (variant === "colorful") {
    return (
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-500/20" />
        <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/20" />
      </div>
    );
  }
  if (variant === "glass") {
    return (
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-violet-300/15 blur-3xl dark:bg-violet-500/15" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-sky-300/15 blur-3xl dark:bg-sky-500/15" />
      </div>
    );
  }
  if (variant === "neon") {
    return (
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-32 w-full rounded-full bg-green-400/10 blur-2xl dark:bg-green-500/5" />
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(74,222,128,0.4) 2px, rgba(74,222,128,0.4) 3px)",
          }}
        />
      </div>
    );
  }
  if (variant === "aurora") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-500/15" />
        <div className="absolute top-1/2 right-0 h-40 w-40 rounded-full bg-violet-300/15 blur-3xl dark:bg-violet-500/20" />
        <div className="absolute bottom-0 left-1/4 h-32 w-48 rounded-full bg-pink-300/10 blur-3xl dark:bg-pink-500/10" />
      </div>
    );
  }
  if (variant === "earth") {
    return (
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-amber-300/15 blur-3xl dark:bg-amber-500/10" />
      </div>
    );
  }
  return null;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function StatCard({
  variant = "dark",
  className,
  label,
  value,
  caption,
  badge,
  badgeTone = "neutral",
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "relative flex aspect-3/4 h-full w-80 overflow-hidden transition-shadow duration-300 hover:shadow-2xl",
        rootStyles[variant],
        className
      )}
    >
      <GlowLayer variant={variant} />

      <CardContent className="relative z-10 flex h-full flex-col justify-between p-5">
        {/* Top row: label + optional badge */}
        <div className="flex items-start justify-between gap-2">
          <p
            className={clsx(
              "text-xs font-semibold tracking-widest uppercase",
              labelStyles[variant]
            )}
          >
            {label}
          </p>

          {badge && (
            <span
              className={clsx(
                "rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums",
                badgeToneStyles[badgeTone][variant]
              )}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Bottom block: value + caption */}
        <div className="space-y-2">
          <p
            className={clsx(
              "leading-none font-bold tracking-tight",
              "text-4xl md:text-5xl lg:text-6xl",
              valueStyles[variant]
            )}
          >
            {value}
          </p>

          {caption && (
            <p
              className={clsx(
                "text-xs font-medium tracking-widest uppercase",
                captionStyles[variant]
              )}
            >
              {caption}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
