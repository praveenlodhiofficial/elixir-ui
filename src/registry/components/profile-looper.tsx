'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Icon } from '@/registry/ui/icon'

interface TeamMemberDetailsProps {
     id: string
     name: string
     role: string
     company: string
     companyUrl: string
     image: string
     socialLinks?: {
          twitter?: string
          linkedin?: string
     }
}

interface ProfileLooperProps {
     teamMembers: TeamMemberDetailsProps[]
}

export default function ProfileLooper({ teamMembers }: ProfileLooperProps) {
     const [hoveredTeammate, setHoveredTeammate] = useState<string | null>(null)
     const [openedIndex, setOpenedIndex] = useState(0)
     const [lastHoveredIndex, setLastHoveredIndex] = useState<number | null>(null)

     // Sequentially open teammates every 1s, only one open at a time, and sync image
     useEffect(() => {
          if (hoveredTeammate !== null) return
          const timer = setTimeout(() => {
               setOpenedIndex(prev => (prev + 1) % teamMembers.length)
               setHoveredTeammate(null)
          }, 1500)
          return () => clearTimeout(timer)
     }, [openedIndex, teamMembers.length, hoveredTeammate])

     // Determine current teammate for image (sync with openedIndex if not hovered)
     const currentTeammate = hoveredTeammate
          ? teamMembers.find((t: TeamMemberDetailsProps) => t.id === hoveredTeammate)
          : openedIndex >= 0
            ? teamMembers[openedIndex]
            : teamMembers[0]

     return (
          <div className="mx-auto flex h-full w-[100%] min-w-[53.1rem] flex-col items-center justify-center">
               <div className="h-full w-full overflow-hidden border-1 border-zinc-300 bg-transparent tracking-wide dark:border-zinc-700">
                    <div className="grid grid-cols-[1.5fr_1fr] divide-zinc-500 dark:divide-zinc-700">
                         {/* Left side - Team list */}
                         <div className="w-full flex-1 divide-y-1 divide-zinc-300 dark:divide-zinc-700">
                              {teamMembers.map((teammate: TeamMemberDetailsProps, idx: number) => {
                                   const isOpen =
                                        hoveredTeammate === teammate.id ||
                                        (hoveredTeammate === null && idx === openedIndex)
                                   return (
                                        <motion.div
                                             key={teammate.id}
                                             className="relative cursor-pointer overflow-hidden transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60"
                                             onMouseEnter={() => {
                                                  setHoveredTeammate(teammate.id)
                                                  setLastHoveredIndex(idx)
                                             }}
                                             onMouseLeave={() => {
                                                  setHoveredTeammate(null)
                                                  if (lastHoveredIndex !== null) {
                                                       setOpenedIndex(
                                                            (lastHoveredIndex + 1) %
                                                                 teamMembers.length
                                                       )
                                                       setLastHoveredIndex(null)
                                                  }
                                             }}
                                        >
                                             <motion.div
                                                  className="flex w-full flex-col justify-center"
                                                  animate={{
                                                       height: isOpen ? '100px' : '80px',
                                                       padding: isOpen ? '0px 30px' : '10px 32px',
                                                  }}
                                                  transition={{ duration: 0.3, ease: 'easeOut' }}
                                             >
                                                  {/* Name */}
                                                  <motion.div
                                                       className="truncate text-lg font-semibold text-zinc-800 uppercase dark:text-zinc-100"
                                                       initial={{ opacity: 0.5, y: 13 }}
                                                       style={{ fontWeight: isOpen ? 'bold' : '' }}
                                                       animate={{
                                                            opacity: isOpen ? 1 : 0.5,
                                                            y: isOpen ? -2 : 13,
                                                       }}
                                                       transition={{
                                                            duration: 0.3,
                                                            ease: 'easeOut',
                                                       }}
                                                  >
                                                       {teammate.name}
                                                  </motion.div>

                                                  {/* Role and Company */}
                                                  <motion.div
                                                       className="pt-2 text-sm leading-none text-zinc-600 uppercase dark:text-zinc-400"
                                                       initial={{ opacity: 0 }}
                                                       animate={{
                                                            opacity: isOpen ? 1 : 0,
                                                       }}
                                                       transition={{
                                                            duration: 0.3,
                                                            ease: 'easeOut',
                                                       }}
                                                  >
                                                       {teammate.role},{' '}
                                                       <Link
                                                            href={teammate.companyUrl}
                                                            rel="noopener"
                                                            target="_blank"
                                                            className="whitespace-nowrap text-zinc-600 uppercase no-underline hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
                                                       >
                                                            {teammate.company}
                                                       </Link>
                                                  </motion.div>
                                             </motion.div>

                                             {/* Social Icons */}
                                             <motion.div
                                                  className="absolute top-1/2 right-8 -translate-y-1/2"
                                                  initial={{ opacity: 0 }}
                                                  animate={{
                                                       opacity: isOpen ? 1 : 0,
                                                  }}
                                                  transition={{ duration: 0.3, ease: 'easeOut' }}
                                             >
                                                  <nav className="flex gap-4">
                                                       {teammate.socialLinks?.twitter && (
                                                            <Link
                                                                 href={teammate.socialLinks.twitter}
                                                                 rel="noopener noreferrer"
                                                                 target="_blank"
                                                                 className="rounded-md whitespace-nowrap text-zinc-900 underline decoration-zinc-400 underline-offset-2 transition-colors duration-200 hover:bg-zinc-200 hover:text-zinc-900 hover:opacity-100 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                                                            >
                                                                 <Icon name="BsTwitterX" />
                                                            </Link>
                                                       )}
                                                       {teammate.socialLinks?.linkedin && (
                                                            <Link
                                                                 href={
                                                                      teammate.socialLinks.linkedin
                                                                 }
                                                                 rel="noopener noreferrer"
                                                                 target="_blank"
                                                                 className="scale-110 rounded-md whitespace-nowrap text-zinc-900 underline decoration-zinc-400 underline-offset-2 transition-colors duration-200 hover:bg-zinc-200 hover:text-zinc-900 hover:opacity-100 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                                                            >
                                                                 <Icon name="FaLinkedin" />
                                                            </Link>
                                                       )}
                                                  </nav>
                                             </motion.div>
                                        </motion.div>
                                   )
                              })}
                         </div>

                         {/* Right side - Profile images */}
                         <div className="relative w-full flex-shrink-0 bg-zinc-100 dark:bg-zinc-800">
                              <AnimatePresence>
                                   {teamMembers.map((teammate: TeamMemberDetailsProps) => (
                                        <motion.div
                                             key={teammate.id}
                                             className="absolute inset-0"
                                             initial={{ opacity: 0 }}
                                             animate={{
                                                  opacity:
                                                       currentTeammate?.id === teammate.id ? 1 : 0,
                                             }}
                                             exit={{ opacity: 0 }}
                                             transition={{
                                                  duration: 0.3,
                                                  ease: 'easeInOut',
                                             }}
                                        >
                                             <Image
                                                  src={teammate.image}
                                                  alt={`${teammate.name} - ${teammate.company}`}
                                                  className="object-cover"
                                                  priority={teammate.id === `${teammate.id}`}
                                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                  fill
                                             />
                                        </motion.div>
                                   ))}
                              </AnimatePresence>
                         </div>
                    </div>
               </div>
          </div>
     )
}
