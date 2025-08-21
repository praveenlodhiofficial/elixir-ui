import { Showcase1 } from '@/registry/components/showcase1'

export function Showcase1Preview() {
     return (
               <Showcase1
                    imageSrc="/components/showcase/jujutsu-kaisen.png"
                    text="Anime"
                    fontSize="55px"
                    fontFamily="exo"
                    textColor="#FFFFD4"
                    size="full"
                    variant="default"
                    className="h-full w-full bg-black"
                    rotationSpeed={0.005}
                    bloomIntensity={2}
                    enableControls={true}
               />
     )
}
