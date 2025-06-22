import Navbar from '@/components/home/Navbar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
     return (
          <>
               <div className="flex min-h-[300vh] flex-col items-center  space-y-4 border bg-cover bg-center py-40">
                    <Navbar />
                    <h1 className="text-8xl font-bold">Elixir UI</h1>
                    <p className="text-muted-foreground text-base">
                         A collection of re-usable components that you can copy and paste into your
                         projects.
                    </p>
               </div>
          </>
     )
}

export default Home
