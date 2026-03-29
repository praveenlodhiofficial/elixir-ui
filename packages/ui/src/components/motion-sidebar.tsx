"use client";

import { ComponentProps, useState } from "react";

import Link from "next/link";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export type MotionSidebarLinkItem = {
  title: string;
  href: string;
  type?: "main" | "footer";
};

export type MotionSidebarProps = {
  links?: MotionSidebarLinkItem[];
  className?: string;
};

type MotionSidebarComponentProps = ComponentProps<"div"> & MotionSidebarProps;

/* ---------------- DEFAULT LINKS ---------------- */
const defaultLinks: MotionSidebarLinkItem[] = [
  { title: "Projects", href: "", type: "main" },
  { title: "Agency", href: "", type: "main" },
  { title: "Expertise", href: "", type: "main" },
  { title: "Contact", href: "", type: "main" },

  { title: "Instagram", href: "", type: "footer" },
  { title: "LinkedIn", href: "", type: "footer" },
  { title: "Twitter", href: "", type: "footer" },
  { title: "Facebook", href: "", type: "footer" },
];

/* ---------------- BUTTON ---------------- */
type NavButtonProps = ComponentProps<"div"> & {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

function MotionSidebarButton({
  isActive,
  setIsActive,
  className,
  ...props
}: NavButtonProps) {
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={clsx(
        "fixed top-3 right-3 h-8 w-22 cursor-pointer overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <motion.div
        className="text-foreground relative h-full w-full text-sm font-semibold"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="flex h-full w-full items-center justify-center uppercase">
          <p className="flex items-center">
            <Menu className="mr-1 size-3.5" />
            <span>Menu</span>
          </p>
        </div>

        <div className="bg-foreground text-background absolute top-full flex h-full w-full items-center justify-center uppercase">
          <p className="flex items-center">
            <X className="mr-1 size-4" strokeWidth={2.5} />
            <span>Close</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- NAV ---------------- */
type NavProps = ComponentProps<"div"> & {
  links?: MotionSidebarLinkItem[];
};

function MotionSidebarNav({ links, className, ...props }: NavProps) {
  const mainLinks = links?.filter((l) => l.type !== "footer");
  const footerLinks = links?.filter((l) => l.type === "footer");

  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 0,
      translateX: -20,
    },
    enter: ({ index }: { index: number }) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.6,
        opacity: { duration: 0.2 },
        delay: 0.1 + index * 0.11,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const footerAnimation = {
    initial: { opacity: 0, translateY: 10 },
    enter: ({ index }: { index: number }) => ({
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.4,
        delay: 0.6 + index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      translateY: 10,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div
      className={clsx(
        "text-foreground box-border flex h-full flex-col justify-between gap-12 rounded-2xl px-8 pt-20 pb-10 font-medium uppercase shadow-lg [&_a]:no-underline [&_a:hover]:no-underline",
        className
      )}
      {...props}
    >
      {/* Main Links */}
      <div className="flex flex-col space-y-4 text-5xl">
        {mainLinks?.map((link, index) => (
          <div
            key={index}
            style={{
              perspective: "120px",
              perspectiveOrigin: "right",
            }}
          >
            <motion.div
              custom={{ index }}
              variants={perspective as any}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link
                href={link.href}
                className="border-foreground flex items-center transition-all duration-75 hover:border-l-4"
              >
                <div className="transition-all duration-150 ease-linear hover:pl-2">
                  {link.title}
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="flex justify-between text-sm">
        {footerLinks?.map((link, index) => (
          <motion.div
            key={index}
            custom={{ index }}
            variants={footerAnimation as any}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Link href={link.href}>{link.title}</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- MAIN ---------------- */
export function MotionSidebar({
  links = defaultLinks,
  className,
  ...props
}: MotionSidebarComponentProps) {
  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: {
      width: 400,
      height: "fit-content",
      borderRadius: "20px",
      backgroundColor: "var(--card)",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
      top: -5,
      right: -5,
      left: "auto",
    },
    closed: {
      width: "80px",
      height: "30px",
      backgroundColor: "transparent",
      borderRadius: "20px",
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
      top: 0,
      right: 0,
      left: "auto",
    },
  };

  return (
    <div
      className={clsx(
        "absolute top-5 right-5 origin-top-right scale-85 md:scale-100",
        className
      )}
      {...props}
    >
      <motion.div
        className="relative sm:w-full"
        variants={variants as any}
        initial="closed"
        animate={isActive ? "open" : "closed"}
      >
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                key="nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <MotionSidebarNav links={links} />
              </motion.div>
            )}
          </AnimatePresence>

          <MotionSidebarButton isActive={isActive} setIsActive={setIsActive} />
        </div>
      </motion.div>
    </div>
  );
}
