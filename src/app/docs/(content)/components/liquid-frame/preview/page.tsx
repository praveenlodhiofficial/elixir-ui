import LiquidFrameComponent from '@/registry/components/liquid-frame'

const LiquidFramePreview = () => {
    return (
        <div className="w-full h-full">
            <LiquidFrameComponent
                src="/components/liquid-frame/zenitsu.jpg"
                alt="Zenitsu from Demon Slayer"
                width={300}
                height={300}
                className="rounded-md w-full h-full"
                variant="default"
            />
        </div>
    )
}

export default LiquidFramePreview