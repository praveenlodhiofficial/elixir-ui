"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import clsx from "clsx";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";

import { cn } from "../lib/utils";

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
];

export interface GalleryShowcaseProps {
  images?: string[];
}

export function GalleryShowcase({
  images = DEFAULT_IMAGES,
}: GalleryShowcaseProps) {
  const nonEmptyImages = images.filter(
    (image) => typeof image === "string" && image.trim().length > 0
  );

  const [activeImage, setActiveImage] = useState(nonEmptyImages[0]);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["20% end", "70% end"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-0, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const leftSkew = useTransform(scrollYProgress, [0, 1], [-6, 0]);
  const rightSkew = useTransform(scrollYProgress, [0, 1], [6, 0]);

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  if (nonEmptyImages.length === 0) return null;

  return (
    <motion.div
      ref={ref}
      className={cn(
        clsx(
          "grid",
          "h-[22vh]",
          "grid-cols-[4fr_0.8fr]",
          "gap-1",
          "md:h-[32vh]",
          "md:gap-3",
          "lg:h-[calc(100vh-5rem)]"
        )
      )}
    >
      {/* LEFT */}
      <motion.div
        style={{ x: leftX, scale, skew: rightSkew }}
        className={cn(
          clsx(
            "relative",
            "overflow-hidden",
            "rounded-md",
            "md:rounded-2xl",
            "lg:rounded-3xl"
          )
        )}
      >
        <AnimatePresence mode="popLayout">
          {activeImage && (
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={cn("absolute inset-0")}
            >
              <Image
                src={activeImage}
                alt={activeImage}
                height={1000}
                width={1000}
                className={cn(
                  clsx("aspect-video", "h-full", "w-full", "object-cover")
                )}
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className={cn("absolute h-full w-full bg-black opacity-5")} />
      </motion.div>

      {/* RIGHT */}
      <motion.div
        style={{ x: rightX, scale, skew: leftSkew }}
        className={cn(
          clsx(
            "no-scrollbar",
            "flex",
            "flex-col",
            "gap-1",
            "overflow-y-auto",
            "md:gap-3"
          )
        )}
      >
        {nonEmptyImages.map((image: string) => (
          <div
            key={image}
            onMouseEnter={() => setActiveImage(image)}
            className={cn("cursor-pointer")}
          >
            <div
              className={cn(
                clsx(
                  "group",
                  "relative",
                  "aspect-square",
                  "overflow-hidden",
                  "rounded-md",
                  "md:aspect-video",
                  "md:rounded-xl",
                  "lg:rounded-2xl"
                )
              )}
            >
              <Image
                src={image}
                alt={image}
                width={500}
                height={500}
                priority
                className={cn(
                  clsx(
                    "h-full",
                    "scale-110",
                    "object-cover",
                    "transition-all",
                    "duration-300",
                    "ease-out",
                    "group-hover:scale-100"
                  )
                )}
              />
              <div
                className={cn(
                  "absolute top-0 h-full w-full bg-black opacity-5"
                )}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
