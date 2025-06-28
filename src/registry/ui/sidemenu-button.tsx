'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/registry/lib/utils'
import { HTMLAttributes } from 'react'

// NavButton Component with Toggle Animation
interface NavButtonProps
     extends VariantProps<typeof buttonVariants>,
          HTMLAttributes<HTMLDivElement> {
     isActive: boolean
     setIsActive: (isActive: boolean) => void
     menuBgColor?: string
     menuBgImageURL?: string
     buttonStyle?: VariantProps<typeof menuButtonVariants>['buttonStyle']
}

const buttonVariants = cva(
     'fixed top-0 right-0 h-8 w-20 cursor-pointer overflow-hidden rounded-full',
     {
          variants: {
               size: {
                    default: 'h-8 w-20',
                    large: 'h-10 w-24',
                    small: 'h-6 w-16',
               },
               position: {
                    default: 'top-0 right-0',
                    centered: 'top-1/2 right-0 -translate-y-1/2',
                    bottom: 'bottom-0 right-0',
               },
          },
          defaultVariants: {
               size: 'default',
               position: 'default',
          },
     }
)

const sliderVariants = cva('relative h-full w-full text-xs font-semibold text-black', {
     variants: {
          theme: {
               default: '',
               dark: 'text-white',
               light: 'text-black',
          },
     },
     defaultVariants: {
          theme: 'default',
     },
})

const menuButtonVariants = cva('flex h-full w-full items-center justify-center uppercase', {
     variants: {
          buttonStyle: {
               default: '',
               minimal: 'font-medium',
               bold: 'font-bold',
          },
     },
     defaultVariants: {
          buttonStyle: 'default',
     },
})

const closeButtonVariants = cva(
     'absolute top-full flex h-full w-full items-center justify-center bg-black text-white uppercase',
     {
          variants: {
               theme: {
                    default: 'bg-black text-white',
                    dark: 'bg-white text-black',
                    light: 'bg-gray-800 text-white',
               },
          },
          defaultVariants: {
               theme: 'default',
          },
     }
)

export function SidemenuButton({
     isActive,
     setIsActive,
     menuBgColor,
     menuBgImageURL,
     size,
     position,
     buttonStyle,
     className,
     ...props
}: NavButtonProps) {
     return (
          <div
               onClick={() => setIsActive(!isActive)}
               className={cn(buttonVariants({ size, position, className }))}
               {...props}
          >
               {/* Slider Container */}
               <motion.div
                    className={cn(sliderVariants())}
                    animate={{ top: isActive ? '-100%' : '0%' }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
               >
                    {/* Menu Button */}
                    <div
                         className={cn(menuButtonVariants({ buttonStyle }))}
                         style={{
                              backgroundColor: menuBgColor || '',
                              backgroundImage: menuBgImageURL ? `url(${menuBgImageURL})` : 'none',
                         }}
                    >
                         <p>Menu</p>
                    </div>

                    {/* Close Button */}
                    <div className={cn(closeButtonVariants())}>
                         <p>Close</p>
                    </div>
               </motion.div>
          </div>
     )
}

export default SidemenuButton
