import { DOCS } from "@/app/docs/documentation.constant";

type KBarAction = {
   id: string;
   name: string;
   section?: string;
   shortcut?: string[];
   keywords?: string;
   perform?: () => void;
   subtitle?: string;
   new?: boolean;
};

function navigateTo(url: string) {
   if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
   } else {
      window.location.assign(url);
   }
}

// function createRouteActions(): KBarAction[] {
//    const routes: Array<{ id: string; name: string; url: string; shortcut?: string[]; keywords?: string }> = [
//       { id: 'home', name: 'Home', url: '/', shortcut: ['h'], keywords: 'root index' },
//       { id: 'docs', name: 'Docs', url: '/docs', shortcut: ['d'], keywords: 'documentation guide' },
//       { id: 'templates', name: 'Templates', url: '/templates', shortcut: ['t'], keywords: 'starter ui kit' },
//       { id: 'about', name: 'About', url: '/about', shortcut: ['a'], keywords: 'info team project' },
//       { id: 'contact', name: 'Contact', url: '/contact', shortcut: ['c'], keywords: 'support email' },
//    ];

//    return routes.map((r) => ({
//       id: r.id,
//       name: r.name,
//       shortcut: r.shortcut,
//       keywords: r.keywords,
//       perform: () => navigateTo(r.url),
//       section: 'Navigation',
//    }));
// }

function flattenDocsToActions(): KBarAction[] {
   const actions: KBarAction[] = [];

   for (const group of DOCS) {
      const section = group.groupValue || group.groupKey;
      for (const child of group.children) {
         // Add the child itself
         actions.push({
            id: `docs:${child.value}`,
            name: child.label,
            section,
            keywords: `${child.value} ${child.label} ${section}`,
            perform: () => navigateTo(child.url),
            subtitle: child.url,
            new: child.new,
         });

         // Add grandchildren if any
         if (child.children && child.children.length) {
            for (const grand of child.children) {
               actions.push({
                  id: `docs:${child.value}:${grand.value}`,
                  name: `${child.label} → ${grand.label}`,
                  section,
                  keywords: `${grand.value} ${grand.label} ${child.value} ${child.label} ${section}`,
                  perform: () => navigateTo(grand.url),
                  subtitle: grand.url,
                  new: grand.new,
               });
            }
         }
      }
   }

   return actions;
}

export const kbarActions: KBarAction[] = [
   // ...createRouteActions(),
   ...flattenDocsToActions(),
   // External/social quick links
   {
      id: "twitter",
      name: "Twitter @praveenlodhi99",
      section: "Social",
      keywords: "x.com social media",
      perform: () => navigateTo("https://x.com/praveenlodhi99"),
   },
   {
      id: "github",
      name: "GitHub @praveenlodhiofficial",
      section: "Social",
      keywords: "code repo source",
      perform: () => navigateTo("https://github.com/praveenlodhiofficial"),
   },
];
