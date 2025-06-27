import { DOCS } from '@/app/docs/documentation.constant'
import Link from 'next/link'
import { Icon } from '@/components/ui/icon'

export default function AllComponentsPage() {
     const componentsList = DOCS.find(group => group.groupKey === 'components')?.children || []

     return (
          <div className="w-full scroll-smooth">
               {/* All Components Section */}
               <div className="space-y-8" id="all-components">
                    <div className="space-y-4">
                         <h2 className="text-3xl font-bold tracking-tight">All Components</h2>
                         <p className="text-muted-foreground max-w-2xl text-sm">
                              Explore our collection of carefully crafted components. Each component
                              is designed to be copy-paste ready with full customization control.
                         </p>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                         {componentsList.map(component => (
                              <div
                                   key={component.value}
                                   className="group bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-primary/5 relative overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:shadow-lg"
                              >
                                   {/* Background gradient effect */}
                                   <div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                   <div className="relative space-y-4">
                                        {/* Header */}
                                        <div className="flex items-start justify-between">
                                             <div className="flex items-center gap-3">
                                                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
                                                       {component.value === 'teammates' && (
                                                            <Icon name="Users" className="h-5 w-5" />
                                                       )}
                                                       {component.value === 'liquid-frame' && (
                                                            <Icon name="Eye" className="h-5 w-5" />
                                                       )}
                                                       {component.value === 'showcase' && (
                                                            <Icon name="Star" className="h-5 w-5" />
                                                       )}
                                                       {component.value === 'card' && (
                                                            <Icon name="RiBankCardFill" className="h-5 w-5" />
                                                       )}
                                                       {component.value === 'sidemenu' && (
                                                            <Icon name="HiOutlineMenuAlt1" className="h-5 w-5" />
                                                       )}
                                                       {component.value === 'carousel' && (
                                                            <Icon name="MdViewCarousel" className="h-5 w-5" />
                                                       )}
                                                  </div>
                                                  <div>
                                                       <h3 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                                                            {component.label}
                                                       </h3>
                                                       <p className="text-muted-foreground text-xs">
                                                            {component.children?.length || 1}{' '}
                                                            component
                                                            {component.children?.length !== 1
                                                                 ? 's'
                                                                 : ''}
                                                       </p>
                                                  </div>
                                             </div>
                                             {component.new && (
                                                  <span className="bg-primary/10 border-primary/20 rounded-full border px-3 py-1 text-xs font-semibold">
                                                       New
                                                  </span>
                                             )}
                                        </div>

                                        {/* Component links */}
                                        {component.children && component.children.length > 0 ? (
                                             <div className="space-y-2">
                                                  <div className="bg-border h-px" />
                                                  <ul className="">
                                                       {component.children.map(child => (
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
                                                                           {child.new && (
                                                                                <span className="bg-primary/10 rounded-full px-2 py-0.5 text-xs font-semibold">
                                                                                     New
                                                                                </span>
                                                                           )}
                                                                           <Icon name="ArrowRight" className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/link:translate-y-0.5 group-hover/link:rotate-[-45deg] group-hover/link:opacity-100" />
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
                                                       href={component.url}
                                                       className="group/link text-muted-foreground hover:bg-muted/50 hover:text-foreground flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all duration-200"
                                                  >
                                                       <span>View Component</span>
                                                       <Icon name="ArrowRight" className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/link:translate-y-0.5 group-hover/link:rotate-[-45deg] group-hover/link:opacity-100" />
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
