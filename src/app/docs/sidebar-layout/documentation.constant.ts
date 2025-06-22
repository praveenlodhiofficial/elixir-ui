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
                url: "/docs/content",
            },
            // {
            //     label: "Installation",
            //     value: "installation",
            //     url: "/docs/content/installation",
            // },
        ],
    },
    {
        groupKey: "components",
        groupValue: "Components",
        children: [
            {
                label: "Teams",
                value: "teammates",
                url: "/docs/content/teammates",
                children: [
                    {
                        label: "v1.0.0",
                        value: "v1.0.0",
                        url: "/docs/content/teammates/v1.0.0",
                        new: false,
                    },
                    {
                        label: "v2.0.0",
                        value: "v2.0.0",
                        url: "/docs/content/teammates/v2.0.0",
                        new: true,
                    }
                ]
            },
            {
                label: "Liquid Frame",
                value: "liquid-frame",
                url: "/docs/content/liquid-frame",
                new: true,
            },
            {
                label: "Showcase",
                value: "showcase",
                url: "/docs/content/showcase",
            },
            {
                label: "Card",
                value: "card",
                url: "/docs/content/card",
                children: [
                    {
                        label: "3D Vanilla Tilt",
                        value: "3d-tilt-card",
                        url: "/docs/content/card/vanilla-tilt-card",
                        new: true,
                    },
                ]
            },
            {
                label: "SideMenu",
                value: "sidemenu",
                url: "/docs/content/sidemenu",
                new: true,
            },
        ],
    },
];