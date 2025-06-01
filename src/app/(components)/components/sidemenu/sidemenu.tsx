import SideMenu from "@/registry/default/sidemenu/components/sidemenu";

interface LinkProps {
    title: string;
    href: string;
    image?: string;
}

const Links: LinkProps[] = [
    { title: "Projects", href: "/" },
    { title: "Agency", href: "/" },
    { title: "Expertise", href: "/" },
    { title: "Careers", href: "/" },
    { title: "Contact", href: "/" },
];

const FooterLinks: LinkProps[] = [
    { title: "Instagram", href: "/" },
    { title: "LinkedIn", href: "/" },
    { title: "Twitter", href: "/" },
    { title: "Facebook", href: "/" },
];

export default function SideMenuDemo() {
    return (
        <div className="w-full h-[70vh] relative top-0 mb-10">
            <SideMenu 
            cardImage="/components/sidemenu/bg1.webp"
            cardColor="#FFB6C1" 
            links={Links} 
            footerLinks={FooterLinks} 
            imageOpacity={1}
            imageSaturation={1.1}
            />
        </div>
    )
}