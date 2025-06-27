import Navbar from '@/components/home/Navbar'
import { Button } from '@/components/ui/button'
import LiquidFrame from '@/registry/default/liquid-frame/components/liquid-frame'
import VanillaTiltCard from '@/registry/default/card/components/vanilla-tilt-card'
import ShowcaseComponent from '@/registry/default/showcase/components/showcase'
import SideMenu from '@/registry/default/sidemenu/components/sidemenu'
import TeammatesSection from '@/registry/default/teammates/components/teammates-v2'
import { Icon } from '@/components/ui/icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/home/Footer'
import AnnoncementBanner from '@/components/home/Banner'

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

const features = [
     {
          title: 'Beautiful Design',
          icon: 'Palette',
          description:
               'Meticulously crafted components with attention to detail and modern aesthetics.',
     },
     {
          title: 'TypeScript Ready',
          icon: 'TbBrandTypescript',
          description:
               'Fully typed components with excellent developer experience and IntelliSense support.',
     },
     {
          title: 'Copy & Paste',
          icon: 'Copy',
          description:
               'No complex setup required. Just copy the component code and start building.',
     },
     {
          title: 'Performance Optimized',
          icon: 'Zap',
          description:
               'Built with performance in mind, ensuring smooth animations and fast loading.',
     },
     {
          title: 'Premium Quality',
          icon: 'Star',
          description: 'High-quality components that you can trust for production applications.',
     },
     {
          title: 'Community Driven',
          icon: 'Users',
          description: 'Built by developers, for developers. Open source and community maintained.',
     },
]

const Home = () => {
     return (
          <>
               {/* Announcement Banner */}
               <AnnoncementBanner />

               {/* Background Pattern */}
               <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-slate-600 via-black/15 to-zinc-900 dark:from-slate-950 dark:via-black/60 dark:to-slate-950">
                    <div className="absolute inset-0 bg-[url('/home/home-bg-3.svg')] bg-cover bg-invert bg-center opacity-20"></div>
               </div>

               <div className="min-h-screen">
                    {/* Navigation */}
                    <Navbar />

                    {/* Hero Section */}
                    <section className="relative px-4 pt-32 pb-20 text-center">
                         <div className="mx-auto max-w-4xl">
                              <div className="mb-8 flex items-center justify-center gap-2">
                                   <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-lime-800 dark:bg-lime-900/20 dark:text-lime-300">
                                        <Icon name="Zap" className="h-4 w-4" />
                                        Now with 7+ Components
                                   </div>
                              </div>

                              <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-100">
                                   Beautiful by Default
                                   <span className="block text-lime-500 dark:text-lime-400">
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
                                        className="group cursor-pointer bg-lime-500 hover:bg-lime-700 dark:bg-lime-500 dark:hover:bg-lime-500"
                                   >
                                        <Link href="/docs/components">Browse Components</Link>
                                        <Icon
                                             name="ArrowRight"
                                             className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:rotate-[-45deg]"
                                        />
                                   </Button>
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        className="group cursor-pointer"
                                   >
                                        <Link
                                             href="https://x.com/praveenlodhi99"
                                             target="_blank"
                                             className="flex items-center"
                                        >
                                             <Icon name="BsTwitterX" className="mr-2 h-4 w-4" />
                                             Follow on X
                                        </Link>
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
                                   {features.map((feature, index) => (
                                        <div
                                             key={index}
                                             className="rounded-xl shadow-md backdrop-blur-xs p-6 transition-all hover:shadow-md dark:bg-white/5"
                                        >
                                             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-900/20">
                                                  <Icon
                                                       name={feature.icon as string}
                                                       className="h-6 w-6 dark:text-lime-400"
                                                  />
                                             </div>
                                             <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                                                  {feature.title}
                                             </h3>
                                             <p className="text-slate-600 dark:text-slate-400">
                                                  {feature.description}
                                             </p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </section>

                    {/* Stats Section */}
                    <section className="bg-transparent px-4 py-20">
                         <div className="mx-auto max-w-6xl">
                              <div className="grid gap-8 text-center md:grid-cols-3">
                                   <div>
                                        <div className="mb-2 text-4xl font-bold text-lime-500 dark:text-lime-400">
                                             7+
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400">
                                             Premium Components
                                        </div>
                                   </div>
                                   <div>
                                        <div className="mb-2 text-4xl font-bold text-lime-500 dark:text-lime-400">
                                             100%
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400">
                                             TypeScript Ready
                                        </div>
                                   </div>
                                   <div>
                                        <div className="mb-2 text-4xl font-bold text-lime-500 dark:text-lime-400">
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
                                        className="group cursor-pointer bg-lime-500 hover:bg-lime-700 dark:bg-lime-500 dark:hover:bg-lime-500"
                                   >
                                        <Link href="/docs">Get Started</Link>
                                        <Icon
                                             name="ArrowRight"
                                             className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:rotate-[-45deg]"
                                        />
                                   </Button>
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        className="group cursor-pointer"
                                   >
                                        <Link
                                             href="https://www.linkedin.com/in/praveenlodhiofficial/"
                                             target="_blank"
                                             className="flex items-center"
                                        >
                                             <Icon name="FaLinkedin" className="mr-2 h-5 w-5" />
                                             Connect on LinkedIn
                                        </Link>
                                   </Button>
                              </div>
                         </div>
                    </section>

                    <Footer />
               </div>
          </>
     )
}

export default Home
