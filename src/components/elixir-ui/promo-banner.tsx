import { motion } from "framer-motion";
import Link from "next/link";

interface PromoBannerProps {
   message: string;
   icon: React.ReactNode;
   href?: string;
}

export default function PromoBanner({ message, icon, href }: PromoBannerProps) {
   return (
      <div className="h-fit w-full bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-400">
         {/* Mobile/Tablet: Scrolling animation */}
         <Link href={href || "#"} className="cursor-pointer overflow-hidden lg:hidden">
            <motion.div
               className="flex items-center gap-4 py-1.5 text-sm text-[10px] font-semibold whitespace-nowrap text-black md:text-[13px]"
               animate={{ x: ["100%", "-100%"] }}
               transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
               }}
            >
               <div className="flex items-center gap-4 text-[13px]">
                  {icon} {message}
               </div>
               <div className="flex items-center gap-4 text-[13px]">
                  {icon} {message}
               </div>
            </motion.div>
         </Link>

         {/* Large screens: Static centered text */}
         <Link
            href={href || "#"}
            className="hidden cursor-pointer items-center justify-center gap-4 px-8 py-1.5 text-center text-[13px] font-semibold text-black lg:flex"
         >
            {icon}
            {message}
            {icon}
         </Link>
      </div>
   );
}
