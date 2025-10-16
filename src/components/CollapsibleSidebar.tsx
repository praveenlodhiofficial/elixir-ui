"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Home, Info, Mail, ChevronRight } from "lucide-react";
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuItem,
   SidebarMenuButton,
   SidebarMenuSub,
   SidebarMenuSubItem,
   SidebarMenuSubButton,
   SidebarSeparator,
   useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SiPeerlist } from "react-icons/si";

export function CollapsibleSidebar() {
   const { openMobile, setOpenMobile } = useSidebar();

   return (
      <>
         {/* Backdrop */}
         {openMobile && (
            <div
               className="fixed inset-0 z-[99] bg-black/5 lg:hidden"
               onClick={() => setOpenMobile(false)}
            />
         )}

         {/* Sidebar */}
         <Sidebar
            className={`fixed top-0 left-0 z-[100] h-screen w-64 transition-transform duration-300 lg:hidden ${
               openMobile ? "translate-x-0" : "-translate-x-full"
            }`}
         >
            <SidebarHeader>
               <div className="flex items-center gap-2 px-2 py-2">
                  <Image
                     src="/logo/elixir-logo-light.png"
                     alt="Elixir UI"
                     width={32}
                     height={32}
                     className="size-5 invert-0 md:size-7 lg:size-8 dark:invert-100"
                     style={{ objectFit: "contain" }}
                  />
                  <span className="text-xl font-bold md:text-lg lg:text-xl">Elixir UI</span>
               </div>
            </SidebarHeader>

            <SidebarContent>
               <SidebarGroup>
                  <SidebarGroupLabel className="text-[13px]">Navigation</SidebarGroupLabel>
                  <SidebarGroupContent>
                     <SidebarMenu className="space-y-[-4px]">
                        <SidebarMenuItem>
                           <SidebarMenuButton asChild>
                              <Link href="/">
                                 <Home className="size-3 md:size-4" />
                                 <span>Home</span>
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                           <SidebarMenuButton asChild>
                              <Link href="/about">
                                 <Info className="size-3 md:size-4" />
                                 <span>About</span>
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                           <SidebarMenuButton asChild>
                              <Link href="/contact">
                                 <Mail className="size-3 md:size-4" />
                                 <span>Contact</span>
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>

               <SidebarSeparator />

               <SidebarGroup>
                  <SidebarGroupContent>
                     <SidebarMenu>
                        <Collapsible>
                           <SidebarMenuItem>
                              <CollapsibleTrigger asChild>
                                 <SidebarGroupLabel className="flex items-center justify-between text-[13px]">
                                    <span>Documentation</span>
                                    <ChevronRight className="ml-auto h-4 w-4 scale-90 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                 </SidebarGroupLabel>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                 <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs">
                                             <span>Getting Started</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/installation">
                                             <span>Installation</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/usage">
                                             <span>Usage Guide</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                 </SidebarMenuSub>
                              </CollapsibleContent>
                           </SidebarMenuItem>
                        </Collapsible>
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>

               <SidebarSeparator />

               <SidebarGroup>
                  {/* <SidebarGroupLabel className='text-xxs md:text-xs'>Components</SidebarGroupLabel> */}
                  <SidebarGroupContent>
                     <SidebarMenu>
                        <Collapsible defaultOpen={true}>
                           <SidebarMenuItem>
                              <CollapsibleTrigger asChild>
                                 <SidebarGroupLabel className="flex items-center justify-between text-[13px]">
                                    <span>UI Components</span>
                                    <ChevronRight className="ml-auto h-4 w-4 scale-90 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                 </SidebarGroupLabel>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                 <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/action-input">
                                             <span>Action Input</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/customer-stories">
                                             <span>Customer Stories</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/liquid-frame">
                                             <span>Liquid Frame</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/menu-toggle-button">
                                             <span>Menu Toggle Button</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/navigational-card">
                                             <span>Navigational Card</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/orbital-flow">
                                             <span>Orbital Flow</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/showcase">
                                             <span>Showcase</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/sidemenu">
                                             <span>Side Menu</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/tidal-text-animation">
                                             <span>Tidal Text Animation</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/components/vanilla-tilt-card">
                                             <span>Vanilla Tilt Card</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                 </SidebarMenuSub>
                              </CollapsibleContent>
                           </SidebarMenuItem>
                        </Collapsible>
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>

               <SidebarSeparator />

               <SidebarGroup>
                  <SidebarGroupContent>
                     <SidebarMenu>
                        <Collapsible>
                           <SidebarMenuItem>
                              <CollapsibleTrigger asChild>
                                 <SidebarGroupLabel className="flex items-center justify-between text-[13px]">
                                    <span>Website Templates</span>
                                    <ChevronRight className="ml-auto h-4 w-4 scale-90 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                 </SidebarGroupLabel>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                 <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/templates/portfolio">
                                             <span>Portfolio Template</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                       <SidebarMenuSubButton asChild>
                                          <Link href="/docs/templates/parabol-sass">
                                             <span>Parabol SaaS Template</span>
                                          </Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                 </SidebarMenuSub>
                              </CollapsibleContent>
                           </SidebarMenuItem>
                        </Collapsible>
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>

               <SidebarSeparator />

               <SidebarGroup>
                  {/* <SidebarGroupLabel className='text-xxs md:text-xs'>Social</SidebarGroupLabel> */}
                  <SidebarGroupContent>
                     <SidebarMenu className="grid grid-cols-2 gap-2">
                        <SidebarMenuItem>
                           <SidebarMenuButton asChild>
                              <Link href="https://x.com/praveenlodhi99" target="_blank">
                                 <FaXTwitter className="size-4 scale-95" />
                                 <span>Twitter</span>
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                           <SidebarMenuButton asChild>
                              <Link href="https://github.com/praveenlodhiofficial" target="_blank">
                                 <FaGithub className="size-4" />
                                 <span>GitHub</span>
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                           <SidebarMenuButton asChild>
                              <Link
                                 href="https://www.linkedin.com/in/praveenlodhiofficial"
                                 target="_blank"
                              >
                                 <FaLinkedinIn className="size-4 scale-95" />
                                 <span>LinkedIn</span>
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                           <SidebarMenuButton asChild>
                              <Link href="https://peerlist.io/praveenlodhi99" target="_blank">
                                 <SiPeerlist className="size-4 scale-95" />
                                 <span>Peerlist</span>
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
               <div className="ml-2 flex items-center p-2 text-[15px]">
                  Created by&nbsp;
                  <Link
                     href="https://portfolio.praveenlodhi.me"
                     target="_blank"
                     className="font-bold underline"
                  >
                     Praveen Lodhi
                  </Link>
               </div>
            </SidebarFooter>
         </Sidebar>
      </>
   );
}
