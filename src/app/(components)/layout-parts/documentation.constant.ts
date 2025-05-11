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
                url: "/components",
            },
            {
                label: "Installation",
                value: "installation",
                url: "/components/installation",
            },
        ],
    },
    {
        groupKey: "components",
        groupValue: "Components",
        children: [
            {
                label: "Teammates",
                value: "teammates",
                url: "/components/teammates",
                new: true,
            },
        ],
    },
];