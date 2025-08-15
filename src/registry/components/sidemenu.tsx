'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SidemenuNav from '@/registry/ui/sidemenu-nav'
import SidemenuButton from '@/registry/ui/sidemenu-button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/registry/lib/utils'
import { HTMLAttributes } from 'react'

interface SideMenuProps
     extends VariantProps<typeof containerVariants>,
          VariantProps<typeof menuVariants>,
          HTMLAttributes<HTMLDivElement> {
     cardColor?: string
     cardImageURL?: string
     imageOpacity?: number
     imageSaturation?: number
     links?: { title: string; href: string }[]
     footerLinks?: { title: string; href: string }[]
}

const containerVariants = cva('absolute top-10 right-10 origin-top-right scale-85 md:scale-100', {
     variants: {
          size: {
               default: 'scale-85 md:scale-100',
               large: 'scale-100',
               small: 'scale-75 md:scale-90',
          },
          position: {
               default: 'top-10 right-10',
               centered: 'top-1/2 right-10 -translate-y-1/2',
               bottom: 'bottom-10 right-10',
          },
     },
     defaultVariants: {
          size: 'default',
          position: 'default',
     },
})

const menuVariants = cva('relative sm:w-full', {
     variants: {
          theme: {
               default: '',
               rounded: 'rounded-3xl',
               sharp: 'rounded-none',
          },
     },
     defaultVariants: {
          theme: 'default',
     },
})

const backgroundVariants = cva('absolute inset-0 overflow-hidden rounded-[20px]', {
     variants: {
          theme: {
               default: 'rounded-[20px]',
               rounded: 'rounded-3xl',
               sharp: 'rounded-none',
          },
     },
     defaultVariants: {
          theme: 'default',
     },
})

export default function SideMenu({
     cardColor = '',
     cardImageURL="https://imgs.search.brave.com/yN35k8wE_67PIKda9ZWGLieCtzHPG8STXSe5IH4-Ykk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzEwLzQ1Lzk1/LzM2MF9GXzIxMDQ1/OTUzNl9YbUxERWNL/cTJEcGVOTFZtaGV1/V2V1OU5NOWFHS25p/aC5qcGc",
     imageOpacity = 1,
     imageSaturation = 1,
     links,
     footerLinks,
     size,
     position,
     theme,
     className,
     ...props
}: SideMenuProps) {
     const [isActive, setIsActive] = useState(false)

     const variants = {
          open: {
               width: 400,
               height: 'fit-content',
               backgroundColor: cardImageURL ? 'transparent' : cardColor,
               borderRadius: theme === 'sharp' ? '0px' : theme === 'rounded' ? '24px' : '20px',
               transition: {
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
               },
               top: -5,
               right: -5,
          },
          closed: {
               width: '80px',
               height: '30px',
               backgroundColor: 'rgba(0, 0, 0, 0)',
               borderRadius: theme === 'sharp' ? '0px' : theme === 'rounded' ? '24px' : '20px',
               transition: {
                    duration: 0.7,
                    ease: [0.76, 0, 0.24, 1],
               },
               top: 0,
               right: 0,
          },
     }

     return (
          <div className={cn(containerVariants({ size, position, className }))} {...props}>
               <motion.div
                    className={cn(menuVariants({ theme }))}
                    // @ts-ignore
                    variants={variants}
                    initial="closed"
                    animate={isActive ? 'open' : 'closed'}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
               >
                    {cardImageURL && (
                         <div
                              className={cn(backgroundVariants({ theme }))}
                              style={{
                                   backgroundImage: `url(${cardImageURL})`,
                                   backgroundSize: 'cover',
                                   backgroundPosition: 'center',
                                   backgroundRepeat: 'no-repeat',
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
     )
}
