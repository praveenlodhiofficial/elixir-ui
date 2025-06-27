import { Icon } from '@/components/ui/icon'
import Image from 'next/image'
import Link from 'next/link'

interface TemplateCardProps {
     name: string
     price: string
     description: string
     templatePageURL: string
     techStack: string[]
     techStackIcons: string[]
     image: {
          image: string
          alt: string
     }[]
}

export default function TemplateCard({
     name,
     price,
     description,
     templatePageURL,
     techStack,
     techStackIcons,
     image,
}: TemplateCardProps) {
     return (
          <>
               <div className="grid h-fit grid-cols-[1.2fr_1.5fr_1.5fr] gap-10 overflow-hidden border-b-2 bg-transparent pb-15">
                    <div className="flex h-full w-full flex-col items-start justify-between gap-5 rounded-lg">
                         <div className="w-full space-y-1">
                              {/* Template Name */}
                              <h1 className="font-roboto text-2xl font-bold uppercase">{name}</h1>
                              {/* Template Price */}
                              <p className="font-roboto flex items-center justify-start gap-1">
                                   <span className="font-semibold">{price}</span>
                                   or included with
                                   <span className="ml-0.5 flex items-center justify-center rounded-sm bg-lime-300/90 px-2 py-1 text-xs leading-4 font-semibold text-black uppercase dark:bg-lime-400">
                                        premium
                                   </span>
                              </p>
                         </div>

                         {/* Template Description */}
                         <p className="line-clamp-4 text-sm text-gray-600 dark:text-gray-300">
                              {description}
                         </p>

                         {/* Template Tech Stack Used */}
                         <div className="flex gap-2">
                              {techStackIcons.map((iconName, index) => (
                                   <Icon key={index} name={iconName} className="h-5 w-5" />
                              ))}
                         </div>

                         <Link
                              href={templatePageURL}
                              className="group mt-1 flex w-1/2 cursor-pointer items-center justify-center rounded-full bg-lime-400/90 py-2.5 text-center font-semibold text-black transition-all duration-300 hover:saturate-120 dark:bg-lime-400"
                         >
                              View Template
                              <Icon
                                   name="ArrowRight"
                                   className="ml-2 h-4 w-4 text-black transition-transform group-hover:translate-x-1 group-hover:rotate-[-45deg]"
                              />
                         </Link>
                    </div>

                    {image.map((image, index) => (
                         <Link
                              key={index}
                              href={templatePageURL}
                              className="h-full w-full overflow-hidden rounded-lg border bg-black/5 dark:bg-white/5"
                         >
                              <Image
                                   src={image.image}
                                   alt={image.alt}
                                   width={500}
                                   height={500}
                                   className="h-full w-full object-cover object-top"
                              />
                         </Link>
                    ))}
               </div>
               {/* <Separator  /> */}
          </>
     )
}
