import LiquidFrame from "@/components/elixir-ui/liquid-frame";

export function LiquidFramePreview() {
   return (
      <div className="flex h-full w-full items-center justify-center">
         <LiquidFrame
            src="/components/liquid-frame/zenitsu.jpg"
            alt="Zenitsu from Demon Slayer"
            width={350}
            height={350}
            className="h-full w-full rounded-md brightness-110 contrast-110 saturate-120 md:object-cover"
            variant="default"
         />
      </div>
   );
}
