import { FaUserPlus, FaSearch, FaArrowRight } from "react-icons/fa";
import { OrbitalFlow } from "@/components/elixir-ui/orbital-flow";
import { ActionInput } from "@/components/elixir-ui/action-input";
import NavigationalCard from "@/components/elixir-ui/navigational-card";
import { BookOpenIcon, Grid3X3Icon, RocketIcon } from "lucide-react";
import Image from "next/image";
import VanillaTiltCard from "@/components/elixir-ui/vanilla-tilt-card";
import LiquidFrame from "@/components/elixir-ui/liquid-frame";
import {
   ImageBackgroundCard,
   StatsCard,
   ImageContentCard,
} from "@/components/elixir-ui/customer-stories";
import { TextContentCard } from "@/components/elixir-ui/customer-stories";
import { TidalTextAnimation } from "@/components/elixir-ui/tidal-text-animation";
import Sidemenu from "@/components/elixir-ui/sidemenu";

const innerTags = [
   { name: "Okarun" },
   { name: 'Jin "Jiji" Enjoji' },
   { name: "Momo Ayase" },
   { name: "Evil Eye" },
];

const outerTags = [
   { name: "Turbo Granny" },
   { name: "Aira Shiratori" },
   { name: "Seiko Ayase" },
   { name: "Acrobatic Silky" },
   { name: "Serpoian" },
];

const menuLinks = [
   { title: "Projects", href: "" },
   { title: "Agency", href: "" },
   { title: "Expertise", href: "" },
   { title: "Careers", href: "" },
   { title: "Contact", href: "" },
   { title: "About Us", href: "" },
];

const footerLinks = [
   { title: "Instagram", href: "" },
   { title: "LinkedIn", href: "" },
   { title: "Twitter", href: "" },
   { title: "Facebook", href: "" },
];

export default function NotFound() {
   return (
      <div className="my-5 h-full w-6xl space-y-5">
         {/* ---------------------------------------------------------> Orbital Flow & Action Input & Vanilla Tilt Card ---------------------------------------------------------> */}
         <section className="grid w-full grid-cols-[auto_1fr] items-center justify-center gap-5">
            <div className="flex w-fit items-center justify-center rounded-2xl border">
               <OrbitalFlow
                  outerTags={outerTags}
                  innerTags={innerTags}
                  centerImageSrc="/components/dandadan.jpg"
                  outerOrbitDiameter={850}
                  innerOrbitDiameter={550}
                  outerRotationSpeed={32}
                  innerRotationSpeed={30}
               />
            </div>
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl">
               <div className="flex flex-col items-center gap-3">
                  <ActionInput
                     type="email"
                     placeholder="Email"
                     rightIcon={
                        <FaArrowRight className="mr-1 h-7 w-7 rounded-full bg-zinc-900 p-2 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" />
                     }
                     rightIconRotate={true}
                     className="text-light text-primary-text-color/70 w-[17rem] rounded-full border bg-zinc-900/1 px-5 py-5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />

                  <ActionInput
                     type="text"
                     placeholder="Enter username"
                     leftIcon={
                        <FaUserPlus className="mr-1 h-7 w-7 rounded-full bg-zinc-900 p-2 text-zinc-100 transition-all duration-200 hover:scale-110 dark:bg-zinc-100 dark:text-zinc-900" />
                     }
                     leftIconRotate={false}
                     className="text-light text-primary-text-color/70 w-[17rem] rounded-full border bg-zinc-900/1 px-5 py-5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />

                  <ActionInput
                     type="search"
                     placeholder="Search..."
                     rightIcon={
                        <FaSearch className="mr-1 h-7 w-7 rounded-full bg-zinc-900 p-2 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" />
                     }
                     rightIconRotate={false}
                     className="text-light text-primary-text-color/70 w-[17rem] rounded-full border bg-zinc-900/1 px-5 py-5 pr-5 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
               </div>
               <div className="h-fit rounded-2xl border">
                  <VanillaTiltCard className="flex w-fit scale-80 flex-col">
                     <Image
                        src="/components/john-lennon.jpg"
                        alt="John Lennon"
                        width={500}
                        height={500}
                        className="aspect-auto h-56 w-52 rounded-xl border object-cover"
                     />
                     <h1 className="mt-2 rounded-xl bg-black p-2 text-center text-lg font-semibold text-white uppercase dark:bg-white/10 dark:text-white">
                        John Lennon
                     </h1>
                  </VanillaTiltCard>
               </div>
            </div>
         </section>

         {/* ---------------------------------------------------------> Navigational Card & Liquid Frame ---------------------------------------------------------> */}
         <section className="grid w-full grid-cols-[auto_1fr] items-center justify-center gap-5">
            <div className="grid grid-cols-1 gap-5">
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
            </div>
            <div className="flex h-full w-full items-center justify-center rounded-2xl border">
               <LiquidFrame
                  src="/components/liquid-frame/zenitsu.jpg"
                  alt="Zenitsu from Demon Slayer"
                  width={300}
                  height={300}
                  className="h-full w-full rounded-2xl brightness-110 contrast-110 saturate-120 md:object-cover"
                  variant="default"
               />
            </div>
         </section>

         {/* ---------------------------------------------------------> Customer Stories ---------------------------------------------------------> */}
         <section className="flex flex-col justify-center gap-10 md:gap-20">
            <div className="flex flex-col items-center justify-center gap-3 md:gap-6 md:p-0">
               <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
                  <ImageBackgroundCard
                     subtitle="Customer stories"
                     description="Step Events'  s expertise transformed my vision into success!"
                     title="Kabir Shah"
                     statLabel="Founder of Chipsland"
                     bgImage="/components/background-user-image.jpg"
                     className="rounded-2xl border"
                  />
                  <StatsCard
                     subtitle="Facts & numbers"
                     statValue="91%"
                     description="Clients recommend our design services."
                     className="rounded-2xl border"
                  />
               </div>

               <div className="flex h-full flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
                  <ImageContentCard
                     subtitle="Customer stories"
                     description="Their creativity and attention to detail transformed our brand completely!"
                     image="/components/creativity-banner-image.jpg"
                     className="rounded-2xl border"
                  />
                  <TextContentCard
                     subtitle="Customer stories"
                     description="Step Events brought our ideas to life with exceptional creativity and precision, exceeding expectations."
                     title="Kabir Shah"
                     statLabel="Founder of Chipsland"
                     className="rounded-2xl border"
                  />
               </div>
            </div>
         </section>

         {/* ---------------------------------------------------------> Tidal Text Animation & Sidemenu ---------------------------------------------------------> */}
         <section className="mt-6 grid w-full grid-cols-[auto_1fr] items-center justify-center gap-5">
            <div className="my-10 flex h-full w-3xl items-center justify-center rounded-2xl border">
               <TidalTextAnimation
                  defaultText="The Beatles"
                  className="scale-95 pt-15"
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

            <div className="h-full w-full rounded-2xl border">
               <div className="relative bottom-5.5 left-3 flex h-full w-full scale-85 items-center justify-center">
                  {/* Your page content */}
                  <h1 className="p-8 text-center text-4xl font-bold md:text-5xl">
                     Welcome to Elixir UI !
                  </h1>

                  {/* Sidemenu Component */}
                  <Sidemenu
                     className="absolute top-0 right-0 scale-85 rounded-2xl"
                     imageSaturation={1.2}
                     links={menuLinks}
                     footerLinks={footerLinks}
                  />
               </div>
            </div>
         </section>
      </div>
   );
}
