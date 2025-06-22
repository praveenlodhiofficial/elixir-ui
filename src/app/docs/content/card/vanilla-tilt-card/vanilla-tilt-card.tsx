import VanillaTiltCard from '@/registry/default/card/components/vanilla-tilt-card'
import Image from 'next/image'
import React from 'react'

export default function VanillaTiltCardDemo() {
    return (
            <VanillaTiltCard className='bg-gradient-to-b dark:hover:from-black dark:hover:to-gray-900 hover:from-gray-300 hover:to-black my-20 w-fit flex flex-col'>
                    <h1 className='text-white dark:text-black dark:bg-white bg-black font-semibold text-lg p-1 rounded-sm text-center'>Death Parade</h1>
                    <Image
                        src="/components/card/death-parade.jpg"
                        alt="Death Parade Wallpaper"
                        width={500}
                        height={500}
                        className='w-full h-full object-cover contrast-125 saturate-110 brightness-125 rounded-sm border'
                    />
            </VanillaTiltCard>
    )
}