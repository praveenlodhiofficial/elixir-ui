import { TidalTextAnimation } from "@/components/elixir-ui/tidal-text-animation";

export function TidalTextAnimationPreview() {
   return (
      <div className="flex h-full w-full items-center justify-center">
         <TidalTextAnimation
            defaultText="The Beatles"
            teamMembers={[
               {
                  name: "John Lennon",
                  url: "/components/john-lennon.jpg",
               },
               {
                  name: "McCartney",
                  url: "/components/paul-mccartney.jpg",
               },
               {
                  name: "Harrison",
                  url: "/components/george-harrison.jpg",
               },
               {
                  name: "Ringo Starr",
                  url: "/components/ringo-starr.jpg",
               },
            ]}
         />
      </div>
   );
}
