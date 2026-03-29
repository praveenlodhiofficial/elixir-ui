"use client";

import { useState } from "react";

import clsx from "clsx";
import { motion } from "motion/react";

interface ImageItem {
  src?: string;
  alt?: string;
}

export interface MotionGalleryProps {
  images?: ImageItem[];
  height?: number;
}

const defaultImages: ImageItem[] = [
  {
    src: "https://plus.unsplash.com/premium_photo-1682096467444-8861e1dc3bc2",
    alt: "Default 1",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b",
    alt: "Default 2",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01",
    alt: "Default 3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682096467444-8861e1dc3bc2",
    alt: "Default 4",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b",
    alt: "Default 5",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01",
    alt: "Default 6",
  },
];

export function MotionGallery({ images, height = 320 }: MotionGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryImages = images && images.length > 0 ? images : defaultImages;

  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
      className={clsx(
        "aspect-video w-4xl overflow-hidden rounded-xl border md:rounded-2xl"
      )}
    >
      <motion.div
        style={{
          display: "flex",
          gap: 24,
          height: height,
          transformStyle: "preserve-3d",
          perspective: 800,
        }}
        // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500"
        className="p-10"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {galleryImages.map((image, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered =
            hoveredIndex !== null && hoveredIndex !== index;

          let rotateY = 0;
          let translateZ = 0;
          let marginX = 0;

          if (hoveredIndex !== null && index !== hoveredIndex) {
            rotateY = index < hoveredIndex ? 25 : -25;
            marginX = -40;
          }

          if (isHovered) {
            translateZ = 60;
          }

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              style={{
                cursor: "pointer",
                height: "100%",
                width: 160,
                transformStyle: "preserve-3d",
              }}
              animate={{
                scale: isHovered ? 1.1 : isOtherHovered ? 0.85 : 1,
                rotateY,
                translateZ,
                marginLeft: marginX,
                marginRight: marginX,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <motion.img
                src={image?.src || "/placeholder.svg"}
                alt={image?.alt || "Gallery image"}
                className={clsx("h-60 w-60 rounded-2xl border object-cover")}
                animate={{
                  scale: isHovered ? 1.08 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
