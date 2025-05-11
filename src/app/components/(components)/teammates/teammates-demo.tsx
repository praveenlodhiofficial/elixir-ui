'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './teammates-style.css'

export default function TeamHover() {
  const profileImagesRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])
  const namesRef = useRef<(HTMLDivElement | null)[]>([])
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([])

  const teamMembers = [
    { name: 'KENNY', alt: 'Kenny', url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' },
    { name: 'PEYTON', alt: 'Peyton', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
    { name: 'SPENCER', alt: 'Spencer', url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
    { name: 'TAYLOR', alt: 'Taylor', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
    { name: 'JORDAN', alt: 'Jordan', url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
    { name: 'MORGAN', alt: 'Morgan', url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' },
    { name: 'ALEX', alt: 'Alex', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { name: 'CASEY', alt: 'Casey', url: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f' },
    { name: 'ROBIN', alt: 'Robin', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91' },
  ]

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

    // Set initial state for default text letters
    const defaultHeading = headingsRef.current[0]
    if (defaultHeading) {
      const defaultLetters = defaultHeading.querySelectorAll('.letter')
      gsap.set(defaultLetters, { y: '100%' })
    }

    // Only apply hover effects on desktop
    if (window.innerWidth >= 900) {
      imagesRef.current.forEach((image, index) => {
        if (!image) return
        const nameElement = namesRef.current[index + 1]
        if (!nameElement) return
        const letters = nameElement.querySelectorAll('.letter')

        // Mouse enter animation
        image.addEventListener('mouseenter', () => {
          gsap.to(image, {
            width: 140,
            height: 140,
            duration: 0.5,
            ease: 'power4.out',
          })
          gsap.to(letters, {
            y: '-100%',
            duration: 0.75,
            stagger: { amount: 0.25, from: 'center' },
            ease: 'power4.out',
          })
        })

        // Mouse leave animation
        image.addEventListener('mouseleave', () => {
          gsap.to(image, {
            width: 100,
            height: 100,
            duration: 0.5,
            ease: 'power4.out',
          })
          gsap.to(letters, {
            y: '0%',
            duration: 0.75,
            stagger: { amount: 0.25, from: 'center' },
            ease: 'power4.out',
          })
        })
      })

      // Container hover for default text
      if (profileImagesRef.current && defaultHeading) {
        const defaultLetters = defaultHeading.querySelectorAll('.letter')
        profileImagesRef.current.addEventListener('mouseenter', () => {
          gsap.to(defaultLetters, {
            y: '0%',
            duration: 0.75,
            stagger: { amount: 0.25, from: 'center' },
            ease: 'power4.out',
          })
        })
        profileImagesRef.current.addEventListener('mouseleave', () => {
          gsap.to(defaultLetters, {
            y: '100%',
            duration: 0.75,
            stagger: { amount: 0.25, from: 'center' },
            ease: 'power4.out',
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
    <section className="flex flex-col items-center justify-center w-screen h-screen bg-[#111111] text-white gap-[50px] md:flex-col">
      <div className="flex w-max gap-[5px] flex-wrap justify-center max-w-[80%] md:flex-nowrap" ref={profileImagesRef}>
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] p-0 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] relative z-[1]"
            ref={(el) => void (imagesRef.current[index] = el)}
          >
            <Image
              src={`${member.url}?w=70&h=70&fit=crop&crop=faces`}
              alt={member.alt}
              width={70}
              height={70}
              className="w-full h-full object-cover rounded-[3px]"
            />
          </div>
        ))}
      </div>

      <div className="relative h-[150px] w-full overflow-hidden [clip-path:inset(0_0_0_0)]">
        <div className="absolute w-full h-full flex items-center justify-center overflow-hidden" ref={(el) => void (namesRef.current[0] = el)}>
          <h1
            className="absolute w-full text-center font-['Barlow_Condensed'] text-[70px] md:text-[150px] uppercase tracking-[-5px] text-white -translate-y-full"
            ref={(el) => void (headingsRef.current[0] = el)}
          >
            DIRECTORS
          </h1>
        </div>
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="absolute w-full h-full flex items-center justify-center overflow-hidden"
            ref={(el) => void (namesRef.current[index + 1] = el)}
          >
            <h1
              className="absolute w-full text-center font-['Barlow_Condensed'] text-[70px] md:text-[150px] uppercase tracking-[-5px] text-[#ff3333] translate-y-full"
              ref={(el) => void (headingsRef.current[index + 1] = el)}
            >
              {member.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  )
}