import {
   ImageBackgroundCard,
   StatsCard,
   ImageContentCard,
   TextContentCard,
} from "@/components/elixir-ui/customer-stories";

export function CustomerStoriesPreview() {
   return (
      <section className="flex flex-col justify-center gap-10 md:gap-20">
         {/* Cards Section */}
         <div className="flex flex-col items-center justify-center gap-3 md:gap-6 md:p-0">
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
               <ImageBackgroundCard
                  subtitle="Customer stories"
                  description="Step Events'  s expertise transformed my vision into success!"
                  title="Kabir Shah"
                  statLabel="Founder of Chipsland"
                  bgImage="/components/background-user-image.jpg"
               />
               <StatsCard
                  subtitle="Facts & numbers"
                  statValue="91%"
                  description="Clients recommend our design services."
               />
            </div>

            <div className="flex h-full flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
               <ImageContentCard
                  subtitle="Customer stories"
                  description="Their creativity and attention to detail transformed our brand completely!"
                  image="/components/creativity-banner-image.jpg"
               />
               <TextContentCard
                  subtitle="Customer stories"
                  description="Step Events brought our ideas to life with exceptional creativity and precision, exceeding expectations."
                  title="Kabir Shah"
                  statLabel="Founder of Chipsland"
               />
            </div>
         </div>
      </section>
   );
}
