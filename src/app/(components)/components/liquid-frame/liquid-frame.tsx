//  page.tsx

import React from 'react'
import LiquidFrameComponent from './liquid-frame-component'

const LiquidFrame = () => {
    return (
        <div className="w-full h-full">
            <LiquidFrameComponent
                src="/components/liquid-frame/zenitsu.jpg"
                alt="Zenitsu from Demon Slayer"
                className="rounded-[5px] contrast-125 saturate-125 w-full h-full"
            />
        </div>
    )
}

export default LiquidFrame








// 