import clsx from "clsx";

import { cn } from "../lib/utils";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

export interface TestimonialCardProps {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  tag?: string;
  backgroundImage?: string;
  className?: string;
}

const DEFAULT_TESTIMONIAL: Required<Omit<TestimonialCardProps, "className">> = {
  tag: "Words to Build By",
  quote:
    "Stay hungry, stay foolish. Never let go of your appetite to do great work.",
  authorName: "Steve Jobs",
  authorRole: "Co-founder & CEO, Apple",
  backgroundImage:
    "https://images.unsplash.com/photo-1670884307458-4977f638a933?auto=format&fit=crop&w=1470&q=80",
};

export function TestimonialCard({
  quote = DEFAULT_TESTIMONIAL.quote,
  authorName = DEFAULT_TESTIMONIAL.authorName,
  authorRole = DEFAULT_TESTIMONIAL.authorRole,
  tag = DEFAULT_TESTIMONIAL.tag,
  backgroundImage = DEFAULT_TESTIMONIAL.backgroundImage,
  className = "",
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        clsx(
          "relative mx-auto flex aspect-video h-full w-full max-w-5xl flex-col justify-between overflow-hidden rounded-2xl bg-cover bg-center px-6 py-8 text-white"
        ),
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <CardContent className="flex h-full w-full max-w-5xl flex-col justify-between gap-25">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col gap-6">
          <p className="text-sm font-light tracking-wide text-white/70 uppercase">
            {tag}
          </p>

          <CardTitle className="max-w-2xl text-2xl leading-tight font-bold md:text-3xl lg:text-[2.7rem]">
            {quote}
          </CardTitle>
        </div>

        <div className="relative z-10 flex flex-col">
          <span className="text-lg font-semibold">{authorName}</span>
          <p className="text-sm font-light text-white/70">{authorRole}</p>
        </div>
      </CardContent>
    </Card>
  );
}
