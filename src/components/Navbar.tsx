'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggleButton } from './ThemeToggleButton'
import { Icon } from '@/components/ui/icon'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { KBarSearchComponent } from './KBarSearch'

interface NavbarProps {
     className?: string
     pageName?: string
}

export default function Navbar({ className, pageName }: NavbarProps) {
     const [isOpen, setIsOpen] = useState(false)

     const handleLinkClick = () => {
          setIsOpen(false)
     }

     return (
          <nav className="w-[60rem] md:px-6 lg:w-6xl lg:px-2">
               <div className="flex items-center justify-between border-b border-gray-200 py-4 dark:border-zinc-800">
                    <div className="flex items-center gap-10">
                         <Link href="/" className="flex items-center justify-center gap-1">
                              <Image
                                   src="/logo/elixir-logo-light.png"
                                   alt="Elixir UI"
                                   width={40}
                                   height={40}
                                   className="h-8 w-8 invert-0 dark:invert-100"
                                   style={{ objectFit: 'contain' }}
                              />
                              <span className="text-3xl font-bold">Elixir UI</span>
                         </Link>

                         <div className="hidden items-center gap-5 md:flex md:font-semibold">
                              <Link href="/docs/components">Components</Link>
                              <Link href="/templates">Templates</Link>
                              <Link href="/about">About</Link>
                              <Link href="/contact">Contact</Link>
                         </div>
                    </div>

                    <div className="flex items-center gap-10">
                         {/* social handles */}
                         <div className="hidden items-center gap-5 md:font-semibold lg:flex">
                              <Link href="https://x.com/praveenlodhi99" target="_blank">
                                   Twitter
                              </Link>
                              <Link href="https://github.com/praveenlodhiofficial" target="_blank">
                                   Github
                              </Link>
                         </div>

                         {/* toggle theme */}
                         <div className="sm:block">
                              <ThemeToggleButton variant="circle-blur" start="top-right" />
                         </div>

                         {/* search component */}
                         <div className="hidden lg:block">
                              <KBarSearchComponent onClick={handleLinkClick} />
                         </div>

                         {/* Mobile Menu Button */}
                         <button
                              className="cursor-pointer md:hidden"
                              onClick={() => setIsOpen(!isOpen)}
                         >
                              {isOpen ? (
                                   <Icon name="BsTwitterX" className="z-20" />
                              ) : (
                                   <Icon name="Menu" className="z-20" />
                              )}
                         </button>

                         {/* Mobile Menu with Stretching Animation */}
                         <motion.div
                              initial={{ scaleY: 0, scaleX: 0.8, opacity: 0 }}
                              animate={isOpen ? { scaleY: 1, scaleX: 1, opacity: 1 } : {}}
                              exit={{ scaleY: 0, scaleX: 0.8, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className={`font-exo absolute top-5 right-3 left-3 z-50 flex w-[calc(100%-24px)] flex-col flex-wrap gap-1 rounded-md border bg-white px-5 py-10 text-center text-2xl text-black uppercase shadow-lg md:hidden dark:bg-black dark:text-white`}
                              style={{ transformOrigin: 'top right' }}
                         >
                              <button
                                   className="absolute top-0 right-0 cursor-pointer md:hidden"
                                   onClick={() => setIsOpen(!isOpen)}
                              >
                                   {isOpen ? (
                                        <Icon name="BsTwitterX" className="z-20 m-1 scale-110" />
                                   ) : (
                                        <Icon name="Menu" className="z-20" />
                                   )}
                              </button>

                              <Link
                                   href="/"
                                   onClick={handleLinkClick}
                                   className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                              >
                                   Home
                              </Link>
                              <Link
                                   href="/components"
                                   onClick={handleLinkClick}
                                   className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                              >
                                   Components
                              </Link>

                              <div className="mb-4 w-full px-8">
                                   <KBarSearchComponent
                                        onClick={handleLinkClick}
                                        className="w-full"
                                   />
                              </div>

                              <Link
                                   href="/templates"
                                   onClick={handleLinkClick}
                                   className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                              >
                                   Templates
                              </Link>
                              <Link
                                   href="/about"
                                   onClick={handleLinkClick}
                                   className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                              >
                                   About
                              </Link>
                              <Link
                                   href="/contact"
                                   onClick={handleLinkClick}
                                   className="mb-3 text-4xl font-extrabold md:mb-4 md:text-7xl md:font-bold"
                              >
                                   Contact
                              </Link>
                         </motion.div>
                    </div>
               </div>
          </nav>
     )
}
