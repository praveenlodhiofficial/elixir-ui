"use client";

import { useState, HTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SidemenuProps extends HTMLAttributes<HTMLDivElement> {
   cardColor?: string;
   cardImageURL?: string;
   imageOpacity?: number;
   imageSaturation?: number;
   links?: { title: string; href: string }[];
   footerLinks?: { title: string; href: string }[];
}

/* ------------------------- SIDEMENU BUTTON ------------------------- */
interface NavButtonProps extends HTMLAttributes<HTMLDivElement> {
   isActive: boolean;
   setIsActive: (isActive: boolean) => void;
   menuBgColor?: string;
   menuBgImageURL?: string;
}

function SidemenuButton({
   isActive,
   setIsActive,
   menuBgColor,
   menuBgImageURL,
   className,
   ...props
}: NavButtonProps) {
   return (
      <div
         onClick={() => setIsActive(!isActive)}
         className={cn(
            "fixed top-0 right-0 h-8 w-20 cursor-pointer overflow-hidden rounded-full",
            className
         )}
         {...props}
      >
         {/* Slider Container */}
         <motion.div
            className="relative h-full w-full text-xs font-semibold text-black"
            animate={{ top: isActive ? "-100%" : "0%" }}
            transition={{
               duration: 0.4,
               ease: [0.76, 0, 0.24, 1],
            }}
         >
            {/* Menu Button */}
            <div
               className="flex h-full w-full items-center justify-center uppercase"
               style={{
                  backgroundColor: menuBgColor || "",
                  backgroundImage: menuBgImageURL ? `url(${menuBgImageURL})` : "none",
               }}
            >
               <p>Menu</p>
            </div>

            {/* Close Button */}
            <div className="absolute top-full flex h-full w-full items-center justify-center bg-black text-white uppercase">
               <p>Close</p>
            </div>
         </motion.div>
      </div>
   );
}

/* ------------------------- SIDEMENU NAV ------------------------- */
interface NavProps extends HTMLAttributes<HTMLDivElement> {
   links?: { title: string; href: string }[];
   footerLinks?: { title: string; href: string }[];
}

function SidemenuNav({ links, footerLinks, className, ...props }: NavProps) {
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
         className={cn(
            "box-border flex h-full flex-col justify-between gap-12 rounded-2xl px-8 pt-20 pb-10 font-medium text-black uppercase",
            className
         )}
         {...props}
      >
         {/* Links Section */}
         <div className="flex flex-col space-y-4 text-5xl">
            {links?.map((link, index) => (
               <div
                  key={index}
                  style={{
                     perspective: "120px",
                     perspectiveOrigin: "right",
                  }}
               >
                  <motion.div
                     custom={{ index }}
                     // @ts-expect-error - Framer Motion variants type issue
                     variants={perspective}
                     initial="initial"
                     animate="enter"
                     exit="exit"
                  >
                     <Link
                        href={link.href}
                        className="flex items-center border-black transition-all duration-75 hover:border-l-4"
                     >
                        <div className="transition-all duration-150 ease-linear hover:pl-2">
                           {link.title}
                        </div>
                     </Link>
                  </motion.div>
               </div>
            ))}
         </div>

         {/* Footer Section */}
         <div className="flex justify-between text-xs">
            {footerLinks?.map((link, index) => (
               <motion.div
                  key={index}
                  custom={{ index }}
                  // @ts-expect-error - Framer Motion variants type issue
                  variants={footerAnimation}
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

/* ------------------------- MAIN SIDEMENU ------------------------- */
export default function Sidemenu({
   cardColor = "",
   cardImageURL = "https://imgs.search.brave.com/yN35k8wE_67PIKda9ZWGLieCtzHPG8STXSe5IH4-Ykk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzEwLzQ1Lzk1/LzM2MF9GXzIxMDQ1/OTUzNl9YbUxERWNL/cTJEcGVOTFZtaGV1/V2V1OU5NOWFHS25p/aC5qcGc",
   imageOpacity = 1,
   imageSaturation = 1,
   links,
   footerLinks,
   className,
   ...props
}: SidemenuProps) {
   const [isActive, setIsActive] = useState(false);

   const variants = {
      open: {
         width: 400,
         height: "fit-content",
         backgroundColor: cardImageURL ? "#ffffff" : cardColor,
         borderRadius: "20px",
         transition: {
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
         },
         top: -5,
         right: -5,
      },
      closed: {
         width: "80px",
         height: "30px",
         backgroundColor: "rgba(0, 0, 0, 0)",
         borderRadius: "20px",
         transition: {
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
         },
         top: 0,
         right: 0,
      },
   };

   return (
      <div className={cn("origin-top-right scale-85 md:scale-100", className)} {...props}>
         <motion.div
            className="relative sm:w-full"
            // @ts-expect-error - Framer Motion variants type issue
            variants={variants}
            initial="closed"
            animate={isActive ? "open" : "closed"}
            transition={{
               duration: 0.4,
               ease: [0.76, 0, 0.24, 1],
            }}
         >
            {/* Background Image */}
            {cardImageURL && (
               <div
                  className="absolute inset-0 overflow-hidden rounded-[20px]"
                  style={{
                     backgroundImage: `url(${cardImageURL})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                     opacity: imageOpacity,
                     filter: `saturate(${imageSaturation})`,
                  }}
               />
            )}

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
                        <SidemenuNav links={links} footerLinks={footerLinks} />
                     </motion.div>
                  )}
               </AnimatePresence>

               <SidemenuButton
                  isActive={isActive}
                  setIsActive={setIsActive}
                  menuBgColor={cardColor}
                  menuBgImageURL={cardImageURL}
               />
            </div>
         </motion.div>
      </div>
   );
}
