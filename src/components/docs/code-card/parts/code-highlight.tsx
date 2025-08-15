'use client'
import React from 'react'
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-light.css'
import { CopyButton } from '@/components/ui/copy'
import { cn } from '@/lib/utils'

interface CodeHighlightProps {
     code?: string
     className?: string
     inTab?: boolean
     lang?: 'tsx' | 'shell'
}

const CodeHighlight = ({ code, inTab = false, lang = 'tsx', className }: CodeHighlightProps) => {
     if (!code) return null

     return (
          <div
               className={cn(
                    'font-exo bg-background no-scrollbar code-highlight-container relative mx-2 my-5 rounded-md text-zinc-800 md:mx-5 dark:text-zinc-200',
                    className
               )}
          >
               <CopyButton
                    value={code}
                    className={cn(
                         'absolute top-4 right-4',
                         (inTab || lang === 'shell') && 'top-1 right-1'
                    )}
                    aria-label="Copy code"
               />
               <div
                    className={cn(
                         'max-h-[400px] min-h-[40px] overflow-y-auto rounded-md contrast-150 saturate-200'
                    )}
               >
                    <Highlight className={cn('font-exo text-xs/6 whitespace-pre', lang)}>
                         {code}
                    </Highlight>
               </div>

               <div
                    className={cn(
                         'absolute bottom-2 flex w-full items-center justify-center transition-opacity duration-300',
                         inTab && 'bottom-0'
                    )}
               ></div>
          </div>
     )
}

export default CodeHighlight
