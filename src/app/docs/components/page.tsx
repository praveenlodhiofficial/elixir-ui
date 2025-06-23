import Link from 'next/link'
import {
     ArrowRight,
     Github,
     Sparkles,
     Zap,
     Palette,
     Code,
     Download,
     Star,
     Users,
     Layers,
     Eye,
     MousePointer,
     Wind,
     Library,
     BookOpen,
     Rocket,
     Grid3X3,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from '@/components/ui/accordion'
import { DOCS } from '@/app/docs/sidebar-layout/documentation.constant'

export default function Content() {
     const componentsList = DOCS.find(group => group.groupKey === 'components')?.children || []

     return (
          <div className="mx-auto max-w-5xl space-y-20">
               {/* Navigation Section */}
               <div className="space-y-6 pt-8">
                    <div className="space-y-4">
                         <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
                         <p className="text-muted-foreground max-w-2xl text-sm">
                              Welcome to Elixir UI documentation. Choose a section to get started
                              with our collection of meticulously crafted, re-usable components.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                         <Link href="#introduction" className="group">
                              <div className="group bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-primary/5 relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg">
                                   <div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                   <div className="relative space-y-4">
                                        <div className="flex items-center gap-3">
                                             <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                                                  <BookOpen className="h-6 w-6" />
                                             </div>
                                             <div>
                                                  <h3 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                                                       Introduction
                                                  </h3>
                                                  <p className="text-muted-foreground text-xs">
                                                       Learn about Elixir UI
                                                  </p>
                                             </div>
                                        </div>
                                        <ArrowRight className="text-muted-foreground h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
                                   </div>
                              </div>
                         </Link>

                         <Link href="#getting-started" className="group">
                              <div className="group bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-primary/5 relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg">
                                   <div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                   <div className="relative space-y-4">
                                        <div className="flex items-center gap-3">
                                             <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                                                  <Rocket className="h-6 w-6" />
                                             </div>
                                             <div>
                                                  <h3 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                                                       Getting Started
                                                  </h3>
                                                  <p className="text-muted-foreground text-xs">
                                                       Quick setup guide
                                                  </p>
                                             </div>
                                        </div>
                                        <ArrowRight className="text-muted-foreground h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
                                   </div>
                              </div>
                         </Link>

                         <Link href="#all-components" className="group">
                              <div className="group bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-primary/5 relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg">
                                   <div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                   <div className="relative space-y-4">
                                        <div className="flex items-center gap-3">
                                             <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                                                  <Grid3X3 className="h-6 w-6" />
                                             </div>
                                             <div>
                                                  <h3 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                                                       All Components
                                                  </h3>
                                                  <p className="text-muted-foreground text-xs">
                                                       Browse all components
                                                  </p>
                                             </div>
                                        </div>
                                        <ArrowRight className="text-muted-foreground h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
                                   </div>
                              </div>
                         </Link>
                    </div>
               </div>

               {/* Introduction Section */}
               <div className="space-y-8" id="introduction">
                    <div className="space-y-4">
                         <h2 className="text-3xl font-bold tracking-tight">Introduction</h2>
                         <p className="text-muted-foreground max-w-2xl text-sm">
                              Welcome to the documentation for Elixir UI. Discover a collection of
                              meticulously crafted, re-usable components that you can copy and paste
                              directly into your projects.
                         </p>
                         <div className="flex gap-4">
                              <Button asChild>
                                   <Link href="#all-components">
                                        Explore Components <ArrowRight className="ml-2 h-4 w-4" />
                                   </Link>
                              </Button>
                              <Button variant="outline" asChild>
                                   <Link
                                        href="https://github.com/praveenlodhiofficial/elixir-ui"
                                        target="_blank"
                                   >
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub
                                   </Link>
                              </Button>
                         </div>
                    </div>

                    {/* About Elixir UI */}
                    <div className="space-y-6">
                         <h3 className="text-2xl font-bold tracking-tight">About Elixir UI</h3>
                         <div className="text-muted-foreground space-y-5 text-sm">
                              <p>
                                   Elixir UI is not a traditional component library. Instead,
                                   it&apos;s a curated collection of components designed to provide
                                   you with full ownership and control over your code.
                              </p>
                              <ul className="space-y-5">
                                   <li className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                             <Code className="text-primary h-5 w-5" />
                                        </div>
                                        <div>
                                             <h4 className="text-foreground mb-1 font-semibold">
                                                  Full Code Ownership
                                             </h4>
                                             <p>
                                                  You get the full source code for every component.
                                                  No npm packages, no dependencies to manage. Just
                                                  copy the code into your project and modify it as
                                                  you see fit. This means you have complete control
                                                  over styling, logic, and behavior.
                                             </p>
                                        </div>
                                   </li>
                                   <li className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                             <Layers className="text-primary h-5 w-5" />
                                        </div>
                                        <div>
                                             <h4 className="text-foreground mb-1 font-semibold">
                                                  Built on Modern Foundations
                                             </h4>
                                             <p>
                                                  Components are built using React, TypeScript, and
                                                  Tailwind CSS, ensuring a modern, scalable, and
                                                  maintainable codebase. They are designed to be
                                                  easily integrated into any Next.js or React
                                                  project.
                                             </p>
                                        </div>
                                   </li>
                                   <li className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                             <Wind className="text-primary h-5 w-5" />
                                        </div>
                                        <div>
                                             <h4 className="text-foreground mb-1 font-semibold">
                                                  Independent and Unstyled
                                             </h4>
                                             <p>
                                                  While the components come with a clean, modern
                                                  design, they are unstyled in the sense that they
                                                  don&apos;t impose a rigid design system. You can
                                                  easily adapt them to your existing brand and
                                                  styles using Tailwind CSS.
                                             </p>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>

               {/* Getting Started Section */}
               <div className="space-y-8" id="getting-started">
                    <div className="space-y-4">
                         <h2 className="text-3xl font-bold tracking-tight">Getting Started</h2>
                         <p className="text-muted-foreground max-w-2xl text-sm">
                              Get up and running with Elixir UI in just a few simple steps. No
                              complex setup or dependencies required.
                         </p>
                    </div>

                    <div className="space-y-6">
                         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              <div className="bg-card/50 space-y-4 rounded-xl border p-6">
                                   <div className="flex items-center gap-3">
                                        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                                             <Code className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-semibold">Prerequisites</h3>
                                   </div>
                                   <ul className="text-muted-foreground space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                             <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                                             React 18+ or Next.js 13+
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                                             TypeScript (recommended)
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                                             Tailwind CSS
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                                             Lucide React (for icons)
                                        </li>
                                   </ul>
                              </div>

                              <div className="bg-card/50 space-y-4 rounded-xl border p-6">
                                   <div className="flex items-center gap-3">
                                        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                                             <Download className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-semibold">Installation</h3>
                                   </div>
                                   <div className="space-y-3 text-sm">
                                        <div>
                                             <p className="text-foreground mb-1 font-medium">
                                                  1. Copy Component Code
                                             </p>
                                             <p className="text-muted-foreground">
                                                  Navigate to any component page and copy the source
                                                  code.
                                             </p>
                                        </div>
                                        <div>
                                             <p className="text-foreground mb-1 font-medium">
                                                  2. Paste in Your Project
                                             </p>
                                             <p className="text-muted-foreground">
                                                  Create a new file and paste the component code.
                                             </p>
                                        </div>
                                        <div>
                                             <p className="text-foreground mb-1 font-medium">
                                                  3. Customize & Use
                                             </p>
                                             <p className="text-muted-foreground">
                                                  Modify the component to match your design and
                                                  import it.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="bg-card/50 rounded-xl border p-6">
                              <div className="mb-4 flex items-center gap-3">
                                   <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                                        <Sparkles className="h-5 w-5" />
                                   </div>
                                   <h3 className="font-semibold">Quick Example</h3>
                              </div>
                              <div className="space-y-3 text-sm">
                                   <p className="text-muted-foreground">
                                        Here's how easy it is to use an Elixir UI component:
                                   </p>
                                   <div className="bg-muted rounded-lg p-4 font-mono text-xs">
                                        <div className="text-muted-foreground">
                                             // 1. Copy component code from docs
                                        </div>
                                        <div className="text-muted-foreground">
                                             // 2. Create MyComponent.tsx
                                        </div>
                                        <div className="text-foreground">
                                             import MyComponent from './MyComponent'
                                        </div>
                                        <div className="text-foreground">// 3. Use in your app</div>
                                        <div className="text-foreground">&lt;MyComponent /&gt;</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* All Components Section */}
               <div className="space-y-8" id="all-components">
                    <div className="space-y-4">
                         <h2 className="text-3xl font-bold tracking-tight">All Components</h2>
                         <p className="text-muted-foreground max-w-2xl text-sm">
                              Explore our collection of carefully crafted components. Each component
                              is designed to be copy-paste ready with full customization control.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                         {componentsList.map(component => (
                              <div
                                   key={component.value}
                                   className="group bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-primary/5 relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
                              >
                                   {/* Background gradient effect */}
                                   <div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                   <div className="relative space-y-4">
                                        {/* Header */}
                                        <div className="flex items-start justify-between">
                                             <div className="flex items-center gap-3">
                                                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
                                                       {component.value === 'teammates' && (
                                                            <Users className="h-5 w-5" />
                                                       )}
                                                       {component.value === 'liquid-frame' && (
                                                            <Eye className="h-5 w-5" />
                                                       )}
                                                       {component.value === 'showcase' && (
                                                            <Star className="h-5 w-5" />
                                                       )}
                                                       {component.value === 'card' && (
                                                            <MousePointer className="h-5 w-5" />
                                                       )}
                                                       {component.value === 'sidemenu' && (
                                                            <Layers className="h-5 w-5" />
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
                                                  <span className="bg-primary/10 text-primary border-primary/20 rounded-full border px-2.5 py-1 text-xs font-semibold">
                                                       NEW
                                                  </span>
                                             )}
                                        </div>

                                        {/* Component links */}
                                        {component.children && component.children.length > 0 ? (
                                             <div className="space-y-2">
                                                  <div className="bg-border h-px" />
                                                  <ul className="space-y-2">
                                                       {component.children.map(child => (
                                                            <li key={child.value}>
                                                                 <Link
                                                                      href={child.url}
                                                                      className="group/link text-muted-foreground hover:bg-muted/50 hover:text-foreground flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all duration-200"
                                                                 >
                                                                      <span className="flex items-center gap-2">
                                                                           <div className="bg-muted-foreground/40 h-1.5 w-1.5 rounded-full" />
                                                                           {child.label}
                                                                      </span>
                                                                      <div className="flex items-center gap-2">
                                                                           {child.new && (
                                                                                <span className="bg-primary/10 text-primary rounded-full px-1.5 py-0.5 text-xs font-semibold">
                                                                                     NEW
                                                                                </span>
                                                                           )}
                                                                           <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:opacity-100" />
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
                                                       <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:opacity-100" />
                                                  </Link>
                                             </div>
                                        )}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>

               {/* FAQ Section */}
               <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">
                         Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                         <AccordionItem value="item-1">
                              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                   Is this a component library?
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                   No. Elixir UI is a collection of re-usable components that you
                                   can copy and paste into your projects, giving you full control
                                   over the code.
                              </AccordionContent>
                         </AccordionItem>
                         <AccordionItem value="item-2">
                              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                   Can I use this in my project?
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                   Yes. It is free to use for personal and commercial projects. No
                                   attribution is required.
                              </AccordionContent>
                         </AccordionItem>
                         <AccordionItem value="item-3">
                              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                   Do I have to install any packages?
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                   No, you don&apos;t install Elixir UI as a package. Each component
                                   is self-contained and you just copy the code into your project.
                              </AccordionContent>
                         </AccordionItem>
                    </Accordion>
               </div>
          </div>
     )
}
