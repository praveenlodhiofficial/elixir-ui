"use client";

import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

// Extend the HTMLDivElement to include vanillaTilt property
interface HTMLDivElementWithVanillaTilt extends HTMLDivElement {
   vanillaTilt?: {
      destroy: () => void;
   };
}

interface VanillaTiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
   options?: {
      max?: number;
      speed?: number;
      glare?: boolean;
      scale?: number;
      "max-glare"?: number;
   };
   children: React.ReactNode;
}

export default function VanillaTiltCard({
   options = {
      max: 5,
      speed: 300,
      glare: true,
      "max-glare": 0.6,
      scale: 1.1,
   },
   children,
   className,
   ...props
}: VanillaTiltCardProps) {
   const tiltRef = useRef<HTMLDivElementWithVanillaTilt | null>(null);

   useEffect(() => {
      const currentTilt = tiltRef.current;

      if (currentTilt) {
         VanillaTilt.init(currentTilt, options);
      }

      return () => {
         if (currentTilt && currentTilt.vanillaTilt) {
            currentTilt.vanillaTilt.destroy();
         }
      };
   }, [options]);

   return (
      <div
         ref={tiltRef}
         className={`flex rounded-lg p-8 hover:bg-zinc-300 hover:shadow-lg dark:hover:bg-zinc-900 ${className || ""}`}
         style={{
            transformStyle: "preserve-3d",
            perspective: "-500px",
         }}
         {...props}
      >
         <div
            style={{
               transform: "translate3d(0, 0, 100px)",
               transformStyle: "preserve-3d",
            }}
         >
            {children}
         </div>
      </div>
   );
}
