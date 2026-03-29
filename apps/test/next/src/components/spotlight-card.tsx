"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "./card";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * Layout controls how content is positioned inside the card.
 *
 * default     → label top-left, headline top-left, attribution bottom-left (original)
 * centered    → everything center-aligned, great for feature highlights
 * split       → label + headline left, attribution anchored right
 * bottom-heavy → label top, headline + attribution stacked at the bottom
 */
export type SpotlightLayout = "default" | "centered" | "split" | "bottom-heavy";

/**
 * Overlay controls the gradient scrim over the background image.
 *
 * dark    → classic dark vignette (safe for any image)
 * warm    → amber/orange gradient — cinematic, editorial
 * cool    → blue-indigo gradient — tech, product
 * none    → no overlay — use only with images that have built-in contrast
 */
export type SpotlightOverlay = "dark" | "warm" | "cool" | "none";

/**
 * Size controls the card's aspect ratio.
 *
 * wide        → 16:9 — full-width banner, hero
 * square      → 1:1 — grid card, social
 * portrait     → 3:4 — story-style, tall grid
 * cinematic   → 21:9 — ultra-wide hero
 */
export type SpotlightSize = "wide" | "square" | "portrait" | "cinematic";

export interface SpotlightCardProps {
  // ── Content ──────────────────────────────────────────────────────────────
  /** Small eyebrow label at the top (e.g. "Customer Stories", "Feature") */
  eyebrow?: string;
  /** Main headline — the dominant text on the card */
  headline: string;
  /** Name or primary attribution line (e.g. person name, product name) */
  attribution?: string;
  /** Secondary attribution line (e.g. "Founder of Chipsland", "10× faster") */
  attributionSub?: string;

  // ── Media ────────────────────────────────────────────────────────────────
  /** Background image URL */
  image?: string;
  /** Fallback background color when no image is provided */
  fallbackColor?: string;

  // ── Appearance ───────────────────────────────────────────────────────────
  /** Layout preset */
  layout?: SpotlightLayout;
  /** Gradient overlay over the background */
  overlay?: SpotlightOverlay;
  /** Card aspect ratio / size */
  size?: SpotlightSize;
  /** Extra classes merged onto the root card */
  className?: string;

  // ── Interaction ──────────────────────────────────────────────────────────
  /** Whether to show a subtle hover scale + glow effect */
  interactive?: boolean;
  /** onClick handler */
  onClick?: () => void;
}

// ---------------------------------------------------------------------------
// Style maps
// ---------------------------------------------------------------------------

const sizeStyles: Record<SpotlightSize, string> = {
  wide: "aspect-video w-full",
  square: "aspect-square w-full",
  portrait: "aspect-[3/4] w-full",
  cinematic: "aspect-[21/9] w-full",
};

const overlayStyles: Record<SpotlightOverlay, string> = {
  dark: "bg-gradient-to-br from-black/70 via-black/40 to-black/20",
  warm: "bg-gradient-to-br from-black/80 via-amber-950/50 to-orange-900/20",
  cool: "bg-gradient-to-br from-black/80 via-indigo-950/50 to-blue-900/20",
  none: "",
};

// ---------------------------------------------------------------------------
// Layout renderers
// ---------------------------------------------------------------------------

interface ContentProps {
  eyebrow?: string;
  headline: string;
  attribution?: string;
  attributionSub?: string;
}

function DefaultLayout({
  eyebrow,
  headline,
  attribution,
  attributionSub,
}: ContentProps) {
  return (
    <div className="flex h-full flex-col justify-between p-5 md:p-7">
      <div className="space-y-3">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs font-semibold tracking-[0.15em] text-white/50 uppercase"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-2xl leading-tight font-bold text-white md:text-3xl lg:text-5xl"
        >
          {headline}
        </motion.h2>
      </div>

      {(attribution || attributionSub) && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          {attribution && (
            <p className="text-base font-semibold text-white">{attribution}</p>
          )}
          {attributionSub && (
            <p className="text-xs font-medium tracking-widest text-white/50 uppercase">
              {attributionSub}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}

function CenteredLayout({
  eyebrow,
  headline,
  attribution,
  attributionSub,
}: ContentProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 p-6 text-center md:p-10">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xs font-semibold tracking-[0.15em] text-white/50 uppercase"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-xl text-2xl leading-tight font-bold text-white md:text-4xl lg:text-5xl"
      >
        {headline}
      </motion.h2>
      {(attribution || attributionSub) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col items-center gap-1"
        >
          {attribution && (
            <p className="text-base font-semibold text-white">{attribution}</p>
          )}
          {attributionSub && (
            <p className="text-xs font-medium tracking-widest text-white/50 uppercase">
              {attributionSub}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}

function SplitLayout({
  eyebrow,
  headline,
  attribution,
  attributionSub,
}: ContentProps) {
  return (
    <div className="flex h-full flex-col justify-between p-5 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs font-semibold tracking-[0.15em] text-white/50 uppercase"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h2
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-lg text-2xl leading-tight font-bold text-white md:text-3xl lg:text-4xl"
          >
            {headline}
          </motion.h2>
        </div>

        {(attribution || attributionSub) && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="shrink-0 text-right"
          >
            {attribution && (
              <p className="text-base font-semibold text-white">
                {attribution}
              </p>
            )}
            {attributionSub && (
              <p className="text-xs font-medium tracking-widest text-white/50 uppercase">
                {attributionSub}
              </p>
            )}
          </motion.div>
        )}
      </div>

      {/* Decorative rule */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="h-px w-full bg-white/10"
      />
    </div>
  );
}

function BottomHeavyLayout({
  eyebrow,
  headline,
  attribution,
  attributionSub,
}: ContentProps) {
  return (
    <div className="flex h-full flex-col justify-between p-5 md:p-7">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xs font-semibold tracking-[0.15em] text-white/50 uppercase"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="space-y-3"
      >
        <h2 className="max-w-2xl text-2xl leading-tight font-bold text-white md:text-3xl lg:text-5xl">
          {headline}
        </h2>
        {(attribution || attributionSub) && (
          <div className="flex items-center gap-3">
            {/* Accent bar */}
            <div className="h-8 w-0.5 rounded-full bg-white/30" />
            <div>
              {attribution && (
                <p className="text-sm font-semibold text-white">
                  {attribution}
                </p>
              )}
              {attributionSub && (
                <p className="text-xs font-medium tracking-widest text-white/50 uppercase">
                  {attributionSub}
                </p>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function SpotlightCard({
  eyebrow,
  headline,
  attribution,
  attributionSub,
  image,
  fallbackColor = "#0a0a0a",
  layout = "default",
  overlay = "dark",
  size = "wide",
  className,
  interactive = true,
  onClick,
}: SpotlightCardProps) {
  const contentProps: ContentProps = {
    eyebrow,
    headline,
    attribution,
    attributionSub,
  };

  const layouts = {
    default: <DefaultLayout {...contentProps} />,
    centered: <CenteredLayout {...contentProps} />,
    split: <SplitLayout {...contentProps} />,
    "bottom-heavy": <BottomHeavyLayout {...contentProps} />,
  };

  return (
    <motion.div
      whileHover={
        interactive
          ? { scale: 1.015, transition: { duration: 0.25, ease: "easeOut" } }
          : undefined
      }
      className={cn("group cursor-pointer", sizeStyles[size], className)}
      onClick={onClick}
    >
      <Card
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundColor: image ? undefined : fallbackColor,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={cn(
          "relative h-full w-full overflow-hidden rounded-xl border-0 lg:rounded-2xl",
          "transition-shadow duration-300",
          interactive && "group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        )}
      >
        {/* Overlay gradient */}
        {overlay !== "none" && (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-10",
              overlayStyles[overlay]
            )}
          />
        )}

        {/* Subtle inner vignette at edges */}
        <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_80px_rgba(0,0,0,0.3)]" />

        {/* Hover shimmer */}
        {interactive && (
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}

        <CardContent className="relative z-20 h-full p-0">
          {layouts[layout]}
        </CardContent>
      </Card>
    </motion.div>
  );
}
