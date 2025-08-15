import ShowcaseComponent from '@/registry/components/showcase1'

export function Showcase1Preview() {
     return (
          <div className="rounded-md border shadow-xl bg-black/5 dark:border-zinc-800 dark:bg-black saturate-120 contrast-110 brightness-120">
               <ShowcaseComponent
                    imageSrc="/components/showcase/jujutsu-kaisen.png"
                    text="Anime"
                    fontSize="55px"
                    fontFamily="exo"
                    textColor="#FFFFD4"
                    size="full"
                    variant="default"
                    className="h-full w-full"
                    rotationSpeed={0.005}
                    bloomIntensity={2}
                    enableControls={true}
               />
          </div>
     )
}
