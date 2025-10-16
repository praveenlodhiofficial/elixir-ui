"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { CSSProperties } from "react";

export interface OrbitTag {
   name: string;
   icon?: React.ReactNode;
}

interface OrbitalFlowProps {
   outerTags: OrbitTag[];
   innerTags: OrbitTag[];
   centerImageSrc: string;
   outerOrbitDiameter?: number;
   innerOrbitDiameter?: number;
   outerRotationSpeed?: number; // seconds
   innerRotationSpeed?: number; // seconds
}

export function OrbitalFlow({
   outerTags,
   innerTags,
   centerImageSrc,
   outerOrbitDiameter = 850,
   innerOrbitDiameter = 550,
   outerRotationSpeed = 32,
   innerRotationSpeed = 30,
}: OrbitalFlowProps) {
   const CONTAINER_SIZE = Math.max(outerOrbitDiameter, innerOrbitDiameter);

   return (
      <div className="flex h-[67vh] items-start justify-center overflow-hidden rounded-lg pt-10">
         <div
            className="relative"
            style={{
               width: CONTAINER_SIZE,
               height: CONTAINER_SIZE,
            }}
         >
            {/* ========== CENTER IMAGE ========== */}
            <div className="relative h-full w-full items-center justify-center md:flex">
               <Image
                  src={centerImageSrc}
                  alt="Center Image"
                  width={1000}
                  height={1000}
                  priority
                  className="absolute top-[21rem] right-[-9rem] size-60 rounded-full object-cover object-top shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.7)] shadow-black/50 brightness-125 md:static md:size-72 dark:shadow-white/50"
               />
            </div>

            {/* ========== OUTER ORBIT ========== */}
            <div
               className="absolute top-0 left-0 rounded-full border border-dashed border-zinc-400/50"
               style={
                  {
                     width: outerOrbitDiameter,
                     height: outerOrbitDiameter,
                  } as CSSProperties
               }
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
                           className="absolute flex scale-105 items-center gap-1 rounded-full bg-zinc-900 px-4 py-2 text-xs font-light text-zinc-100 shadow-[10px_30px_20px_-5px_rgba(0,0,0,0.5)] shadow-black/50 dark:bg-zinc-100 dark:text-zinc-900 dark:shadow-white/50"
                           style={{
                              left: `${x}px`,
                              top: `${y}px`,
                              transform: `translate(-50%, -50%)`,
                           }}
                           animate={{ rotate: -360 }}
                           transition={{
                              repeat: Infinity,
                              duration: outerRotationSpeed,
                              ease: "linear",
                           }}
                        >
                           {tag.icon}
                           <span className="w-full whitespace-nowrap">{tag.name}</span>
                        </motion.div>
                     );
                  })}
               </motion.div>
            </div>

            {/* ========== INNER ORBIT ========== */}
            <div
               className="absolute rounded-full border border-dashed border-zinc-400/50"
               style={
                  {
                     width: innerOrbitDiameter,
                     height: innerOrbitDiameter,
                     top: (CONTAINER_SIZE - innerOrbitDiameter) / 2,
                     left: (CONTAINER_SIZE - innerOrbitDiameter) / 2,
                  } as CSSProperties
               }
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
                           className="absolute flex items-center gap-1 rounded-full bg-zinc-900 px-4 py-2 text-xs font-light text-zinc-100 shadow-[10px_25px_20px_-5px_rgba(0,0,0,0.5)] shadow-black/50 dark:bg-zinc-100 dark:text-zinc-900 dark:shadow-white/50"
                           style={{
                              left: `${x}px`,
                              top: `${y}px`,
                              transform: `translate(-50%, -50%)`,
                           }}
                           animate={{ rotate: 360 }}
                           transition={{
                              repeat: Infinity,
                              duration: innerRotationSpeed,
                              ease: "linear",
                           }}
                        >
                           {tag.icon}
                           <span className="w-full whitespace-nowrap">{tag.name}</span>
                        </motion.div>
                     );
                  })}
               </motion.div>
            </div>
         </div>
      </div>
   );
}
