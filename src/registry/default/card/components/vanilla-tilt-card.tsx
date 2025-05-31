"use client";

import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface VanillaTiltCardProps {
  options?: {
    max?: number;
    speed?: number;
    glare?: boolean;
    scale?: number;
    "max-glare"?: number;
  };
  children: React.ReactNode;
  className?: string;
}

export default function VanillaTiltCard({
  options = { max: 5, speed: 300, glare: true, "max-glare": 1, scale: 1.03 },
  children,
  className,
  ...props
}: VanillaTiltCardProps) {
  const tiltRef = useRef(null);

  useEffect(() => {
    const currentTilt = tiltRef.current;

    if (currentTilt) {
      VanillaTilt.init(currentTilt, options);
    }

    return () => {
      // @ts-ignore
      if (currentTilt && currentTilt.vanillaTilt) {
        // @ts-ignore
        currentTilt.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div
      ref={tiltRef}
      className={`
        ${className} hover:shadow-lg flex px-6 py-5 rounded-sm`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '-500px',
      }}
      {...props}
    >
      <div style={{
        transform: 'translate3d(0, 0, 50px)',
        transformStyle: 'preserve-3d',
      }}>
        {children}
      </div>
    </div>
  );
};
