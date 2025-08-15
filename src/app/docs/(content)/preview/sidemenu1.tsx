import SideMenu from "@/registry/components/sidemenu1";

interface LinkProps {
    title: string;
    href: string;
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

export function SideMenu1Preview() {
    return (
        <div className="min-h-[35rem] w-[50rem] relative top-0">
            <SideMenu 
            // cardImageURL=""
            cardColor="#FFB6C1" 
            links={Links} 
            footerLinks={FooterLinks} 
            imageOpacity={1}
            imageSaturation={1.1}
            />
        </div>
    )
}