'use client'

import {
     KBarPortal,
     KBarPositioner,
     KBarAnimator,
     KBarSearch,
     KBarResults,
     useMatches,
     ActionImpl,
} from 'kbar'
import { useRouter } from 'next/navigation'

interface KBarSearchProps {
     className?: string
     onClick?: () => void
}

interface CustomAction extends ActionImpl {
     metadata?: {
          new?: boolean
     }
}

function RenderResults({ onClick }: { onClick?: () => void }) {
     const { results } = useMatches()
     const router = useRouter()

     return (
          <KBarResults
               items={results}
               onRender={({ item, active }) =>
                    typeof item === 'string' ? (
                         <div className="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                              {item}
                         </div>
                    ) : (
                         <div
                              className={`cursor-pointer px-4 py-2 ${
                                   active ? 'bg-gray-100 dark:bg-zinc-800' : ''
                              }`}
                              onClick={() => {
                                   if (item.perform) {
                                        item.perform(item)
                                        onClick?.()
                                   }
                              }}
                         >
                              <div className="flex items-center gap-2">
                                   <span>{item.name}</span>
                                   {(item as CustomAction).metadata?.new && (
                                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                                             New
                                        </span>
                                   )}
                              </div>
                         </div>
                    )
               }
          />
     )
}

export function KBarSearchComponent({ className, onClick }: KBarSearchProps) {
     return (
          <KBarPortal>
               <KBarPositioner className="bg-black/50 backdrop-blur-sm">
                    <KBarAnimator className="w-full max-w-[600px] overflow-hidden rounded-lg bg-white shadow-lg dark:bg-zinc-900">
                         <KBarSearch className="w-full border-b border-gray-200 px-4 py-3 outline-none dark:border-zinc-800" />
                         <RenderResults onClick={onClick} />
                    </KBarAnimator>
               </KBarPositioner>
          </KBarPortal>
     )
}
