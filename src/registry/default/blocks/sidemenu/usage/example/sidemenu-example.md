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

export default function SidemenuPage() {
    return (
        <div>
            <SideMenu 
            cardImage="/image.jpg" 
            footerLinks={FooterLinks} 
            links={Links} 
            imageOpacity={0.5} 
            imageSaturation={0.8}
            />
        </div>
    )
}