import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationalCardProps {
   title: string;
   description: string;
   icon: React.ReactNode;
   href: string;
   className?: string;
}

export default function NavigationalCard({
   title,
   description,
   icon,
   href,
   className,
}: NavigationalCardProps) {
   return (
      <Link href={href} className={cn("group", className)}>
         <div className="group bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-primary/5 relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg">
            <div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex items-center justify-between space-x-4">
               <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                     {icon}
                  </div>
                  <div>
                     <h3 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                        {title}
                     </h3>
                     <p className="text-muted-foreground text-xs">{description}</p>
                  </div>
               </div>
               <ArrowRightIcon
                  name="ArrowRight"
                  className="text-muted-foreground h-4 w-4 transition-all duration-200 group-hover:translate-x-1 group-hover:rotate-[-45deg]"
               />
            </div>
         </div>
      </Link>
   );
}
