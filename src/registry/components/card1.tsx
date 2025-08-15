'use client'

import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const card1Variants = cva('hover:shadow-lg flex px-6 py-5 rounded-sm', {
     variants: {
          variant: {
               default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
               elevated: 'bg-white dark:bg-gray-800 shadow-md border-0',
               outline: 'bg-transparent border-2 border-gray-300 dark:border-gray-600',
               ghost: 'bg-transparent border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50',
          },
          size: {
               sm: 'px-4 py-3',
               default: 'px-6 py-5',
               lg: 'px-8 py-6',
          },
     },
     defaultVariants: {
          variant: 'default',
          size: 'default',
     },
})

interface Card1Props
     extends React.HTMLAttributes<HTMLDivElement>,
          VariantProps<typeof card1Variants> {
     options?: {
          max?: number
          speed?: number
          glare?: boolean
          scale?: number
          'max-glare'?: number
     }
     children: React.ReactNode
}

export default function Card1({
     options = { max: 5, speed: 300, glare: true, 'max-glare': 1, scale: 1.03 },
     children,
     className,
     variant,
     size,
     ...props
}: Card1Props) {
     const tiltRef = useRef(null)

     useEffect(() => {
          const currentTilt = tiltRef.current

          if (currentTilt) {
               VanillaTilt.init(currentTilt, options)
          }

          return () => {
               // @ts-ignore
               if (currentTilt && currentTilt.vanillaTilt) {
                    // @ts-ignore
                    currentTilt.vanillaTilt.destroy()
               }
          }
     }, [options])

     return (
          <div
               ref={tiltRef}
               className={cn(card1Variants({ variant, size }), className)}
               style={{
                    transformStyle: 'preserve-3d',
                    perspective: '-500px',
               }}
               {...props}
          >
               <div
                    style={{
                         transform: 'translate3d(0, 0, 50px)',
                         transformStyle: 'preserve-3d',
                    }}
               >
                    {children}
               </div>
          </div>
     )
}
