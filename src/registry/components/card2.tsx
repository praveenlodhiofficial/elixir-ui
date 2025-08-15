'use client'

import { Icon } from '@/registry/ui/icon'
import Image from 'next/image'
import FeatureBox from '@/registry/ui/feature-box'
import Link from 'next/link'
import InfoBadge from '@/registry/ui/info-badge'
import { cn } from '@/registry/lib/utils'

export default function Card2({
     infoBadge,
     featureBox,
     imageUrl,
     description,
     title,
}: {
     infoBadge: any[]
     featureBox: any[]
     imageUrl: string
     description: string
     title: string
}) {
     return (
          <div
               className={cn(
                    'mx-3 min-h-[30rem] max-w-7xl overflow-hidden md:mx-5 lg:mx-7 xl:mx-auto'
               )}
               data-aos="fade-up"
          >
               <div className={cn('grid h-full w-full grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10')}>
                    {/* Left Side - Image */}
                    <div className={cn('h-full w-full')} data-aos="fade-right" data-aos-delay="100">
                         <div
                              className={cn(
                                   'relative h-full w-full flex-shrink-0'
                              )}
                         >
                              <Image
                                   src={imageUrl}
                                   alt={title}
                                   width={1000}
                                   height={1000}
                                   className={cn(
                                        'h-full w-full rounded-xl object-cover object-bottom-right shadow-xl md:rounded-xl lg:min-h-[30rem] lg:rounded-3xl'
                                   )}
                              />
                              <div
                                   className={cn(
                                        'absolute top-1.5 left-1.5 space-y-1 md:top-4 md:left-4 md:space-y-2'
                                   )}
                              >
                                   {infoBadge.map((tag, index) => (
                                        <InfoBadge
                                             key={index}
                                             title={tag.title}
                                             iconColor={tag.iconColor}
                                             iconName={tag.iconName}
                                        />
                                   ))}
                              </div>
                         </div>
                    </div>

                    {/* Right Side - Content */}
                    <div
                         className={cn('flex w-full flex-col items-start justify-around space-y-6')}
                         data-aos="fade-left"
                         data-aos-delay="300"
                    >
                         <div className={cn('flex flex-col gap-5')}>
                              <h2
                                   className={cn(
                                        'text-base font-bold uppercase md:text-2xl lg:text-3xl'
                                   )}
                              >
                                   {title}
                              </h2>
                              <p
                                   className={cn(
                                        'text-xs text-gray-600 md:text-base dark:text-gray-300'
                                   )}
                              >
                                   {description}
                              </p>

                              <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-2')}>
                                   {/* Feature Box */}
                                   {featureBox.map((service, index) => (
                                        <FeatureBox
                                             key={index}
                                             title={service.title}
                                             description={service.description}
                                             iconColor={service.iconColor}
                                        />
                                   ))}
                              </div>
                         </div>

                         {/* Request Custom Service Button */}
                         <Link
                              href="/"
                              className={cn(
                                   'group flex w-fit items-center justify-start gap-2 rounded-full bg-orange-500 px-4 py-2 font-medium text-white transition-colors hover:bg-orange-600'
                              )}
                         >
                              <p className={cn('text-xs md:text-base')}>Request Custom Service</p>
                              <Icon
                                   name="ArrowRight"
                                   className={cn(
                                        'h-3 w-3 transition-all duration-200 group-hover:translate-x-1 group-hover:rotate-[-45deg] md:h-4 md:w-4'
                                   )}
                              />
                         </Link>
                    </div>
               </div>
          </div>
     )
}
