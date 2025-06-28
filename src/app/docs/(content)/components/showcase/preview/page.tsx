import ShowcaseComponent from '@/registry/components/showcase'

const ShowcasePreview = async () => {
     return (
          <div className="h-[30rem] w-[60rem] rounded-md border border-gray-200 bg-black/5 dark:border-zinc-800 dark:bg-black saturate-120 contrast-110 brightness-120">
               <ShowcaseComponent
                    imageSrc="/components/showcase/showcase-image.png"
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

export default ShowcasePreview
