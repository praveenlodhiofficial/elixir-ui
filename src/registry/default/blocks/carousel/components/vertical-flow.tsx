'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { FaBus, FaCar, FaSchool, FaTruckMoving } from 'react-icons/fa'
import Image from 'next/image'

interface VerticalFlowProps {
     className?: string
     cards: {
          link: string
          icons: React.ReactNode
          title: string
          category: string
          description: string
          image: string
     }[]
}

export default function VerticalFlow({ className, cards }: VerticalFlowProps) {
     const [currentCard, setCurrentCard] = useState(0)

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentCard(prev => (prev + 1) % cards.length)
          }, 3000) // Show each card for 3 seconds
          return () => clearInterval(interval)
     }, [])

     return (
          <div
               className={cn(
                    'grid h-[52vh] w-full grid-cols-[1.2fr_1fr] items-center overflow-hidden bg-black/10 md:items-stretch dark:bg-white/5',
                    className
               )}
          >
               {/* Left: Main Card + Progress Bars */}
               <div className="flex w-full flex-col items-center">
                    {/* Main Card */}
                    <div className="relative flex w-full items-center justify-center overflow-hidden bg-zinc-100 md:h-full dark:bg-zinc-900">
                         {cards.map((card, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   animate={{
                                        opacity: index === currentCard ? 1 : 0,
                                        scale: index === currentCard ? 1 : 1.05,
                                        filter: index === currentCard ? 'blur(0px)' : 'blur(10px)',
                                   }}
                                   transition={{ duration: 0.5 }}
                                   className={`absolute h-full w-full ${index === currentCard ? 'z-10' : 'z-0'}`}
                              >
                                   <div className="flex h-full w-full flex-col items-center justify-center">
                                        <div className="flex h-full w-full items-center justify-center overflow-hidden">
                                             <Image
                                                  src={card.link}
                                                  alt={card.title}
                                                  width={1000}
                                                  height={1000}
                                                  className="h-full w-full object-cover object-top"
                                             />
                                        </div>
                                   </div>
                              </motion.div>
                         ))}
                    </div>
               </div>

               {/* Right: List of Cards */}
               <div className="flex h-full w-full flex-col justify-start">
                    {cards.map((card, index) => (
                         <div
                              key={index}
                              className={`group relative flex w-full flex-col items-start space-y-2 border-b border-black/20 px-5 py-4 dark:border-white/20 ${
                                   index === currentCard ? 'h-full' : 'h-auto'
                              }`}
                         >
                              {/* Progress Bar on Left Border */}
                              <div className="absolute top-0 left-0 h-full">
                                   <motion.div
                                        initial={{ height: 0 }}
                                        animate={{
                                             height: index === currentCard ? '100%' : '0%',
                                        }}
                                        transition={{
                                             duration: index === currentCard ? 3 : 0,
                                             ease: 'linear',
                                        }}
                                        className="w-0.5 rounded-full bg-black dark:bg-white"
                                   />
                              </div>

                              <div className="flex h-full flex-col items-start justify-between">
                                   <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-3">
                                             <div className="rounded-full bg-transparent p-1">
                                                  {card.icons}
                                             </div>
                                             <div className="tracking-wide">
                                                  <p className="text-[10px] text-zinc-600 dark:text-zinc-400">
                                                       {card.category}
                                                  </p>
                                                  <h1 className="text-base font-semibold uppercase">
                                                       {card.title}
                                                  </h1>
                                             </div>
                                        </div>
                                        <ArrowRightIcon className="hidden h-5 w-5 rotate-0 transition-all duration-200 group-hover:block group-hover:translate-x-2 group-hover:-rotate-45" />
                                   </div>

                                   <motion.p
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{
                                             opacity: index === currentCard ? 1 : 0,
                                             y: index === currentCard ? 0 : 10,
                                             height: index === currentCard ? 'auto' : '0px',
                                        }}
                                        transition={{
                                             duration: 0.2,
                                             // delay: index * 0.1,
                                        }}
                                        className="ml-[3rem] text-xs text-zinc-600 dark:text-zinc-400"
                                   >
                                        {card.description}
                                   </motion.p>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     )
}
