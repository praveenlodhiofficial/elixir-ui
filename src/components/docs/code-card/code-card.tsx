'use client'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import CodeHighlight from '@/components/docs/code-card/parts/code-highlight'
import { Icon } from '@/registry/ui/icon'
import { ThemeToggleButton } from '@/components/ThemeToggleButton'

interface CodeCardProps {
     children?: React.ReactNode
     code?: string
     className?: string
}

const CodeCard = ({ children, code, className }: CodeCardProps) => {
     const [isFullscreen, setIsFullscreen] = useState(false)
     if (!code) {
          return <div className={cn(className)}>{children}</div>
     }

     return (
          <Tabs defaultValue="preview" className={cn(className)}>
               <TabsList className="border bg-transparent">
                    <TabsTrigger
                         value="preview"
                         className="cursor-pointer border-none bg-transparent text-sm/6 font-semibold dark:bg-transparent"
                    >
                         Preview
                    </TabsTrigger>
                    <TabsTrigger
                         value="code"
                         className="cursor-pointer border-none bg-transparent text-sm/6 font-semibold dark:bg-transparent"
                    >
                         Code
                    </TabsTrigger>
               </TabsList>
               <TabsContent
                    value="preview"
                    className={cn(
                         'relative mt-4 overflow-hidden rounded-lg border-2',
                         isFullscreen &&
                              'fixed inset-0 z-50 m-0 flex items-center justify-center rounded-none border-none bg-white text-black dark:bg-black dark:text-white'
                    )}
               >
                    {isFullscreen ? (
                         <div className="h-full w-full">
                              <ThemeToggleButton
                                   className="absolute top-0 right-20 m-10 scale-200 cursor-pointer dark:text-white text-black"
                                   variant="circle-blur"
                                   start="top-right"
                              />
                              <Icon
                                   name="MdZoomInMap"
                                   className="absolute top-0 right-0 m-10 size-10 cursor-pointer dark:text-white text-black"
                                   onClick={() => setIsFullscreen(false)}
                              />
                              <div className="flex h-full w-full items-center justify-center">
                                   {children}
                              </div>
                         </div>
                    ) : (
                         <Icon
                              name="MdOutlineZoomOutMap"
                              className="absolute top-0 right-0 m-2 size-8 cursor-pointer dark:text-white text-black z-50"
                              onClick={() => setIsFullscreen(true)}
                         />
                    )}
                    {!isFullscreen && <div>{children}</div>}
               </TabsContent>
               <TabsContent value="code" className="mt-4 rounded-md border-2">
                    <CodeHighlight code={code} inTab />
               </TabsContent>
          </Tabs>
     )
}

export default CodeCard
