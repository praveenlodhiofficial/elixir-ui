import Image from "next/image";

/* -------------------- Types -------------------- */
interface BaseProps {
   title?: string;
   subtitle?: string;
   description?: string;
   className?: string;
}

interface ImageBackgroundCardProps extends BaseProps {
   bgImage: string;
   statLabel?: string;
}

interface StatsCardProps extends BaseProps {
   statValue: string | number;
}

interface ImageContentCardProps extends BaseProps {
   image: string;
}

interface TextContentCardProps extends BaseProps {
   statLabel?: string;
}

/* -------------------- Card 1: Background Image -------------------- */
export function ImageBackgroundCard({
   title,
   subtitle,
   description,
   statLabel,
   bgImage,
   className = "",
}: ImageBackgroundCardProps) {
   return (
      <div
         className={`relative flex h-full min-h-[60vh] w-full flex-col justify-between rounded-2xl bg-cover bg-center bg-no-repeat p-8 md:min-h-[30vh] lg:min-h-[60vh] ${className}`}
         style={{ backgroundImage: `url(${bgImage})` }}
      >
         <span className="text-xxs font-semibold text-zinc-400 uppercase md:text-sm">
            {subtitle}
         </span>
         <div className="flex w-full flex-col gap-6">
            <h4 className="text-base font-bold text-white md:text-3xl">“{description}”</h4>
            <div>
               <p className="text-xs font-bold text-zinc-100 md:text-base">{title}</p>
               <p className="text-xxs font-semibold text-zinc-400 md:text-sm">{statLabel}</p>
            </div>
         </div>
      </div>
   );
}

/* -------------------- Card 2: Statistics -------------------- */
export function StatsCard({ subtitle, statValue, description, className = "" }: StatsCardProps) {
   return (
      <div
         className={`flex h-full min-h-[60vh] w-full min-w-[330px] flex-col justify-between rounded-2xl bg-[#F6E683] p-8 md:min-h-[30vh] md:max-w-[330px] lg:min-h-[60vh] ${className}`}
      >
         <div>
            <span className="text-xxs font-medium text-zinc-600 uppercase md:text-sm">
               {subtitle}
            </span>
         </div>
         <div className="flex flex-col gap-1">
            <h2 className="text-6xl font-bold dark:text-zinc-900">{statValue}</h2>
            <h4 className="dark:text-zinc-900">{description}</h4>
         </div>
      </div>
   );
}

/* -------------------- Card 3: Image + Content -------------------- */
export function ImageContentCard({
   subtitle,
   description,
   image,
   title,
   className = "",
}: ImageContentCardProps) {
   return (
      <div
         className={`flex h-full min-h-[60vh] w-full min-w-[330px] flex-col justify-between rounded-2xl bg-zinc-900 p-8 md:min-h-[30vh] md:max-w-[330px] lg:min-h-[60vh] dark:bg-white/5 ${className}`}
      >
         <span className="text-xxs font-medium text-white/60 uppercase md:text-sm">{subtitle}</span>
         <div className="flex flex-col gap-6">
            <h4 className="text-sm text-white">{description}</h4>
            <Image
               src={image}
               alt={title || "story image"}
               width={1000}
               height={1000}
               className="h-full min-h-60 w-full rounded-lg object-cover"
            />
         </div>
      </div>
   );
}

/* -------------------- Card 4: Text Content -------------------- */
export function TextContentCard({
   title,
   subtitle,
   description,
   statLabel,
   className = "",
}: TextContentCardProps) {
   return (
      <div
         className={`flex h-full min-h-[60vh] flex-1 flex-col justify-between rounded-2xl bg-zinc-100 p-8 text-zinc-900 md:min-h-[30vh] lg:min-h-[60vh] ${className}`}
      >
         <div className="flex flex-col gap-6">
            <span className="text-xxs font-semibold text-zinc-600 uppercase md:text-sm">
               {subtitle}
            </span>
            <h2 className="text-base font-bold md:text-3xl">“{description}”</h2>
         </div>
         <div>
            <p className="text-xs font-bold text-zinc-900 md:text-base">{title}</p>
            <p className="text-xxs font-semibold text-zinc-500 md:text-sm">{statLabel}</p>
         </div>
      </div>
   );
}
