import NavigationalCard from "@/components/elixir-ui/navigational-card";
import { BookOpenIcon, Grid3X3Icon, RocketIcon } from "lucide-react";

export function NavigationalCardPreview() {
   return (
      <div className="flex h-full w-full items-center justify-center">
         <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <NavigationalCard
               title="Introduction"
               href="#introduction"
               description="Learn about Elixir UI"
               icon={<BookOpenIcon className="h-6 w-6" />}
               className="w-xs"
            />

            <NavigationalCard
               title="Getting Started"
               href="#getting-started"
               description="Learn about Elixir UI"
               icon={<RocketIcon className="h-6 w-6" />}
               className="w-xs"
            />

            <NavigationalCard
               title="All Components"
               href="#all-components"
               description="Learn about Elixir UI"
               icon={<Grid3X3Icon className="h-6 w-6" />}
               className="w-xs"
            />

            <NavigationalCard
               title="All Templates"
               href="#all-templates"
               description="Learn about Elixir UI"
               icon={<BookOpenIcon className="h-6 w-6" />}
               className="w-xs"
            />
         </section>
      </div>
   );
}
