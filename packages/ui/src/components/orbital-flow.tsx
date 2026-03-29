"use client";

import { useState, type ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react";

export interface OrbitTag {
  name: string;
  icon?: ReactNode;
  href?: string;
}

export interface OrbitalFlowProps {
  outerTags?: OrbitTag[];
  innerTags?: OrbitTag[];
  centerImageSrc?: string;
  outerOrbitDiameter?: number;
  innerOrbitDiameter?: number;
  outerRotationSpeed?: number;
  innerRotationSpeed?: number;
  className?: string;
  aspect?: "half" | "video" | "full";
}

/* ================= DEFAULT DATA ================= */

const defaultInnerTags: OrbitTag[] = [
  { name: "Okarun" },
  { name: 'Jin "Jiji" Enjoji' },
  { name: "Momo Ayase" },
  { name: "Evil Eye" },
];

const defaultOuterTags: OrbitTag[] = [
  { name: "Turbo Granny" },
  { name: "Aira Shiratori" },
  { name: "Seiko Ayase" },
  { name: "Acrobatic Silky" },
  { name: "Serpoian" },
];

export function OrbitalFlow({
  outerTags = defaultOuterTags,
  innerTags = defaultInnerTags,
  // centerImageSrc = "/dandadan.jpg",
  centerImageSrc = "https://images.unsplash.com/photo-1762378821352-d15ee88ed061",
  outerOrbitDiameter = 700,
  innerOrbitDiameter = 450,
  outerRotationSpeed = 32,
  innerRotationSpeed = 30,
  className,
  aspect = "video",
}: OrbitalFlowProps) {
  const [isPaused, setIsPaused] = useState(false);
  const outerRotation = useMotionValue(0);
  const innerRotation = useMotionValue(0);
  const outerCounterRotation = useTransform(outerRotation, (value) => -value);
  const innerCounterRotation = useTransform(innerRotation, (value) => -value);

  useAnimationFrame((_, delta) => {
    if (isPaused) return;

    const outerStep = (delta / 1000) * (360 / outerRotationSpeed);
    const innerStep = (delta / 1000) * (360 / innerRotationSpeed);

    outerRotation.set((outerRotation.get() + outerStep) % 360);
    innerRotation.set((innerRotation.get() - innerStep) % 360);
  });

  const CONTAINER_SIZE = Math.max(outerOrbitDiameter, innerOrbitDiameter);
  const aspectClass =
    aspect === "half"
      ? "aspect-[2/1]"
      : aspect === "video"
        ? "aspect-video"
        : ""; // full → no aspect (auto)
  const orbitTagClass = clsx(
    "absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border",
    "border-zinc-200/80 bg-white/85 px-4 py-2 text-xs font-light text-zinc-800",
    "shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md",
    "dark:border-white/10 dark:bg-zinc-900/85 dark:text-zinc-100"
  );
  const orbitLinkClass =
    "flex items-center gap-1 whitespace-nowrap rounded-full outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-zinc-900";

  return (
    <div
      className={clsx(
        "relative flex h-full w-full items-start justify-center overflow-hidden rounded-xl border border-zinc-200/75 bg-[radial-gradient(circle_at_20%_10%,rgba(2,132,199,0.2),transparent_36%),radial-gradient(circle_at_86%_18%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(125,211,252,0.2),transparent_40%)] p-10 md:rounded-2xl dark:border-white/10 dark:bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_36%),radial-gradient(circle_at_86%_18%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.1),transparent_40%)]",
        aspectClass,
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.06),transparent_42%,rgba(15,23,42,0.03))] dark:bg-[linear-gradient(110deg,rgba(255,255,255,0.04),transparent_42%,rgba(255,255,255,0.02))]" />

      <div
        className="relative"
        style={{
          width: CONTAINER_SIZE,
          height: CONTAINER_SIZE,
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.12),transparent_56%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_56%)]" />

        {/* CENTER IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative rounded-full p-2 ring-1 ring-zinc-300/70 dark:ring-white/25">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.2),transparent_62%)] blur-md dark:bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_62%)]" />
            <Image
              src={centerImageSrc}
              alt="Center Image"
              width={200}
              height={200}
              priority
              className="relative size-40 rounded-full object-cover object-top shadow-[0px_0px_35px_-8px_rgba(0,0,0,0.45)] brightness-105 md:size-60 dark:shadow-white/35"
            />
          </div>
        </div>

        {/* OUTER ORBIT */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-zinc-300/80 shadow-[inset_0_0_30px_rgba(15,23,42,0.08)] dark:border-zinc-700/55 dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.04)]"
          style={{
            width: outerOrbitDiameter,
            height: outerOrbitDiameter,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ rotate: outerRotation }}
          >
            {outerTags.map((tag, i) => {
              const angle = (i / outerTags.length) * Math.PI * 2;
              const radius = outerOrbitDiameter / 2;

              const x = radius + Math.cos(angle) * radius;
              const y = radius + Math.sin(angle) * radius;

              return (
                <motion.div
                  key={tag.name}
                  className={`invert cursor-pointer ${orbitTagClass}`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    rotate: outerCounterRotation,
                  }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  onHoverStart={() => setIsPaused(true)}
                  onHoverEnd={() => setIsPaused(false)}
                  transition={{
                    scale: { type: "spring", stiffness: 320, damping: 22 },
                    y: { type: "spring", stiffness: 320, damping: 22 },
                  }}
                >
                  <Link
                    href={tag.href ?? "#"}
                    className={orbitLinkClass}
                  >
                    {tag.icon}
                    <span className="whitespace-nowrap">{tag.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* INNER ORBIT */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-zinc-300/80 shadow-[inset_0_0_24px_rgba(15,23,42,0.08)] dark:border-zinc-700/55 dark:shadow-[inset_0_0_24px_rgba(255,255,255,0.04)]"
          style={{
            width: innerOrbitDiameter,
            height: innerOrbitDiameter,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ rotate: innerRotation }}
          >
            {innerTags.map((tag, i) => {
              const angle = (i / innerTags.length) * Math.PI * 2;
              const radius = innerOrbitDiameter / 2;

              const x = radius + Math.cos(angle) * radius;
              const y = radius + Math.sin(angle) * radius;

              return (
                <motion.div
                  key={tag.name}
                  className={`invert cursor-pointer ${orbitTagClass}`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    rotate: innerCounterRotation,
                  }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  onHoverStart={() => setIsPaused(true)}
                  onHoverEnd={() => setIsPaused(false)}
                  transition={{
                    scale: { type: "spring", stiffness: 320, damping: 22 },
                    y: { type: "spring", stiffness: 320, damping: 22 },
                  }}
                >
                  <Link
                    href={tag.href ?? "#"}
                    className={` ${orbitLinkClass}`}
                  >
                    {tag.icon}
                    <span className="whitespace-nowrap">{tag.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
