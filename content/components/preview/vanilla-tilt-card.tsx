import VanillaTiltCard from "@/components/elixir-ui/vanilla-tilt-card";
import Image from "next/image";

export function VanillaTiltCardPreview() {
   return (
      <div className="flex h-full w-full items-center justify-center">
         <VanillaTiltCard className="flex w-fit flex-col">
            <Image
               src="/components/john-lennon.jpg"
               alt="John Lennon"
               width={1000}
               height={1000}
               className="aspect-auto h-60 w-60 rounded-lg border object-cover"
            />
            <h1 className="mt-2 rounded-lg bg-black p-2 text-center text-lg font-semibold text-white uppercase dark:bg-white/10 dark:text-white">
               John Lennon
            </h1>
         </VanillaTiltCard>
      </div>
   );
}
