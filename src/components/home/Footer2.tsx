import React from 'react'
import { Icon } from '@/components/ui/icon'
import Link from 'next/link'

interface LinkItem {
     link: string
     label: string
}

// Data arrays for mapping
const servicesLinks: { link: string; label: string }[] = [
     { link: '/offering?category=Passenger%20Transport', label: 'Transport Services' },
     { link: '/offering?category=Venue%20Hire', label: 'Venue Hire' },
     { link: '/offering?category=Tutor%20Hire', label: 'Tutor Hire' },
     { link: '/offering?category=Artist%20Hire', label: 'Artist Hire' },
     { link: '/offering?category=Tool%20Hire', label: 'Tool Hire' },
     { link: '/offering?category=Automotive%20Hire', label: 'Car Hire' },
]

const resourcesLinks: LinkItem[] = [
     { link: '/guides', label: 'Service Guides' },
     { link: '/how-it-works', label: 'How it Works' },
     { link: '/blog', label: 'Blog' },
     { link: '/safety-tips', label: 'Safety Tips' },
]

const trendingLinks: LinkItem[] = [
     { link: '/offering?category=Motorhome%20Hire', label: 'Motorhome Hire' },
     { link: '/offering?category=Photographers', label: 'Photographer Hire' },
     { link: '/offering?category=Bouncy%20Castle%20Hire', label: 'Bouncy Castle Hire' },
     { link: '/offering?category=Musician%20Hire', label: 'Musician Hire' },
]

const supportLinks: LinkItem[] = [
     { link: '/', label: 'Contact Us' },
     { link: '#', label: 'Partner with us' },
     { link: '#', label: 'FAQs' },
     { link: '#', label: 'Request Custom Package' },
]

const legalLinks: LinkItem[] = [
     { link: '/privacy-policy', label: 'Privacy Policy' },
     { link: '/terms-conditions', label: 'Terms & Conditions' },
     { link: '/sitemap', label: 'Sitemap' },
     { link: '/cookies-policy', label: 'Cookies Policy' },
]

const contactLinks: LinkItem[] = [
     { link: '#', label: '96, Greenside, Slough, UK' },
     { link: 'maillink:info@hireanything.com', label: 'info@hireanything.com' },
     { link: 'tel:+441234567890', label: '+44 1234 567890' },
     { link: '#', label: 'Mon-Fri: 9am-6pm' },
]

export default function Footer2(): React.JSX.Element {
     return (
          <div className="smooth-scroll mx-auto flex h-fit w-[100rem]  flex-col justify-between space-y-20 overflow-hidden rounded-4xl bg-black px-16 pt-20 pb-10 text-sm text-gray-200">
               {/* Top Section */}
               <div className="grid grid-cols-[1fr_1fr_1.3fr_3fr] gap-10 tracking-wide">
                    {/* Navigation*/}
                    <div className="flex h-full flex-col space-y-5">
                         <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-wide uppercase lg:text-lg">
                              <Icon name="FaServicestack" className="h-5 w-5 text-lime-400/90" />
                              Our services
                         </h1>
                         <div className="flex flex-col space-y-2 text-sm">
                              {servicesLinks.map(link => (
                                   <Link
                                        key={link.label}
                                        href={link.link}
                                        className="flex items-center justify-start gap-2 transition-all duration-200 hover:ml-2"
                                   >
                                        <Icon name="ArrowRight" className="h-4 w-4" />
                                        {link.label}
                                   </Link>
                              ))}
                         </div>
                    </div>

                    {/* Resources */}
                    <div className="flex h-full flex-col space-y-5">
                         <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-wide uppercase lg:text-lg">
                              <Icon name="BookMarked" className="h-5 w-5 text-lime-400/90" />
                              Resources
                         </h1>
                         <div className="flex flex-col space-y-2 text-sm">
                              {resourcesLinks.map(link => (
                                   <Link
                                        key={link.label}
                                        href={link.link}
                                        className="flex items-center justify-start gap-2 transition-all duration-200 hover:ml-2"
                                   >
                                        <Icon name="ArrowRight" className="h-4 w-4" />
                                        {link.label}
                                   </Link>
                              ))}
                         </div>

                         <Link
                              href="/services"
                              className="group mt-5 flex cursor-pointer items-center justify-start gap-2 text-sm text-gray-600"
                         >
                              <span className="transition-all duration-200 group-hover:text-lime-400/90">
                                   View All Resources
                              </span>
                              <Icon
                                   name="ArrowRight"
                                   className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1 group-hover:rotate-[-45deg] group-hover:text-lime-400/90"
                              />
                         </Link>
                    </div>

                    {/* Trending Services */}
                    <div className="flex h-full flex-col space-y-5">
                         <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-wide uppercase lg:text-lg">
                              <Icon name="TrendingUp" className="h-5 w-5 text-lime-400/90" />
                              Trending Services
                         </h1>
                         <div className="flex flex-col space-y-2 text-sm">
                              {trendingLinks.map(link => (
                                   <Link
                                        key={link.label}
                                        href={link.link}
                                        className="flex items-center justify-start gap-2 transition-all duration-200 hover:ml-2"
                                   >
                                        <Icon name="ArrowRight" className="h-4 w-4" />
                                        {link.label}
                                   </Link>
                              ))}
                         </div>
                         <Link
                              href="/trending"
                              className="group mt-5 flex cursor-pointer items-center justify-start gap-2 text-sm text-gray-600"
                         >
                              <span className="transition-all duration-200 group-hover:text-lime-400/90">
                                   View All Trending Services
                              </span>
                              <Icon
                                   name="ArrowRight"
                                   className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1 group-hover:rotate-[-45deg] group-hover:text-lime-400/90"
                              />
                         </Link>
                    </div>

                    {/* Work With Us */}
                    <div className="flex flex-col">
                         <div className="flex h-full flex-col space-y-3 text-center">
                              <h1 className="text-2xl leading-14 font-semibold uppercase lg:text-7xl">
                                   Work With Us
                              </h1>
                              <div className="mt-1 px-3 text-end text-base">
                                   <div className="space-y-1">
                                        <p className="flex items-center justify-end text-xs">
                                             <Icon name="Copyright" className="mr-1 size-3" />
                                             2025
                                             <Icon
                                                  name="Circle"
                                                  className="mx-2 size-1 rounded-full bg-white"
                                             />
                                             hireanything.com
                                             <Icon
                                                  name="Circle"
                                                  className="mx-2 size-1 rounded-full bg-white"
                                             />
                                             All rights reserved
                                        </p>
                                   </div>
                              </div>

                              <div className="flex w-3/5 justify-between gap-2 self-end">
                                   <Link
                                        href="https://www.facebook.com/profile.php?id=61565067325640"
                                        target="_blank"
                                        className="w-full"
                                   >
                                        <Icon
                                             name="FaFacebookF"
                                             className="h-13 w-full rounded-lg bg-white/12 p-3"
                                        />
                                   </Link>
                                   <Link
                                        href="https://www.instagram.com/hireanything2024"
                                        target="_blank"
                                        className="w-full"
                                   >
                                        <Icon
                                             name="FaInstagram"
                                             className="h-13 w-full rounded-lg bg-white/12 p-3"
                                        />
                                   </Link>{' '}
                                   <Link
                                        href="https://x.com/hireanything"
                                        target="_blank"
                                        className="w-full"
                                   >
                                        <Icon
                                             name="BsTwitterX"
                                             className="h-13 w-full rounded-lg bg-white/12 p-3"
                                        />
                                   </Link>{' '}
                                   <Link
                                        href="maillink:info@hireanything.com"
                                        target="_blank"
                                        className="w-full"
                                   >
                                        <Icon
                                             name="FaLinkedin"
                                             className="h-13 w-full rounded-lg bg-white/12 p-3"
                                        />
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Middle Section */}
               <div className="grid h-fit w-full grid-cols-[2fr_2.3fr_1.2fr_1.5fr] gap-5">
                    {/* Secure Payment Options */}
                    <div className="space-y-5">
                         <p className="flex items-center gap-2 text-lg font-semibold tracking-wide uppercase">
                              <Icon name="Shield" className="h-5 w-5 text-lime-400/90" />
                              Secure Payment Options
                         </p>
                         <div className="flex w-fit flex-col gap-2">
                              <div className="grid grid-cols-[1.5fr_1fr] gap-2 text-sm">
                                   <div className="flex w-full gap-2 rounded-md bg-white/12 px-3 py-2">
                                        <Icon name="CreditCard" className="h-5 w-5" />
                                        Credit/Debit Card
                                   </div>
                                   <div className="flex w-full gap-2 rounded-md bg-white/12 px-3 py-2">
                                        <Icon name="BiLogoPaypal" className="h-5 w-5" />
                                        Paypal
                                   </div>
                              </div>
                              <div className="flex w-full gap-2 rounded-md bg-white/12 px-3 py-2">
                                   <Icon name="Shield" className="h-5 w-5" />
                                   Secure Transactions
                              </div>
                         </div>
                    </div>

                    <div className="space-y-5">
                         <p className="flex items-center gap-2 text-lg font-semibold tracking-wide uppercase">
                              <Icon name="BiSupport" className="h-5 w-5 text-lime-400/90" />
                              Support
                         </p>
                         <div className="grid w-fit grid-cols-[1fr_1.5fr] gap-2 text-sm">
                              {supportLinks.map(link => (
                                   <Link
                                        key={link.label}
                                        href={link.link}
                                        className="flex w-full gap-2 rounded-md bg-white/12 px-3 py-2"
                                   >
                                        <Icon name="Package" className="h-5 w-5" />
                                        {link.label}
                                   </Link>
                              ))}
                         </div>
                    </div>

                    {/* Legal */}
                    <div className="flex h-full flex-col space-y-5">
                         <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-wide uppercase lg:text-lg">
                              <Icon name="Hammer" className="h-5 w-5 text-lime-400/90" />
                              Legal
                         </h1>
                         <div className="flex flex-col space-y-2 text-sm">
                              {legalLinks.map(link => (
                                   <Link
                                        key={link.label}
                                        href={link.link}
                                        className="flex items-center justify-start gap-2 transition-all duration-200 hover:ml-2"
                                   >
                                        <Icon name="ArrowRight" className="h-4 w-4" />
                                        {link.label}
                                   </Link>
                              ))}
                         </div>
                    </div>

                    {/* Contact Us */}
                    <div className="flex h-full flex-col space-y-5">
                         <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-wide uppercase lg:text-lg">
                              <Icon name="Phone" className="h-5 w-5 text-lime-400/90" />
                              Contact Us
                         </h1>
                         <div className="flex flex-col space-y-2 text-sm">
                              {contactLinks.map(link => (
                                   <Link
                                        key={link.label}
                                        href={link.link}
                                        className="flex items-center justify-start gap-2 transition-all duration-200 hover:ml-2"
                                   >
                                        <Icon name="ArrowRight" className="h-4 w-4" />
                                        {link.label}
                                   </Link>
                              ))}
                         </div>
                    </div>
               </div>

               {/* Bottom Section */}
               <div className="relative tracking-tight">
                    <h1
                         className="font-orbitron stroke-red-500 text-[12rem] leading-30 font-black tracking-wider uppercase"
                         style={{
                              color: 'transparent',
                              WebkitTextStroke: '10px #dbdbdb',
                         }}
                    >
                         Elixir UI
                    </h1>
               </div>
          </div>
     )
}
