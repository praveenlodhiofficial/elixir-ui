import { Showcase } from "@/components/elixir-ui/showcase";

export function ShowcasePreview() {
   return (
      <div className="flex h-full w-full scale-105 items-center justify-center">
         <Showcase
            imageSrc="/components/jujutsu-kaisen.png"
            text="Anime"
            fontSize="55px"
            fontFamily="exo"
            textColor="#FFFFD4"
            className="h-full w-full rounded-2xl bg-black"
            rotationSpeed={0.005}
            bloomIntensity={2}
            enableControls={true}
         />
      </div>
   );
}
