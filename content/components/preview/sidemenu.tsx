import Sidemenu from "@/components/elixir-ui/sidemenu";

const menuLinks = [
   { title: "Projects", href: "" },
   { title: "Agency", href: "" },
   { title: "Expertise", href: "" },
   { title: "Careers", href: "" },
   { title: "Contact", href: "" },
];

const footerLinks = [
   { title: "Instagram", href: "" },
   { title: "LinkedIn", href: "" },
   { title: "Twitter", href: "" },
   { title: "Facebook", href: "" },
];

export function SidemenuPreview() {
   return (
      <div className="relative flex h-full w-full items-center justify-center">
         {/* Your page content */}
         <h1 className="w-full p-8 text-center text-3xl font-bold md:text-7xl">
            Elixir UI - Sidemenu Component
         </h1>

         {/* Sidemenu Component */}
         <Sidemenu
            className="absolute top-4 right-16"
            imageSaturation={1.2}
            links={menuLinks}
            footerLinks={footerLinks}
         />
      </div>
   );
}
