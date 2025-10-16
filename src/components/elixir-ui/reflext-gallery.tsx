"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ReflextGalleryProps {
   images: {
      src: string;
      alt: string;
   }[];
}

export function ReflextGallery({ images }: ReflextGalleryProps) {
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   return (
      <div className="mx-auto h-fit w-full text-center">
         <div
            className="relative flex items-center justify-center gap-6"
            style={{
               transformStyle: "preserve-3d",
               perspective: "500px",
            }}
            onMouseLeave={() => setHoveredIndex(null)}
         >
            {images.map((image, index) => {
               const isHovered = hoveredIndex === index;
               const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

               // Determine rotation direction based on position relative to hovered item
               let rotateY = 0;
               let marginX = 0;

               if (isOtherHovered && hoveredIndex !== null) {
                  if (index < hoveredIndex) {
                     rotateY = 20; // Rotate right for items to the left
                  } else {
                     rotateY = -20; // Rotate left for items to the right
                  }
                  marginX = -45; // Negative margin to compress
               }

               return (
                  <motion.div
                     key={index}
                     className="relative h-full w-fit cursor-pointer rounded-2xl"
                     style={{
                        aspectRatio: "1 / 1.2",
                        transformStyle: "preserve-3d",
                     }}
                     onMouseEnter={() => setHoveredIndex(index)}
                     animate={{
                        scale: isHovered ? 1 : isOtherHovered ? 0.8 : 1.1,
                        rotateY: rotateY,
                        marginLeft: marginX,
                        marginRight: marginX,
                        z: isHovered ? 50 : 0,
                     }}
                     transition={{
                        duration: 0.4,
                        ease: "easeOut",
                     }}
                     whileHover={{
                        boxShadow: isHovered ? "0 0 25px 5px rgba(0, 0, 0, 0.5)" : undefined,
                     }}
                  >
                     {/* Main image */}
                     <div className="relative h-full w-fit">
                        <Image
                           src={image.src || "/placeholder.svg"}
                           alt={image.alt}
                           width={1000}
                           height={1000}
                           className="h-60 w-40 rounded-2xl object-cover"
                        />
                     </div>
                  </motion.div>
               );
            })}
         </div>
      </div>
   );
}
