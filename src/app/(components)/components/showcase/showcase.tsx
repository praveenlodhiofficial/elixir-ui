//  page.tsx

"use client"

import React from 'react'
import ShowcaseComponent from './showcase-component'

const Showcase = () => {
  return (
    <div className='w-full h-[60vh]'>
      <ShowcaseComponent
        imageSrc="/components/showcase/showcase-image.png"
        text="Anime"
        fontSize="55px"
        fontFamily="exo"
        textColor="#FFFFD4"
      />
    </div>
  )
}

export default Showcase;