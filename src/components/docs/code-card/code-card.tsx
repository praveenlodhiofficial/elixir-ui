'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import CodeHighlight from '@/components/docs/code-card/parts/code-highlight'

interface CodeCardProps {
     children?: React.ReactNode
     code?: string
     className?: string
}

const CodeCard = ({ children, code, className }: CodeCardProps) => {
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
               <TabsContent value="preview" className="mt-4 rounded-md border-2">
                    {children}
               </TabsContent>
               <TabsContent value="code" className="mt-4 rounded-md border-2">
                    <CodeHighlight code={code} inTab />
               </TabsContent>
          </Tabs>
     )
}

export default CodeCard
