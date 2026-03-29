import Image from "next/image";

import clsx from "clsx";

import { cn } from "../lib/utils";

export interface MasonryGridProps {
  images?: string[];
}

const PATTERN = ["A", "B", "C"] as const;

const DEFAULT_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80",
];

export function MasonryGrid({ images = [] }: MasonryGridProps) {
  const safeImages = images.length > 0 ? images : DEFAULT_IMAGES;
  const groups: string[][] = [];

  for (let i = 0; i < safeImages.length; i += 3) {
    groups.push(safeImages.slice(i, i + 3));
  }

  return (
    <div
      className={cn(
        clsx(
          "no-scrollbar",
          "flex",
          "gap-2",
          "overflow-hidden",
          "overflow-x-auto",
          "rounded-2xl",
          "md:max-w-218",
          "md:gap-3.5",
          "lg:max-w-4xl"
        )
      )}
    >
      {groups.map((group, index) => {
        const type = PATTERN[index % PATTERN.length];

        const widthClass =
          group.length === 3
            ? "min-w-[350px] md:min-w-[600px]"
            : "min-w-[200px] md:min-w-[300px]";

        return (
          <div
            key={index}
            className={cn(
              clsx("grid", widthClass, "grid-cols-2", "gap-2", "md:gap-3.5")
            )}
          >
            {/* ================= GROUP OF 3 IMAGES ================= */}
            {group.length === 3 && (
              <>
                {/* Layout A */}
                {type === "A" && (
                  <>
                    <div
                      className={cn(
                        clsx("relative", "col-span-2", "h-50", "md:h-80")
                      )}
                    >
                      <Image
                        src={group[0]!}
                        alt=""
                        fill
                        className={cn(
                          clsx("asp", "rounded-xl", "object-cover")
                        )}
                      />
                    </div>
                    {group[1] && (
                      <div className={cn(clsx("relative", "h-65", "md:h-45"))}>
                        <Image
                          src={group[1]}
                          alt=""
                          fill
                          className={cn(
                            clsx("asp", "rounded-xl", "object-cover")
                          )}
                        />
                      </div>
                    )}
                    {group[2] && (
                      <div className={cn(clsx("relative", "h-65", "md:h-45"))}>
                        <Image
                          src={group[2]}
                          alt=""
                          fill
                          className={cn(
                            clsx("asp", "rounded-xl", "object-cover")
                          )}
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Layout B */}
                {type === "B" && (
                  <>
                    {group[0] && (
                      <div className={cn(clsx("relative", "h-65", "md:h-45"))}>
                        <Image
                          src={group[0]}
                          alt=""
                          fill
                          className={cn(
                            clsx("asp", "rounded-xl", "object-cover")
                          )}
                        />
                      </div>
                    )}
                    {group[1] && (
                      <div className={cn(clsx("relative", "h-65", "md:h-45"))}>
                        <Image
                          src={group[1]}
                          alt=""
                          fill
                          className={cn(
                            clsx("asp", "rounded-xl", "object-cover")
                          )}
                        />
                      </div>
                    )}
                    {group[2] && (
                      <div
                        className={cn(
                          clsx("relative", "col-span-2", "h-50", "md:h-80")
                        )}
                      >
                        <Image
                          src={group[2]}
                          alt=""
                          fill
                          className={cn(
                            clsx("asp", "rounded-xl", "object-cover")
                          )}
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Layout C */}
                {type === "C" && (
                  <>
                    {group[0] && (
                      <div
                        className={cn(
                          clsx("relative", "col-span-2", "h-65", "md:h-45")
                        )}
                      >
                        <Image
                          src={group[0]}
                          alt=""
                          fill
                          className={cn(
                            clsx("asp", "rounded-xl", "object-cover")
                          )}
                        />
                      </div>
                    )}
                    {group[1] && (
                      <div className={cn(clsx("relative", "h-50", "md:h-80"))}>
                        <Image
                          src={group[1]}
                          alt=""
                          fill
                          className={cn(
                            clsx("asp", "rounded-xl", "object-cover")
                          )}
                        />
                      </div>
                    )}
                    {group[2] && (
                      <div className={cn(clsx("relative", "h-50", "md:h-80"))}>
                        <Image
                          src={group[2]}
                          alt=""
                          fill
                          className={cn(
                            clsx("asp", "rounded-xl", "object-cover")
                          )}
                        />
                      </div>
                    )}
                  </>
                )}
              </>
            )}

            {/* ================= GROUP OF 2 IMAGES ================= */}
            {group.length === 2 && (
              <div
                className={cn(
                  clsx(
                    "col-span-2",
                    "grid",
                    "grid-rows-[1fr_0.5fr]",
                    "gap-2",
                    "md:grid-rows-[0.5fr_1fr]",
                    "md:gap-3.5"
                  )
                )}
              >
                {group.map((src, i) => (
                  <div key={i} className={cn("relative")}>
                    <Image
                      src={src}
                      alt=""
                      fill
                      className={cn(clsx("rounded-xl", "object-cover"))}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* ================= GROUP OF 1 IMAGE ================= */}
            {group.length === 1 && (
              <div
                className={cn(
                  clsx("relative", "col-span-2", "h-50", "md:h-80")
                )}
              >
                <Image
                  src={group[0]!}
                  alt=""
                  fill
                  className={cn(clsx("rounded-xl", "object-cover"))}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
