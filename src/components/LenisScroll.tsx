'use client'

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

const LenisScroll = () => {
  const hasBounced = useRef(false); // Track if bounce has occurred

  useEffect(() => {
    let lenis = new Lenis({
      duration: 0.3,
      easing: (t) => Math.min(1, 1.005 - Math.pow(1 - t, 2)),
      smooth: true,
    });

    // Add event listener to disable smooth scrolling for code blocks
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.code-highlight-container')) {
        lenis.destroy();
        lenis = new Lenis({
          duration: 0.3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 2)),
          smooth: false,
        });
      }
    };

    // Detect when scroll hits the bottom and add bouncy effect
    const handleScroll = () => {
      const scrollPosition = lenis.scroll;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // If at bottom and hasn't bounced yet, trigger bounce
      if (scrollPosition >= maxScroll - 1 && !hasBounced.current) {
        hasBounced.current = true; // Set flag to prevent repeat bounces
        lenis.scrollTo(maxScroll - 50, {
          duration: 0.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 3)),
          onComplete: () => {
            lenis.scrollTo(maxScroll, {
              duration: 0.3,
              easing: (t) => Math.min(1, 1.005 - Math.pow(1 - t, 2.5)),
            });
          },
        });
      } 
      // Reset bounce flag when scrolling away from bottom
      else if (scrollPosition < maxScroll - 10) {
        hasBounced.current = false;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    lenis.on('scroll', handleScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      window.removeEventListener('wheel', handleWheel);
      lenis.off('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default LenisScroll;