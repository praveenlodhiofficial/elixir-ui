"use client";
import Link from "next/link";
import { IoBookmark, IoHeart, IoShare } from "react-icons/io5";
import ActionButton from "@/components/elixir-ui/action-button";
import { CopyCLI } from "@/components/copy-cli";
import { useEffect, useState } from "react";
import { highlight } from "sugar-high";
import { Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Container({ children, slug }: { children: React.ReactNode; slug: string }) {
   const [showCode, setShowCode] = useState(false);
   const [source, setSource] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [isLiked, setIsLiked] = useState(false);
   const [isBookmarked, setIsBookmarked] = useState(false);
   const [isShared, setIsShared] = useState(false);

   useEffect(() => {
      setShowCode(false);
      setSource(null);
      setError(null);
   }, [slug]);

   const handleToggleCode = async () => {
      if (!showCode && !source) {
         try {
            setIsLoading(true);
            setError(null);
            const res = await fetch(`/api/component-code?slug=${encodeURIComponent(slug)}`);
            if (!res.ok) {
               const data = await res.json().catch(() => ({}));
               throw new Error(data.error || "Failed to load source");
            }
            const text = await res.text();
            setSource(text);
         } catch (e: unknown) {
            setError(e instanceof Error ? e.message : "Unknown error");
         } finally {
            setIsLoading(false);
         }
      }
      setShowCode((prev) => !prev);
   };

   const handleLike = () => {
      setIsLiked(!isLiked);
   };

   const handleBookmark = () => {
      setIsBookmarked(!isBookmarked);
   };

   const handleShare = () => {
      setIsShared(!isShared);
   };
   return (
      <div className="mx-auto mt-3 flex w-full flex-col items-center justify-center gap-2 md:mt-5">
         <div className="order-2 flex w-full items-center justify-end gap-3 rounded-lg border-zinc-300 md:order-1 md:gap-2 dark:border-zinc-800">
            <CopyCLI componentName={slug} />
            <div className="hidden md:flex">
               <ActionButton
                  variant="secondary"
                  isActive={showCode}
                  setIsActive={() => {
                     void handleToggleCode();
                  }}
                  openText="View code"
                  closeText="Hide code"
                  className="rounded-lg"
                  openBgColor="bg-white text-black border-t rounded-lg"
                  closeBgColor="bg-zinc-800 text-white border-b rounded-lg"
               />
            </div>
            <Button variant="outline" asChild className="hidden aspect-square md:block">
               <Link href={`/docs/components/${slug}/preview`}>
                  <Expand className="h-5 w-5 transition-all duration-300 hover:scale-120" />
               </Link>
            </Button>
         </div>
         <section
            className={`relative order-1 flex w-full items-center justify-center lg:h-[60vh] ${showCode ? "overflow-auto" : "overflow-hidden"} rounded-2xl border border-zinc-300 md:order-2 md:h-[40vh] lg:h-[70vh] dark:border-zinc-800`}
         >
            {/* Like, Bookmark & Share Buttons */}
            <div className="absolute top-3 right-3 z-20 flex flex-col items-center justify-center gap-2">
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                     type: "spring",
                     stiffness: 400,
                     damping: 17,
                  }}
               >
                  <Button
                     variant="secondary"
                     className="aspect-square h-9 w-9 rounded-lg p-0 transition-colors duration-200"
                     onClick={handleLike}
                  >
                     <motion.div
                        animate={{
                           scale: isLiked ? [1, 1.3, 1] : 1,
                           color: isLiked ? "#ef4444" : "currentColor",
                        }}
                        transition={{
                           duration: 0.3,
                           ease: "easeInOut",
                        }}
                     >
                        <IoHeart className="h-8 w-8" />
                     </motion.div>
                  </Button>
               </motion.div>
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                     type: "spring",
                     stiffness: 400,
                     damping: 17,
                  }}
               >
                  <Button
                     variant="secondary"
                     className="aspect-square h-9 w-9 rounded-lg p-0 transition-colors duration-200"
                     onClick={handleBookmark}
                  >
                     <motion.div
                        animate={{
                           scale: isBookmarked ? [1, 1.3, 1] : 1,
                           color: isBookmarked ? "#3b82f6" : "currentColor",
                        }}
                        transition={{
                           duration: 0.3,
                           ease: "easeInOut",
                        }}
                     >
                        <IoBookmark className="h-8 w-8" />
                     </motion.div>
                  </Button>
               </motion.div>
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                     type: "spring",
                     stiffness: 400,
                     damping: 17,
                  }}
               >
                  <Button
                     variant="secondary"
                     className="aspect-square h-9 w-9 rounded-lg p-0 transition-colors duration-200"
                     onClick={handleShare}
                  >
                     <motion.div
                        animate={{
                           scale: isShared ? [1, 1.3, 1] : 1,
                           color: isShared ? "#9AE600" : "currentColor",
                        }}
                        transition={{
                           duration: 0.3,
                           ease: "easeInOut",
                        }}
                     >
                        <IoShare className="h-8 w-8" />
                     </motion.div>
                  </Button>
               </motion.div>
            </div>

            {/* Preview */}
            {!showCode ? (
               children
            ) : (
               <div className="flex h-full w-full items-start justify-start rounded-2xl">
                  <pre
                     className="h-full w-full overflow-auto"
                     style={{
                        width: "100%",
                        height: "100%",
                        maxHeight: "none",
                        margin: 0,
                        borderRadius: "1rem",
                     }}
                  >
                     {source && (
                        <code
                           dangerouslySetInnerHTML={{
                              __html: highlight(source),
                           }}
                        />
                     )}
                     {!source && (
                        <code className="opacity-70">
                           {isLoading
                              ? "Loading code…"
                              : error
                                ? `Error: ${error}`
                                : "No source available."}
                        </code>
                     )}
                  </pre>
               </div>
            )}
         </section>
      </div>
   );
}
