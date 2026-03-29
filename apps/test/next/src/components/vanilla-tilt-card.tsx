"use client";

import React, { useEffect, useRef } from "react";

import Image from "next/image";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import VanillaTilt from "vanilla-tilt";

interface HTMLDivElementWithVanillaTilt extends HTMLDivElement {
  vanillaTilt?: { destroy: () => void };
}

const SPRING = { stiffness: 60, damping: 20, mass: 1 };

export interface VanillaTiltCardProps {
  src?: string;
  label?: string;
}

export function VanillaTiltCard({
  src = "https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58",
  label = "Vanilla Tilt Card",
}: VanillaTiltCardProps) {
  const tiltRef = useRef<HTMLDivElementWithVanillaTilt | null>(null);
  const isHovered = useRef(false);

  // Raw mouse position (-50 → 50)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Springified — all layers consume these
  const x = useSpring(rawX, SPRING);
  const y = useSpring(rawY, SPRING);

  // Parallax layers (depth 1 = shallow, depth 2 = deep)
  const tx1 = useTransform(x, [-50, 50], [-10, 10]);
  const ty1 = useTransform(y, [-50, 50], [-10, 10]);
  const tx2 = useTransform(x, [-50, 50], [-18, 18]);
  const ty2 = useTransform(y, [-50, 50], [-18, 18]);

  // Scale spring for smooth zoom
  const scaleRaw = useMotionValue(1.15);
  const scale = useSpring(scaleRaw, { stiffness: 50, damping: 18, mass: 1 });

  useEffect(() => {
    const el = tiltRef.current;
    if (el) {
      VanillaTilt.init(el, {
        max: 8,
        speed: 800, // high = slow easing, prevents snap
        glare: true,
        "max-glare": 0.15,
        scale: 1, // let motion handle scale
      });
    }
    return () => el?.vanillaTilt?.destroy();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawX.set(Math.max(-50, Math.min(50, e.clientX - cx)));
    rawY.set(Math.max(-50, Math.min(50, e.clientY - cy)));
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    scaleRaw.set(1.25);
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    rawX.set(0);
    rawY.set(0);
    scaleRaw.set(1.15);
  };

  return (
    <div
      ref={tiltRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-11/16 w-64 overflow-hidden rounded-2xl bg-zinc-900 text-white shadow-xl"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Background Image — shallow parallax + zoom */}
      <motion.div
        className="absolute inset-0"
        style={{ x: tx1, y: ty1, scale }}
      >
        <Image src={src} alt={label} fill className="object-cover" priority />
      </motion.div>

      {/* Gradient overlay — same depth as image */}
      <motion.div
        className="absolute inset-0 scale-120 bg-linear-to-t from-black/50 via-black/5 to-transparent"
        style={{ x: tx1, y: ty1 }}
      />

      {/* Label — deeper parallax for 3-D pop */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <motion.h2 className="text-lg font-semibold" style={{ x: tx2, y: ty2 }}>
          {label}
        </motion.h2>

        <motion.div
          className="mt-2 h-px w-10 rounded-full bg-white/60"
          style={{ x: tx1, y: ty1 }}
        />
      </div>

      {/* Gloss shine */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 hover:opacity-100"
        style={{ x: tx1, y: ty1 }}
      />

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10" />
    </div>
  );
}
