"use client";

import type { CSSProperties, ReactNode } from "react";

import Image from "next/image";

import clsx from "clsx";
import { motion } from "motion/react";

export interface OrbitTag {
  name: string;
  icon?: ReactNode;
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
  aspect = "half",
}: OrbitalFlowProps) {
  const CONTAINER_SIZE = Math.max(outerOrbitDiameter, innerOrbitDiameter);
  const aspectClass =
    aspect === "half"
      ? "aspect-[2/1]"
      : aspect === "video"
        ? "aspect-video"
        : ""; // full → no aspect (auto)

  return (
    <div
      className={clsx(
        "flex h-full w-full max-w-4xl items-start justify-center overflow-hidden rounded-xl border p-10 md:rounded-2xl",
        aspectClass,
        className
      )}
    >
      <div
        className="relative"
        style={{
          width: CONTAINER_SIZE,
          height: CONTAINER_SIZE,
        }}
      >
        {/* CENTER IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={centerImageSrc}
            alt="Center Image"
            width={200}
            height={200}
            priority
            className="size-40 rounded-full object-cover object-top shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.7)] brightness-125 md:size-60 dark:shadow-white/50"
          />
        </div>

        {/* OUTER ORBIT */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-zinc-400/50"
          style={{
            width: outerOrbitDiameter,
            height: outerOrbitDiameter,
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: outerRotationSpeed,
              ease: "linear",
            }}
          >
            {outerTags.map((tag, i) => {
              const angle = (i / outerTags.length) * Math.PI * 2;
              const radius = outerOrbitDiameter / 2;

              const x = radius + Math.cos(angle) * radius - 60;
              const y = radius + Math.sin(angle) * radius - 20;

              return (
                <motion.div
                  key={tag.name}
                  className={clsx(
                    "absolute flex items-center gap-1 rounded-full",
                    "bg-zinc-900 px-4 py-2 text-xs font-light text-zinc-100",
                    "shadow-lg dark:bg-zinc-100 dark:text-zinc-900"
                  )}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: outerRotationSpeed,
                    ease: "linear",
                  }}
                >
                  {tag.icon}
                  <span className="whitespace-nowrap">{tag.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* INNER ORBIT */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-zinc-400/50"
          style={{
            width: innerOrbitDiameter,
            height: innerOrbitDiameter,
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: innerRotationSpeed,
              ease: "linear",
            }}
          >
            {innerTags.map((tag, i) => {
              const angle = (i / innerTags.length) * Math.PI * 2;
              const radius = innerOrbitDiameter / 2;

              const x = radius + Math.cos(angle) * radius - 60;
              const y = radius + Math.sin(angle) * radius - 20;

              return (
                <motion.div
                  key={tag.name}
                  className={clsx(
                    "absolute flex items-center gap-1 rounded-full",
                    "bg-zinc-900 px-4 py-2 text-xs font-light text-zinc-100",
                    "shadow-lg dark:bg-zinc-100 dark:text-zinc-900"
                  )}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: innerRotationSpeed,
                    ease: "linear",
                  }}
                >
                  {tag.icon}
                  <span className="whitespace-nowrap">{tag.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
