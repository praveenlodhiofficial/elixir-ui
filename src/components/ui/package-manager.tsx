'use client'

import React, { useState } from 'react'
import CodeHighlight from '@/components/docs/code-card/parts/code-highlight'

interface PackageManagersProps {
     command: string
     pkg: string
}

const managers = [
     { name: 'pnpm', getCmd: (pkg: string, cmd: string) => cmd.replace('pnpm i', 'pnpm add') },
     { name: 'npm', getCmd: (pkg: string, cmd: string) => cmd.replace('pnpm i', 'npm install') },
     { name: 'yarn', getCmd: (pkg: string, cmd: string) => cmd.replace('pnpm i', 'yarn add') },
     { name: 'bun', getCmd: (pkg: string, cmd: string) => cmd.replace('pnpm i', 'bun add') },
]

export const PackageManagers: React.FC<PackageManagersProps> = ({ command, pkg }) => {
     const [selectedManager, setSelectedManager] = useState('pnpm')
     const selected = managers.find(m => m.name === selectedManager) || managers[0]

     return (
          <div>
               <div className="mx-2 flex gap-2 md:mx-5">
                    {managers.map(m => (
                         <button
                              key={m.name}
                              className={`cursor-pointer rounded px-2 py-1 text-xs transition-all duration-[0.10s] ${selectedManager === m.name ? 'border-zinc-800 bg-zinc-800 font-medium text-zinc-100 dark:bg-lime-400 dark:text-zinc-800' : 'border-zinc-300 bg-zinc-100 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200'}`}
                              onClick={() => setSelectedManager(m.name)}
                              type="button"
                         >
                              {m.name}
                         </button>
                    ))}
               </div>
               <CodeHighlight
                    className="my-3 border border-zinc-300 pl-1 md:pl-5 dark:border-zinc-800 dark:bg-white/5"
                    code={selected.getCmd(command, pkg)}
                    lang="shell"
               />
          </div>
     )
}
