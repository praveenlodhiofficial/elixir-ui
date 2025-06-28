'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { LinkedInIcon, TwitterIcon } from './ui/icons';

interface TeamMember {
  id: string;
  name: string;
  nameSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  descriptionSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  role: string;
  company: string;
  companyUrl: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}

const nameSizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  }

const descriptionSizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  }

interface TeamMatesPropsv2 {
  teamMembers: TeamMember[];
  nameSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  descriptionSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export default function TeamMatesv2({ 
  teamMembers, 
  nameSize = 'xl',
  descriptionSize = 'sm'
}: TeamMatesPropsv2) {
  const [hoveredTeammate, setHoveredTeammate] = useState<string | null>(null);
  const [openedIndex, setOpenedIndex] = useState(0);
  const [lastHoveredIndex, setLastHoveredIndex] = useState<number | null>(null);

  // Sequentially open teammates every 1s, only one open at a time, and sync image
  useEffect(() => {
    if (hoveredTeammate !== null) return;
    const timer = setTimeout(() => {
      setOpenedIndex((prev) => (prev + 1) % teamMembers.length);
    }, 1500);
    return () => clearTimeout(timer);
  }, [openedIndex, teamMembers.length, hoveredTeammate]);

  // Determine current teammate for image (sync with openedIndex if not hovered)
  const currentTeammate = hoveredTeammate
    ? teamMembers.find(t => t.id === hoveredTeammate)
    : (openedIndex >= 0 ? teamMembers[openedIndex] : teamMembers[0]);

  return (
    <div className="tracking-wide border-1 border-zinc-300 dark:border-zinc-700 bg-transparent">
      <div className="flex items-stretch divide-zinc-500 dark:divide-zinc-700">
        {/* Left side - Team list */}
        <div className="divide-y-1 divide-zinc-300 dark:divide-zinc-700 flex-1">
          {teamMembers.map((teammate, idx) => {
            const isOpen = (hoveredTeammate === teammate.id) || (hoveredTeammate === null && idx === openedIndex);
            return (
              <motion.div
                key={teammate.id}
                className="overflow-hidden relative hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer"
                onMouseEnter={() => {
                  setHoveredTeammate(teammate.id);
                  setLastHoveredIndex(idx);
                }}
                onMouseLeave={() => {
                  setHoveredTeammate(null);
                  if (lastHoveredIndex !== null) {
                    setOpenedIndex((lastHoveredIndex + 1) % teamMembers.length);
                    setLastHoveredIndex(null);
                  }
                }}
              >
                <motion.div 
                  className="pl-8 flex flex-col justify-center pr-[110px] min-w-xl"
                  animate={{ 
                    height: isOpen ? '110px' : '90px', 
                    padding: isOpen ? '0px 30px' : '10px 32px'
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* Name */}
                  <motion.div
                    className={`${nameSizeMap[teammate.nameSize || nameSize]} font-semibold uppercase truncate text-zinc-800 dark:text-zinc-100`}
                    initial={{ opacity: 0.5, y: 13 }}
                    style={{ fontWeight: isOpen ? 'bold' : '' }}
                    animate={{
                      opacity: isOpen ? 1 : 0.5,
                      y: isOpen ? -2 : 13,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {teammate.name}
                  </motion.div>

                  {/* Role and Company */}
                  <motion.div
                    className={`${descriptionSizeMap[teammate.descriptionSize || descriptionSize]} uppercase leading-none pt-2 text-zinc-600 dark:text-zinc-400`}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {teammate.role}, {' '}
                    <Link 
                      href={teammate.companyUrl}
                      rel="noopener"
                      target="_blank"
                      className="whitespace-nowrap uppercase no-underline hover:underline text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      {teammate.company}
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  className="absolute right-8 top-1/2 -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <nav className="flex md:gap-2">
                    {teammate.socialLinks?.twitter && (
                      <Link
                        href={teammate.socialLinks.twitter}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="whitespace-nowrap duration-200 underline underline-offset-2 decoration-zinc-400 dark:decoration-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 hover:opacity-100 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md p-2.5 transition-colors"
                      >
                        <TwitterIcon />
                      </Link>
                    )}
                    {teammate.socialLinks?.linkedin && (
                      <Link
                        href={teammate.socialLinks.linkedin}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="whitespace-nowrap duration-200 underline underline-offset-2 decoration-zinc-400 dark:decoration-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 hover:opacity-100 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md p-2.5 transition-colors"
                      >
                        <LinkedInIcon />
                      </Link>
                    )}
                  </nav>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Right side - Profile images */}
        <div className="relative w-[400px] xl:w-[500px] flex-shrink-0 bg-zinc-100 dark:bg-zinc-800">
          <AnimatePresence>
            {teamMembers.map((teammate) => (
              <motion.div
                key={teammate.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentTeammate?.id === teammate.id ? 1 : 0 
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut"
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
  );
}