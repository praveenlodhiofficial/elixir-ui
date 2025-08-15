import LiquidFrameComponent from '@/registry/components/liquid-frame'

const LiquidFramePreview = () => {
     return (
          <div className="h-full w-full">
               <LiquidFrameComponent
                    src="/components/liquid-frame/zenitsu.jpg"
                    alt="Zenitsu from Demon Slayer"
                    width={300}
                    height={300}
                    className="h-full w-full rounded-md contrast-110 saturate-120 brightness-110"
                    variant="default"
               />
          </div>
     )
}

export default LiquidFramePreview
