import { DOCS } from '@/app/docs/documentation.constant'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GrArticle } from 'react-icons/gr'
import { FaChalkboardUser, FaSass } from 'react-icons/fa6'

interface Template {
     label: string
     value: string
     url: string
     new: boolean
     icon: React.ReactNode
}

const TEMPLATES: Template[] = [
     {
          label: 'Portfolio',
          value: 'portfolio',
          url: '/templates/portfolio',
          new: true,
          icon: <FaChalkboardUser className="h-5 w-5" />,
     },
     {
          label: 'Blog Website',
          value: 'blog-website',
          url: '/templates/blog-website',
          new: true,
          icon: <GrArticle className="h-5 w-5" />,
     },
     {
          label: 'Web3 SaaS',
          value: 'web3-saas',
          url: '/templates/web3-saas',
          new: true,
          icon: <FaSass className="h-5 w-5 scale-120" />,
     },
]

export default function TemplatesPage() {
     const templatesList = DOCS.find(group => group.groupKey === 'templates')?.children || []

     return (
          <div className="mx-auto max-w-5xl space-y-20">
               {/* All Components Section */}
               <div className="space-y-8" id="all-components">
                    <div className="space-y-4">
                         <h2 className="text-3xl font-bold tracking-tight">All Templates</h2>
                         <p className="text-muted-foreground max-w-2xl text-sm">
                              Explore our collection of carefully crafted templates. Each template
                              is designed to be copy-paste ready with full customization control.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                         {templatesList.map(template => (
                              <div
                                   key={template.value}
                                   className="group bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-primary/5 relative overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:shadow-lg"
                              >
                                   {/* Background gradient effect */}
                                   <div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                   <div className="relative space-y-4">
                                        {/* Header */}
                                        <div className="flex items-start justify-between">
                                             <div className="flex items-center gap-3">
                                                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
                                                       {
                                                            TEMPLATES.find(
                                                                 t => t.value === template.value
                                                            )?.icon
                                                       }
                                                  </div>
                                                  <div>
                                                       <h3 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                                                            {template.label}
                                                       </h3>
                                                       <p className="text-muted-foreground text-xs">
                                                            {template.children?.length || 1}{' '}
                                                            template
                                                            {/* {template.children?.length !== 1
                                                                 ? 's'
                                                                 : ''} */}
                                                       </p>
                                                  </div>
                                             </div>
                                             {template.new && (
                                                  <span className="bg-primary/10 border-primary/20 rounded-full border px-3 py-1 text-xs font-semibold">
                                                       New
                                                  </span>
                                             )}
                                        </div>

                                        {/* Component links */}
                                        {template.children && template.children.length > 0 ? (
                                             <div className="space-y-2">
                                                  <div className="bg-border h-px" />
                                                  <ul className="">
                                                       {template.children.map(child => (
                                                            <li key={child.value}>
                                                                 <Link
                                                                      href={child.url}
                                                                      className="group/link dark:text-muted-foreground hover:bg-muted/80 hover:text-foreground flex items-center justify-between rounded-lg px-3 py-1.5 text-sm text-zinc-700 transition-all duration-200"
                                                                 >
                                                                      <span className="flex items-center gap-2">
                                                                           <div className="bg-muted-foreground/40 h-1.5 w-1.5 rounded-full" />
                                                                           {child.label}
                                                                      </span>
                                                                      <div className="flex items-center gap-2">
                                                                           {template.new && (
                                                                                <span className="bg-primary/10 rounded-full px-2 py-0.5 text-xs font-semibold">
                                                                                     New
                                                                                </span>
                                                                           )}
                                                                           <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/link:translate-y-0.5 group-hover/link:rotate-[-45deg] group-hover/link:opacity-100" />
                                                                      </div>
                                                                 </Link>
                                                            </li>
                                                       ))}
                                                  </ul>
                                             </div>
                                        ) : (
                                             <div className="space-y-2">
                                                  <div className="bg-border h-px" />
                                                  <Link
                                                       href={template.url}
                                                       className="group/link text-muted-foreground hover:bg-muted/50 hover:text-foreground flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all duration-200"
                                                  >
                                                       <span>View Template</span>
                                                       <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/link:translate-y-0.5 group-hover/link:rotate-[-45deg] group-hover/link:opacity-100" />
                                                  </Link>
                                             </div>
                                        )}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     )
}
