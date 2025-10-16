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
            url: "/templates",
         },
      ],
   },
   {
      groupKey: "3D Components",
      groupValue: "3D Components",
      children: [
         {
            label: "Liquid Frame",
            value: "liquid-frame",
            url: "/docs/components/liquid-frame",
         },
         {
            label: "3D Showcase",
            value: "showcase",
            url: "/docs/components/showcase",
         },
         {
            label: "Vanilla Tilt Card",
            value: "vanilla-tilt-card",
            url: "/docs/components/vanilla-tilt-card",
         },
         {
            label: "Orbital Flow",
            value: "orbital-flow",
            url: "/docs/components/orbital-flow",
            new: true,
         },
         {
            label: "Reflext Gallery",
            value: "reflext-gallery",
            url: "/docs/components/reflext-gallery",
            new: true,
         },
      ],
   },
   {
      groupKey: "Card Components",
      groupValue: "Card Components",
      children: [
         {
            label: "Navigational Card",
            value: "navigational-card",
            url: "/docs/components/navigational-card",
            new: true,
         },
         {
            label: "Customer Stories",
            value: "customer-stories",
            url: "/docs/components/customer-stories",
            new: true,
         },
      ],
   },
   {
      groupKey: "Navigation",
      groupValue: "Navigation",
      children: [
         {
            label: "Sidemenu",
            value: "sidemenu",
            url: "/docs/components/sidemenu",
         },
      ],
   },
   {
      groupKey: "Text Components",
      groupValue: "Text Components",
      children: [
         {
            label: "Tidal Text Animation",
            value: "tidal-text-animation",
            url: "/docs/components/tidal-text-animation",
         },
      ],
   },
   {
      groupKey: "UI Components",
      groupValue: "UI Components",
      children: [
         {
            label: "Action Button",
            value: "action-button",
            url: "/docs/components/action-button",
         },
         {
            label: "Action Input",
            value: "action-input",
            url: "/docs/components/action-input",
            new: true,
         },
      ],
   },
];
