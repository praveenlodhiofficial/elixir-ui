"use client";

import { useRef } from "react";

import Link from "next/link";

import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "../lib/utils";

export interface EventCardProps {
  id?: string;
  name?: string;
  slug?: string;
  coverImage?: string;
  date?: string;
  venue?: string;
  price?: string;
  className?: string;
}

const DEFAULT_EVENT: Required<Omit<EventCardProps, "className">> = {
  id: "1",
  name: "LOVE w/ Kittenpop — Valentine’s Edition",
  slug: "#",
  coverImage:
    "https://ik.imagekit.io/praveenlodhiofficial/eventra/events/c_crop_g_custom_v1770147502_c6jnotpksad8yogdk9fg_uzbN0J27z.jpg",
  date: "Apr 20, 2026, 7:00 PM",
  venue: "Wood Castle Hotel, New Delhi",
  price: "₹ 1499 onwards",
};

export function EventCard(props: EventCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const data = { ...DEFAULT_EVENT, ...props };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  return (
    <motion.div
      style={{ rotateZ, y, scale, transformOrigin: "bottom center" }}
      className={cn(
        clsx(
          "not-prose max-h-120 w-75 origin-bottom overflow-hidden rounded-xl border shadow will-change-transform md:rounded-2xl"
        ),
        props.className
      )}
    >
      <Link
        href={`/events/${data.slug}`}
        ref={ref}
        className="block no-underline hover:no-underline"
      >
        {/* image */}
        <div className="relative aspect-4/7 h-80 w-full overflow-hidden md:aspect-10/11">
          <motion.img
            src={data.coverImage}
            alt={data.name}
            height={500}
            width={500}
            style={{ scale: scaleImage, transformOrigin: "bottom top" }}
            className="h-full w-full object-cover will-change-transform"
          />
        </div>

        <div className="flex flex-col flex-wrap space-y-1.5 p-3">
          {/* date */}
          <div className="text-xs text-amber-500">{data.date}</div>

          {/* title */}
          <div className="line-clamp-2 text-[14px] font-semibold text-wrap md:text-[16px]">
            {data.name}
          </div>

          {/* venue */}
          <div className="text-muted-foreground line-clamp-1 text-xs md:line-clamp-2">
            {data.venue}
          </div>

          <div className="text-muted-foreground text-xs">{data.price}</div>
        </div>
      </Link>
    </motion.div>
  );
}
