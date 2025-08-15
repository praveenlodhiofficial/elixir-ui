import { Icon } from '@/components/ui/icon'

export default function TemplateBanner() {
     return (
          <div className="h-fit items-center justify-center space-y-10 py-10 pt-15">
               <div className="">
                    <div className="mx-auto flex w-fit items-center justify-center gap-2 rounded-full bg-black/5 px-3 py-2 text-center text-xs dark:bg-white/5">
                         <Icon name="Zap" className="h-4 w-4" fill="lime" />
                         All templates now available for Next.js
                    </div>
                    <div className="">
                         <h1 className="font-roboto text-center text-[6rem] font-bold tracking-tight uppercase">
                              Elixir UI Templates
                         </h1>
                    </div>
               </div>
               <p className="mx-auto w-3/5 text-center text-base text-gray-600 dark:text-gray-300">
                    Premium elixir/ui templates built with Next.js 15, Tailwind 4, React 19,
                    Typescript and MDX. Our modern, responsive and ready to use website templates
                    include the original Figma files and are available to purchase individually or
                    get them all on the premium plan.
               </p>
          </div>
     )
}
