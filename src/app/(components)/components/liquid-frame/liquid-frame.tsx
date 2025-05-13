//  page.tsx

import React from 'react'
import LiquidFrameComponent from './liquid-frame-component'

const LiquidFrame = () => {
    return (
        <LiquidFrameComponent
        src="/components/liquid-frame/zenitsu.jpg"
        height={900}
        width={900}
        alt="Zenitsu from Demon Slayer"
        className="rounded-[5px] contrast-125 saturate-125 self-center object-cover object-center"
        />
    )
}

export default LiquidFrame








// 