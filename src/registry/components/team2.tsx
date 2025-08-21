'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface TeamMember {
     name: string
     url: string
}

interface Team2Props {
     teamMembers: TeamMember[]
     defaultText?: string
}

export function Team2({ teamMembers, defaultText = 'Enter Team Name' }: Team2Props) {
     const profileImagesRef = useRef<HTMLDivElement>(null)
     const imagesRef = useRef<(HTMLDivElement | null)[]>([])
     const namesRef = useRef<(HTMLDivElement | null)[]>([])
     const headingsRef = useRef<(HTMLHeadingElement | null)[]>([])

     useEffect(() => {
          // Manual text splitting function
          function splitTextManually(element: HTMLElement) {
               const text = element.textContent || ''
               element.innerHTML = ''
               for (let i = 0; i < text.length; i++) {
                    const span = document.createElement('span')
                    span.classList.add('letter')
                    span.textContent = text[i]
                    element.appendChild(span)
               }
               return element.querySelectorAll('.letter')
          }

          // Split text into characters
          headingsRef.current.forEach(heading => {
               if (heading) splitTextManually(heading)
          })

          // Make "TEAMMATES" visible by default
          const defaultHeading = headingsRef.current[0]
          if (defaultHeading) {
               const defaultLetters = defaultHeading.querySelectorAll('.letter')
               gsap.set(defaultLetters, { y: '0%' }) // Ensure text is visible
          }

          // Only apply hover effects on desktop
          if (window.innerWidth >= 900) {
               imagesRef.current.forEach((image, index) => {
                    if (!image) return
                    const nameElement = namesRef.current[index + 1]
                    if (!nameElement) return
                    const letters = nameElement.querySelectorAll('.letter')

                    // Mouse enter animation - for the team member name text
                    image.addEventListener('mouseenter', () => {
                         gsap.to(letters, {
                              y: '-100%',
                              duration: 0.75,
                              stagger: { amount: 0.25, from: 'center' },
                              ease: 'power4.out',
                         })
                    })

                    // Mouse leave animation - for the team member name text
                    image.addEventListener('mouseleave', () => {
                         gsap.to(letters, {
                              y: '0%',
                              duration: 0.75,
                              stagger: { amount: 0.25, from: 'center' },
                              ease: 'power4.out',
                         })
                    })
               })

               // Hide default "TEAMMATES" text when hovering over any team member image
               if (profileImagesRef.current && defaultHeading) {
                    const defaultLetters = defaultHeading.querySelectorAll('.letter')
                    imagesRef.current.forEach(image => {
                         if (!image) return

                         image.addEventListener('mouseenter', () => {
                              gsap.to(defaultLetters, {
                                   y: '100%',
                                   duration: 0.75,
                                   stagger: { amount: 0.25, from: 'center' },
                                   ease: 'power4.out',
                              })
                         })

                         image.addEventListener('mouseleave', () => {
                              gsap.to(defaultLetters, {
                                   y: '0%',
                                   duration: 0.75,
                                   stagger: { amount: 0.25, from: 'center' },
                                   ease: 'power4.out',
                              })
                         })
                    })
               }
          }

          // Cleanup event listeners
          return () => {
               imagesRef.current.forEach(image => {
                    if (image) {
                         image.replaceWith(image.cloneNode(true))
                    }
               })
               if (profileImagesRef.current) {
                    profileImagesRef.current.replaceWith(profileImagesRef.current.cloneNode(true))
               }
          }
     }, [])

     return (
          <section className="flex h-fit w-full min-w-4xl flex-col items-center justify-center gap-8 p-5 text-white">
               <style jsx global>{`
                    .letter {
                         position: relative;
                         display: inline-block;
                    }
               `}</style>
               <div
                    className="flex w-full max-w-4xl flex-wrap justify-center gap-4 px-4"
                    ref={profileImagesRef}
               >
                    {teamMembers.map((member, index) => (
                         <div
                              key={member.name}
                              className="relative z-[1] h-[70px] w-[70px] cursor-pointer transition-transform duration-200 ease-out hover:scale-125 md:h-[100px] md:w-[100px]"
                              ref={el => void (imagesRef.current[index] = el)}
                         >
                              <Image
                                   src={`${member.url}?w=500&h=500&fit=crop&crop=faces`}
                                   alt={`${member.name} Image`}
                                   width={500}
                                   height={500}
                                   className="h-full w-full rounded-[3px] object-cover"
                              />
                         </div>
                    ))}
               </div>

               <div className="relative h-[120px] w-full overflow-hidden [clip-path:inset(0_0_0_0)] md:h-[150px]">
                    <div
                         className="absolute flex h-full w-full items-center justify-center overflow-hidden"
                         ref={el => void (namesRef.current[0] = el)}
                    >
                         <h1
                              className="font-barlow-condensed absolute w-full text-center text-4xl font-extrabold text-black uppercase md:text-[110px] md:font-semibold dark:text-white"
                              ref={el => void (headingsRef.current[0] = el)}
                         >
                              {defaultText?.split(' ').map((word, index) => (
                                   <span key={index}>{word}&nbsp;</span>
                              ))}
                         </h1>
                    </div>
                    {teamMembers.map((member, index) => (
                         <div
                              key={member.name}
                              className="absolute flex h-full w-full items-center justify-center overflow-hidden"
                              ref={el => void (namesRef.current[index + 1] = el)}
                         >
                              <h1
                                   className="font-barlow-condensed absolute w-full translate-y-full text-center text-4xl font-extrabold text-[#ff3333] uppercase md:text-[110px] md:font-semibold"
                                   dangerouslySetInnerHTML={{
                                        __html: member.name.replace(/\s/g, '&nbsp;'),
                                   }}
                                   ref={el => void (headingsRef.current[index + 1] = el)}
                              />
                         </div>
                    ))}
               </div>
          </section>
     )
}
