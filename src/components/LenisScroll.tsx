'use client'

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const LenisScroll = () => {
  useEffect(() => {
    let lenis = new Lenis({
      duration: 0.5,
      easing: (t) => Math.min(1, 1.005 - Math.pow(1 - t, 1.5)),
      smooth: true,
    });

    // Add event listener to disable smooth scrolling for code blocks
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.code-highlight-container')) {
        lenis.destroy();
        lenis = new Lenis({
          duration: 0.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 2)),
          smooth: false,
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return null;
};

export default LenisScroll;