interface Documentation {
    groupKey: string;
    groupValue: string;
    children: DocumentationChild[];
}

interface DocumentationChild {
    label: string;
    value: string;
    url: string;
    new?: boolean;
    children?: DocumentationChild[];
}

export const DOCS: Documentation[] = [
    {
        groupKey: "Follow for more updates",
        groupValue: "Follow for more updates",
        children: [
            {
                label: "Twitter @praveenlodhi99",
                value: "Twitter @praveenlodhi99",
                url: "https://x.com/praveenlodhi99",
            },
        ],
    },
    {
        groupKey: "gettingStart",
        groupValue: "Getting Started",
        children: [
            {
                label: "Introduction",
                value: "introduction",
                url: "/docs",
            },
            {
                label: "Components",
                value: "components",
                url: "/docs/components",
            },
            {
                label: "Templates",
                value: "templates",
                url: "/docs/templates",
            },
        ],
    },
    {
        groupKey: "components",
        groupValue: "Components",
        children: [
            {
                label: "Teams",
                value: "teammates",
                url: "/docs/components/teammates",
                children: [
                    {
                        label: "v1.0.0",
                        value: "v1.0.0",
                        url: "/docs/components/teammates/v1",
                        new: false,
                    },
                    {
                        label: "v2.0.0",
                        value: "v2.0.0",
                        url: "/docs/components/teammates/v2",
                        new: true,
                    }
                ]
            },
            {
                label: "Liquid Frame",
                value: "liquid-frame",
                url: "/docs/components/liquid-frame",
                new: true,
            },
            {
                label: "Showcase",
                value: "showcase",
                url: "/docs/components/showcase",
            },
            {
                label: "Card",
                value: "card",
                url: "/docs/components/card",
                children: [
                    {
                        label: "3D Vanilla Tilt",
                        value: "3d-tilt-card",
                        url: "/docs/components/card/vanilla-tilt-card",
                        new: true,
                    },
                ]
            },
            {
                label: "SideMenu",
                value: "sidemenu",
                url: "/docs/components/sidemenu",
                new: true,
            },
            {
                label: "Carousel",
                value: "carousel",
                url: "/docs/components/carousel",
                children: [
                    {
                        label: "Vertical Flow",
                        value: "vertical-flow",
                        url: "/docs/components/carousel/vertical-flow",
                        new: true,
                    }
                ]
            },
        ],
    },
    // {
    //     groupKey: "templates",
    //     groupValue: "Templates",
    //     children: [
    //         {
    //             label: "Portfolio",
    //             value: "portfolio",
    //             url: "/docs/templates/portfolio",
    //             new: true,
    //         },
    //         {
    //             label: "Blog Website",
    //             value: "blog-website",
    //             url: "/docs/templates/blog-website",
    //         },
    //         {
    //             label: "Web3 SaaS",
    //             value: "web3-saas",
    //             url: "/docs/templates/web3-saas",
    //         },
    //     ],
    // }
];