import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftIcon, TabletSmartphoneIcon } from "lucide-react";
import Link from "next/link";
import { BiLaptop } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";

export default async function ComponentPreviewLayout({
   children,
   className,
   params,
}: {
   children: React.ReactNode;
   className?: string;
   params: Promise<{ slug: string }>;
}) {
   const { slug } = await params;
   return (
      <div
         className={`bg-background fixed inset-5 top-0 right-0 bottom-0 left-0 z-50 w-screen ${className}`}
      >
         <div className="mx-auto grid h-full w-7xl grid-rows-[auto_1fr] gap-4 rounded-xl py-6">
            <div className="flex w-full items-center justify-between gap-3 rounded-lg">
               <div className="flex items-center justify-start gap-3">
                  <Link href={`/docs/components/${slug}`}>
                     <Button variant="outline">
                        <ArrowLeftIcon className="h-4 w-4" />
                     </Button>
                  </Link>
                  <Button>Component CLI</Button>
               </div>
               <div className="flex items-center justify-start gap-3">
                  <Tabs>
                     <TabsList>
                        <TabsTrigger value="sm">
                           <FaMobileAlt className="h-7 w-7 scale-110" />
                        </TabsTrigger>
                        <TabsTrigger value="md">
                           <TabletSmartphoneIcon className="h-7 w-7 scale-110" />
                        </TabsTrigger>
                        <TabsTrigger value="lg">
                           <BiLaptop className="h-7 w-7 scale-140" />
                        </TabsTrigger>
                     </TabsList>
                  </Tabs>
                  <ThemeToggleButton className="h-9 w-9 bg-zinc-100 p-0.5 dark:bg-white/2" />
               </div>
            </div>
            <div className="flex h-[86vh] w-full items-center justify-center rounded-2xl border-2 border-dashed p-1">
               {children}
            </div>
         </div>
      </div>
   );
}
