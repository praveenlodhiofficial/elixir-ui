import Link from 'next/link'
import { DOCS } from '@/app/docs/documentation.constant'

const Sitemap = [
     {
          label: 'Documentation',
          url: '/docs',
     },
     {
          label: 'All Components',
          url: '/docs/components',
     },
     {
          label: 'All Templates',
          url: '/templates',
     },
     {
          label: 'About',
          url: '/about',
     },
     {
          label: 'Contact',
          url: '/contact',
     },
]

const ConnectWithMe = [
     {
          label: 'GitHub',
          url: 'https://github.com/praveenlodhiofficial',
     },
     {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/praveenlodhiofficial/',
     },
     {
          label: 'Twitter',
          url: 'https://x.com/praveenlodhi99',
     },
     {
          label: 'Peerlist',
          url: 'https://peerlist.io/praveenlodhi99',
     },
]

export default function Footer() {
     // Get the components section from DOCS
     const componentsSection = DOCS.find(doc => doc.groupKey === 'components')
     const components = componentsSection?.children || []

     return (
          <footer className="rounded-tl-4xl rounded-tr-4xl border-t bg-white/50 px-4 py-12 dark:bg-zinc-900">
               <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 md:grid-cols-4">
                         <div>
                              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                   Elixir UI
                              </h3>
                              <p className="text-slate-600 dark:text-slate-400">
                                   Beautiful, customizable components for modern web applications.
                              </p>
                         </div>
                         <div>
                              <h4 className="mb-4 text-base font-semibold text-slate-900 uppercase dark:text-slate-100">
                                   Components
                              </h4>
                              <ul className="space-y-2 text-[13px] text-slate-600 dark:text-slate-400">
                                   {components.map(component => (
                                        <li key={component.value}>
                                             <Link
                                                  href={component.url}
                                                  className="hover:text-lime-600"
                                             >
                                                  {component.label}
                                                  {component.new && (
                                                       <span className="ml-1 inline-flex items-center rounded-full bg-lime-100 px-2 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-900 dark:text-lime-200">
                                                            New
                                                       </span>
                                                  )}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         <div>
                              <h4 className="mb-4 text-base font-semibold text-slate-900 uppercase dark:text-slate-100">
                                   Sitemap
                              </h4>
                              <ul className="space-y-2 text-[13px] text-slate-600 dark:text-slate-400">
                                   {Sitemap.map(resource => (
                                        <li key={resource.label}>
                                             <Link
                                                  href={resource.url}
                                                  className="hover:text-lime-600"
                                             >
                                                  {resource.label}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         <div className="flex flex-col gap-2">
                              <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">
                                   Connect with me
                              </h4>
                              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                   {ConnectWithMe.map(resource => (
                                        <li key={resource.label}>
                                             <Link
                                                  href={resource.url}
                                                  className="hover:text-lime-600"
                                             >
                                                  {resource.label}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>
                    <div className="mt-8 border-t border-slate-200 pt-8 text-center text-slate-600 dark:border-slate-800 dark:text-slate-400">
                         <p>&copy; 2025 Elixir UI. Built with ❤️ for the developer community.</p>
                    </div>
               </div>
          </footer>
     )
}
