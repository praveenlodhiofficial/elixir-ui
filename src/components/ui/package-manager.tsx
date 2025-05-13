"use client";

import React, { useState } from "react";
import CodeHighlight from "@/app/(components)/components/components/code-card/parts/code-highlight";

interface PackageManagersProps {
    command: string;
    pkg: string;
}

const managers = [
    { name: "pnpm", getCmd: (pkg: string, cmd: string) => cmd.replace('pnpm i', 'pnpm add') },
    { name: "npm", getCmd: (pkg: string, cmd: string) => cmd.replace('pnpm i', 'npm install') },
    { name: "yarn", getCmd: (pkg: string, cmd: string) => cmd.replace('pnpm i', 'yarn add') },
    { name: "bun", getCmd: (pkg: string, cmd: string) => cmd.replace('pnpm i', 'bun add') },
];

export const PackageManagers: React.FC<PackageManagersProps> = ({ command, pkg }) => {
    const [selectedManager, setSelectedManager] = useState("pnpm");
    const selected = managers.find((m) => m.name === selectedManager) || managers[0];

    return (
        <div className="ml-5 border-l-2 border-l-gray-200 pl-2 md:pl-8 text-sm">
            <div className="flex gap-2 md:mx-5 mx-2">
                {managers.map((m) => (
                    <button
                        key={m.name}
                        className={`px-2 py-1 rounded text-xs cursor-pointer transition-all duration-[0.10s] ${selectedManager === m.name ? 'dark:bg-lime-400 bg-zinc-800 dark:text-zinc-800 font-medium text-zinc-100 border-zinc-800' : 'bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200'}`}
                        onClick={() => setSelectedManager(m.name)}
                        type="button"
                    >
                        {m.name}
                    </button>
                ))}
            </div>
            <CodeHighlight className="my-3 border border-zinc-300 dark:border-zinc-800 dark:bg-white/5 pl-5" code={selected.getCmd(command, pkg)} lang="shell" withExpand={false} />
        </div>
    );
}; 