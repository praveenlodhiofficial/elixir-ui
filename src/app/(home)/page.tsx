import Navbar from '@/components/home/Navbar'
import { Button } from '@/components/ui/button'
import LiquidFrame from '@/registry/default/liquid-frame/components/liquid-frame'
import VanillaTiltCard from '@/registry/default/card/components/vanilla-tilt-card'
import ShowcaseComponent from '@/registry/default/showcase/components/showcase'
import SideMenu from '@/registry/default/sidemenu/components/sidemenu'
import TeammatesSection from '@/registry/default/teammates/components/teammates-v2'
import { BsTwitterX } from "react-icons/bs";
import {
     ArrowRight,
     Sparkles,
     Zap,
     Palette,
     Code,
     Download,
     Star,
     Users,
     Github,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LinkedInIcon } from '@/registry/default/teammates/components/ui/icons'
import { FaLinkedin } from 'react-icons/fa'
import Footer from '@/components/home/Footer'

const Home = () => {
     const sampleTeammates = [
          {
               id: '1',
               name: 'Sarah Johnson',
               role: 'Frontend Developer',
               company: 'TechCorp',
               companyUrl: 'https://techcorp.com',
               image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
               socialLinks: {
                    twitter: 'https://twitter.com/sarahjohnson',
                    linkedin: 'https://linkedin.com/in/sarahjohnson',
               },
          },
          {
               id: '2',
               name: 'Michael Chen',
               role: 'UI/UX Designer',
               company: 'DesignStudio',
               companyUrl: 'https://designstudio.com',
               image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
               socialLinks: {
                    twitter: 'https://twitter.com/michaelchen',
                    linkedin: 'https://linkedin.com/in/michaelchen',
               },
          },
          {
               id: '3',
               name: 'Emily Rodriguez',
               role: 'Product Manager',
               company: 'InnovateLab',
               companyUrl: 'https://innovatelab.com',
               image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
               socialLinks: {
                    linkedin: 'https://linkedin.com/in/emilyrodriguez',
               },
          },
     ]

     return (
          <>
               {/* Announcement Banner */}
               <div className="fixed top-0 z-50 h-fit w-full bg-gradient-to-r from-lime-400 to-emerald-400">
                    <div className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-black">
                         <Sparkles className="h-4 w-4" />
                         Access an ever-growing collection of premium, meticulously crafted
                         components
                         <Sparkles className="h-4 w-4" />
                    </div>
               </div>

               {/* Background Pattern */}
               <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-black dark:to-slate-950">
                    <div className="absolute inset-0 bg-[url('/home/home-bg-3.svg')] bg-cover bg-center opacity-20"></div>
               </div>

               <div className="min-h-screen">
                    {/* Navigation */}
                    <Navbar />

                    {/* Hero Section */}
                    <section className="relative px-4 pt-32 pb-20 text-center">
                         <div className="mx-auto max-w-4xl">
                              <div className="mb-8 flex items-center justify-center gap-2">
                                   <div className="flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-800 dark:bg-lime-900/20 dark:text-lime-300">
                                        <Zap className="h-4 w-4" />
                                        Now with 5+ Components
                                   </div>
                              </div>

                              <h1 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl dark:text-slate-100">
                                   Beautiful by Default
                                   <span className="block text-lime-600 dark:text-lime-400">
                                        Customizable by Design
                                   </span>
                              </h1>

                              <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                                   Copy-paste beautiful, responsive components without worrying
                                   about styling or animations.
                                   <br />
                                   Build faster, launch sooner with our premium component library.
                              </p>

                              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                   <Button
                                        size="lg"
                                        className="cursor-pointer group bg-lime-600 hover:bg-lime-700 dark:bg-lime-500 dark:hover:bg-lime-600"
                                   >
                                        <Link href="/docs/components">Browse Components</Link>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:rotate-[-45deg]" />
                                   </Button>
                                   <Button size="lg" variant="outline" className="cursor-pointer group">
                                        <BsTwitterX className="mr-2 h-4 w-4" />
                                        Follow on X
                                   </Button>
                              </div>
                         </div>
                    </section>

                    {/* Features Section */}
                    <section className="px-4 py-20">
                         <div className="mx-auto max-w-6xl">
                              <div className="mb-16 text-center">
                                   <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-100">
                                        Why Choose Elixir UI?
                                   </h2>
                                   <p className="text-lg text-slate-600 dark:text-slate-400">
                                        Built for modern developers who demand excellence
                                   </p>
                              </div>

                              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                   <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-900 dark:bg-zinc-900">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-900/20">
                                             <Palette className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                                             Beautiful Design
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                             Meticulously crafted components with attention to
                                             detail and modern aesthetics.
                                        </p>
                                   </div>

                                   <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-900 dark:bg-zinc-900">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-900/20">
                                             <Code className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                                             TypeScript Ready
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                             Fully typed components with excellent developer
                                             experience and IntelliSense support.
                                        </p>
                                   </div>

                                   <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-900 dark:bg-zinc-900">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-900/20">
                                             <Download className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                                             Copy & Paste
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                             No complex setup required. Just copy the component code
                                             and start building.
                                        </p>
                                   </div>

                                   <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-900 dark:bg-zinc-900">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-900/20">
                                             <Zap className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                                             Performance Optimized
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                             Built with performance in mind, ensuring smooth
                                             animations and fast loading.
                                        </p>
                                   </div>

                                   <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-900 dark:bg-zinc-900">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-900/20">
                                             <Star className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                                             Premium Quality
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                             High-quality components that you can trust for
                                             production applications.
                                        </p>
                                   </div>

                                   <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-900 dark:bg-zinc-900">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-900/20">
                                             <Users className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                                             Community Driven
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                             Built by developers, for developers. Open source and
                                             community maintained.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </section>

                    {/* Stats Section */}
                    <section className="bg-transparent px-4 py-20">
                         <div className="mx-auto max-w-6xl">
                              <div className="grid gap-8 text-center md:grid-cols-3">
                                   <div>
                                        <div className="mb-2 text-4xl font-bold text-lime-600 dark:text-lime-400">
                                             5+
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400">
                                             Premium Components
                                        </div>
                                   </div>
                                   <div>
                                        <div className="mb-2 text-4xl font-bold text-lime-600 dark:text-lime-400">
                                             100%
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400">
                                             TypeScript Ready
                                        </div>
                                   </div>
                                   <div>
                                        <div className="mb-2 text-4xl font-bold text-lime-600 dark:text-lime-400">
                                             ∞
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400">
                                             Customizable
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>

                    {/* CTA Section */}
                    <section className="px-4 py-20">
                         <div className="mx-auto max-w-4xl text-center">
                              <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-100">
                                   Ready to Build Something Amazing?
                              </h2>
                              <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                                   Start building beautiful interfaces today with Elixir UI
                                   components.
                              </p>
                              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                   <Button
                                        size="lg"
                                        className="cursor-pointer group bg-lime-600 hover:bg-lime-700 dark:bg-lime-500 dark:hover:bg-lime-600"
                                   >
                                        <Link href="/docs">Get Started</Link>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:rotate-[-45deg]" />
                                   </Button>
                                   <Button size="lg" variant="outline" className="cursor-pointer group">
                                        <Link href="https://www.linkedin.com/in/praveenlodhiofficial/" target="_blank" className="flex items-center" >
                                             <FaLinkedin className="mr-2 h-5 w-5" />
                                             Connect on LinkedIn
                                        </Link>
                                   </Button>
                              </div>
                         </div>
                    </section>

                    {/* Footer */}
                    {/* <footer className="rounded-tl-4xl rounded-tr-4xl border-t border-slate-200 bg-white px-4 py-12 dark:border-slate-800 dark:bg-black">
                         <div className="mx-auto max-w-6xl">
                              <div className="grid gap-8 md:grid-cols-4">
                                   <div>
                                        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                             Elixir UI
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                             Beautiful, customizable components for modern web
                                             applications.
                                        </p>
                                   </div>
                                   <div>
                                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">
                                             Components
                                        </h4>
                                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                             <li>
                                                  <Link
                                                       href="/docs/components/liquid-frame"
                                                       className="hover:text-lime-600"
                                                  >
                                                       Liquid Frame
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link
                                                       href="/docs/components/vanilla-tilt-card"
                                                       className="hover:text-lime-600"
                                                  >
                                                       Tilt Card
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link
                                                       href="/docs/components/showcase"
                                                       className="hover:text-lime-600"
                                                  >
                                                       Showcase
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link
                                                       href="/docs/components/sidemenu"
                                                       className="hover:text-lime-600"
                                                  >
                                                       Side Menu
                                                  </Link>
                                             </li>
                                        </ul>
                                   </div>
                                   <div>
                                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">
                                             Resources
                                        </h4>
                                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                             <li>
                                                  <Link
                                                       href="/docs"
                                                       className="hover:text-lime-600"
                                                  >
                                                       Documentation
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link
                                                       href="/templates"
                                                       className="hover:text-lime-600"
                                                  >
                                                       Templates
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="/try" className="hover:text-lime-600">
                                                       Try Online
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link
                                                       href="/request-component"
                                                       className="hover:text-lime-600"
                                                  >
                                                       Request Component
                                                  </Link>
                                             </li>
                                        </ul>
                                   </div>
                                   <div>
                                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">
                                             Community
                                        </h4>
                                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                             <li>
                                                  <Link
                                                       href="https://github.com"
                                                       className="hover:text-lime-600"
                                                  >
                                                       GitHub
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link
                                                       href="https://twitter.com"
                                                       className="hover:text-lime-600"
                                                  >
                                                       Twitter
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link
                                                       href="/contact"
                                                       className="hover:text-lime-600"
                                                  >
                                                       Contact
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link
                                                       href="/about"
                                                       className="hover:text-lime-600"
                                                  >
                                                       About
                                                  </Link>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="mt-8 border-t border-slate-200 pt-8 text-center text-slate-600 dark:border-slate-800 dark:text-slate-400">
                                   <p>
                                        &copy; 2025 Elixir UI. Built with ❤️ for the developer
                                        community.
                                   </p>
                              </div>
                         </div>
                    </footer> */}

                    <Footer />
               </div>
          </>
     )
}

export default Home
