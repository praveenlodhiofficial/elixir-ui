import LiquidFrame1 from '@/registry/components/liquidFrame1'

export function LiquidFrame1Preview() {
     return (
          <div className="h-full w-full">
               <LiquidFrame1
                    src="/components/liquidFrame/zenitsu.png"
                    alt="Zenitsu from Demon Slayer"
                    width={300}
                    height={300}
                    className="h-full w-full rounded-md contrast-110 saturate-120 brightness-110"
                    variant="default"
               />
          </div>
     )
}
