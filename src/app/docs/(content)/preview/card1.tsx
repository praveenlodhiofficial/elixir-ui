import Card1 from '@/registry/components/card1'
import Image from 'next/image'
import React from 'react'

export function Card1Preview() {
     return (
          <div className="flex justify-center items-center py-10">
               <Card1 className="flex w-fit flex-col bg-gradient-to-b hover:from-gray-300 hover:to-black dark:hover:from-black dark:hover:to-gray-900">
                    <h1 className="rounded-sm bg-black p-1 text-center text-lg font-semibold text-white dark:bg-white dark:text-black">
                         Death Parade
                    </h1>
                    <Image
                         src="/components/card/death-parade.jpg"
                         alt="Death Parade Wallpaper"
                         width={500}
                         height={500}
                         className="h-full w-full rounded-sm border object-cover brightness-125 contrast-125 saturate-110"
                    />
               </Card1>
          </div>
     )
}

