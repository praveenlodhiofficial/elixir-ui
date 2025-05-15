//  page.tsx

import LiquidFrame from '@/registry/default/liquid-frame/components/liquid-frame'
import React from 'react'


export default function Page() {
    return (
        <div className="w-full h-full">
            <LiquidFrame
                src="/elixir-ui.jpg"
                alt="elixir-ui"
                className="rounded-[5px] contrast-125 saturate-125 w-full h-full"
            />
        </div>
    )
}