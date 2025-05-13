//  teammates.tsx

'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface TeamMember {
  name: string
  alt: string
  url: string
}

interface TeamMatesProps {
  teamMembers: TeamMember[]
}

export default function TeamMates({ teamMembers }: TeamMatesProps) {
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
    headingsRef.current.forEach((heading) => {
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
        imagesRef.current.forEach((image) => {
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
      imagesRef.current.forEach((image) => {
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
    <section className="flex flex-col items-center justify-center md:min-h-[50vh] h-fit w-full text-white gap-8 p-5 md:my-10">
      <style jsx global>{`
        .letter {
          position: relative;
          display: inline-block;
        }
      `}</style>
      <div className="flex w-full gap-4 flex-wrap justify-center max-w-4xl px-4" ref={profileImagesRef}>
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] cursor-pointer relative z-[1] hover:scale-125 transition-transform duration-200 ease-out"
            ref={(el) => void (imagesRef.current[index] = el)}
          >
            <Image
              src={`${member.url}?w=500&h=500&fit=crop&crop=faces`}
              alt={member.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-[3px]"
            />
          </div>
        ))}
      </div>

      <div className="relative h-[120px] md:h-[150px] w-full overflow-hidden [clip-path:inset(0_0_0_0)]">
        <div className="absolute w-full h-full flex items-center justify-center overflow-hidden" ref={(el) => void (namesRef.current[0] = el)}>
          <h1
            className="absolute w-full text-center font-barlow-condensed font-extrabold md:font-semibold text-4xl md:text-9xl uppercase dark:text-white text-black"
            ref={(el) => void (headingsRef.current[0] = el)}
          >
            THE BEATLES
          </h1>
        </div>
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="absolute w-full h-full flex items-center justify-center overflow-hidden"
            ref={(el) => void (namesRef.current[index + 1] = el)}
          >
            <h1
              className="absolute w-full text-center font-barlow-condensed font-extrabold md:font-semibold text-4xl md:text-9xl uppercase text-[#ff3333] translate-y-full"
              dangerouslySetInnerHTML={{ __html: member.name.replace(/\s/g, '&nbsp;') }}
              ref={(el) => void (headingsRef.current[index + 1] = el)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}









