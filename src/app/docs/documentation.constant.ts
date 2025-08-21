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
                    url: '/docs/components/team',
               },
               {
                    label: 'Liquid Frame',
                    value: 'liquid-frame',
                    url: '/docs/components/liquidFrame',
                    new: true,
               },
               {
                    label: 'Showcase',
                    value: 'showcase',
                    url: '/docs/components/showcase',
               },
               {
                    label: 'Card',
                    value: 'card',
                    url: '/docs/components/card',
               },
               {
                    label: 'SideMenu',
                    value: 'sidemenu',
                    url: '/docs/components/sidemenu',
                    new: true,
               },
               {
                    label: 'Carousel',
                    value: 'carousel',
                    url: '/docs/components/carousel',
               },
               {
                    label: 'Message Thread',
                    value: 'message-thread',
                    url: '/docs/components/messageThread',
                    new: true,
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
