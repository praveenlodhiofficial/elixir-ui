"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import clsx from "clsx";
import gsap from "gsap";

export interface TidalTextAnimationProps {
  items?: readonly {
    label: string;
    imageSrc: string;
  }[];
  fallbackText?: string;
  className?: string;
}

const DEFAULT_ITEMS = [
  {
    label: "Aurora Skies",
    imageSrc: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    label: "Desert Mirage",
    imageSrc: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    label: "Ocean Drift",
    imageSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    label: "Mountain Echo",
    imageSrc: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?2",
  },
] as const;

const FALLBACK_TEXT = "Nature Vibes";

export function TidalTextAnimation({
  items = [...DEFAULT_ITEMS],
  fallbackText = FALLBACK_TEXT,
  className,
}: TidalTextAnimationProps) {
  const profileImagesRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const namesRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const currentImages = imagesRef.current;

    function splitTextManually(element: HTMLElement) {
      const text = element.textContent || "";
      element.innerHTML = "";

      for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = text.charAt(i);
        element.appendChild(span);
      }

      return element.querySelectorAll(".letter");
    }

    headingsRef.current.forEach((heading) => {
      if (heading) splitTextManually(heading);
    });

    const defaultHeading = headingsRef.current[0];

    if (defaultHeading) {
      const letters = defaultHeading.querySelectorAll(".letter");
      gsap.set(letters, { y: "0%" });
    }

    if (window.innerWidth >= 900) {
      currentImages.forEach((image, index) => {
        if (!image) return;

        const nameElement = namesRef.current[index + 1];
        if (!nameElement) return;

        const letters = nameElement.querySelectorAll(".letter");

        image.addEventListener("mouseenter", () => {
          gsap.to(letters, {
            y: "-100%",
            duration: 0.75,
            stagger: { amount: 0.25, from: "center" },
            ease: "power4.out",
          });
        });

        image.addEventListener("mouseleave", () => {
          gsap.to(letters, {
            y: "0%",
            duration: 0.75,
            stagger: { amount: 0.25, from: "center" },
            ease: "power4.out",
          });
        });
      });

      if (defaultHeading) {
        const defaultLetters = defaultHeading.querySelectorAll(".letter");

        currentImages.forEach((image) => {
          if (!image) return;

          image.addEventListener("mouseenter", () => {
            gsap.to(defaultLetters, {
              y: "100%",
              duration: 0.75,
              stagger: { amount: 0.25, from: "center" },
              ease: "power4.out",
            });
          });

          image.addEventListener("mouseleave", () => {
            gsap.to(defaultLetters, {
              y: "0%",
              duration: 0.75,
              stagger: { amount: 0.25, from: "center" },
              ease: "power4.out",
            });
          });
        });
      }
    }
  }, []);

  return (
    <section
      className={clsx(
        "flex h-fit w-full max-w-4xl flex-col items-center justify-center gap-10 rounded-lg md:gap-3 md:rounded-xl md:p-5 lg:rounded-2xl",
        className
      )}
    >
      {/* <style>{`
        .letter {
          display: inline-block;
        }
      `}</style> */}

      {/* Images */}
      <div
        className="w-full gap-4 md:gap-6"
        ref={profileImagesRef}
      >
        {items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="grid grid-cols-4"
            ref={(el) => void (imagesRef.current[index] = el)}
          >
            <Image
              src={item.imageSrc}
              alt={item.label}
              width={200}
              height={200}
              className="h-40 w-fit rounded-xl object-cover aspect-9/16 md:aspect-square "
            />
          </div>
        ))}
      </div>

      {/* Text Animation */}
      <div className="font-barlow-condensed relative flex h-12.5 w-full items-center justify-center overflow-hidden text-[30px] font-extrabold uppercase sm:h-17.5 md:h-27.5 md:text-[60px] lg:h-45 lg:text-[80px]">
        {/* Default */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden [clip-path:inset(0_0_20%_0)]"
          ref={(el) => void (namesRef.current[0] = el)}
        >
          <h1
            className="absolute w-full translate-y-1/2 text-center [font-size:inherit] text-black dark:text-white"
            ref={(el) => void (headingsRef.current[0] = el)}
          >
            {fallbackText.split(" ").map((word, i) => (
              <span key={i}>{word}&nbsp;</span>
            ))}
          </h1>
        </div>

        {/* Members */}
        {items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="absolute inset-0 flex items-center justify-center overflow-hidden [clip-path:inset(0_0_20%_0)]"
            ref={(el) => void (namesRef.current[index + 1] = el)}
          >
            <h1
              className="absolute w-full translate-y-[150%] text-center [font-size:inherit] text-[#ff3333]"
              dangerouslySetInnerHTML={{
                __html: item.label.replace(/\s/g, "&nbsp;"),
              }}
              ref={(el) => void (headingsRef.current[index + 1] = el)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
