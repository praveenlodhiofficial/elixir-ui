interface Documentation {
     groupKey: string
     groupValue: string
     children: DocumentationChild[]
}

interface DocumentationChild {
     label: string
     value: string
     url: string
     new?: boolean
     children?: DocumentationChild[]
}

export const DOCS: Documentation[] = [
     {
          groupKey: 'Follow for more updates',
          groupValue: 'Follow for more updates',
          children: [
               {
                    label: 'Twitter @praveenlodhi99',
                    value: 'Twitter @praveenlodhi99',
                    url: 'https://x.com/praveenlodhi99',
               },
          ],
     },
     {
          groupKey: 'gettingStart',
          groupValue: 'Getting Started',
          children: [
               {
                    label: 'Introduction',
                    value: 'introduction',
                    url: '/docs',
               },
               {
                    label: 'Components',
                    value: 'components',
                    url: '/docs/components',
               },
               {
                    label: 'Templates',
                    value: 'templates',
                    url: '/templates',
               },
          ],
     },
     {
          groupKey: 'components',
          groupValue: 'Components',
          children: [
               {
                    label: 'Team',
                    value: 'team',
                    url: '/docs/components2/team',
               },
               {
                    label: 'Liquid Frame',
                    value: 'liquid-frame',
                    url: '/docs/components2/liquid-frame',
                    new: true,
               },
               {
                    label: 'Showcase',
                    value: 'showcase',
                    url: '/docs/components2/showcase',
               },
               {
                    label: 'Card',
                    value: 'card',
                    url: '/docs/components2/card',
               },
               {
                    label: 'SideMenu',
                    value: 'sidemenu',
                    url: '/docs/components2/sidemenu',
                    new: true,
               },
               {
                    label: 'Carousel',
                    value: 'carousel',
                    url: '/docs/components2/carousel',
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
     //             url: "/templates/portfolio",
     //             new: true,
     //         },
     //         {
     //             label: "Blog Website",
     //             value: "blog-website",
     //             url: "/templates/blog-website",
     //         },
     //         {
     //             label: "Web3 SaaS",
     //             value: "web3-saas",
     //             url: "/templates/web3-saas",
     //         },
     //     ],
     // }
]
