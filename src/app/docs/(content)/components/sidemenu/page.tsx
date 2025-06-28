import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import SideMenuDemo from './sidemenu'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'
import { Steppers } from '@/components/ui/steppers'

const SideMenuPage = () => {
     return (
          <PageTemplate
               title="SideMenu"
               className="md:mt-5"
               description="The SideMenu component is a compact and interactive sidebar menu, ideal for responsive navigation. It offers a toggleable design with smooth animations, making it a versatile choice for modern web applications."
          >
               <section className="space-y-8">
                    <PreviewCodeCard path="src/registry/default/sidemenu/components/sidemenu.tsx">
                         <SideMenuDemo />
                    </PreviewCodeCard>

                    <section>
                         <PageSubTitle>Installation</PageSubTitle>
                         <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
                              Follow the steps below to add the{' '}
                              <span className="font-bold">Liquid Frame Component</span> to your
                              project.
                         </p>

                         <Tabs defaultValue="cli" className={cn('mb-5 md:mb-10')}>
                              <TabsList className="w-32 border bg-transparent">
                                   <TabsTrigger
                                        value="cli"
                                        className="cursor-pointer border-none bg-transparent text-sm/6 font-semibold dark:bg-transparent"
                                   >
                                        CLI
                                   </TabsTrigger>
                                   <TabsTrigger
                                        value="manual"
                                        className="cursor-pointer border-none bg-transparent text-sm/6 font-semibold dark:bg-transparent"
                                   >
                                        Manual
                                   </TabsTrigger>
                              </TabsList>

                              <TabsContent value="cli" className="mt-4 rounded-md">
                                   <Steppers
                                        className="mb-5 md:mb-10"
                                        steps={[
                                             {
                                                  step: '+',
                                                  title: 'Run the following command in the terminal.',
                                                  codePath:
                                                       'src/registry/default/sidemenu/usage/cli/sidemenu-cli.md',
                                             },
                                        ]}
                                   />
                              </TabsContent>

                              <TabsContent value="manual" className="mt-4 rounded-md">
                                   <Steppers
                                        className="mb-5 md:mb-10"
                                        steps={[
                                             {
                                                  step: 1,
                                                  title: 'Install the dependencies',
                                                  code: `pnpm i framer-motion`,
                                                  isInstallStep: true,
                                             },
                                             {
                                                  step: 2,
                                                  title: 'Add the button component to your project in',
                                                  codeDirectory: 'src/components/ui/button.tsx',
                                                  codePath:
                                                       'src/registry/default/sidemenu/components/ui/button.tsx',
                                             },
                                             {
                                                  step: 3,
                                                  title: 'Add the nav component to your project in',
                                                  codeDirectory: 'src/components/ui/nav.tsx',
                                                  codePath:
                                                       'src/registry/default/sidemenu/components/ui/nav.tsx',
                                             },
                                             {
                                                  step: 4,
                                                  title: 'Add the sidemenu component to your project in',
                                                  codeDirectory: 'src/components/sidemenu.tsx',
                                                  codePath:
                                                       'src/registry/default/sidemenu/components/sidemenu.tsx',
                                             },
                                        ]}
                                   />
                              </TabsContent>
                         </Tabs>
                    </section>

                    <section>
                         <PageSubTitle>Usage</PageSubTitle>
                         <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
                              Follow the steps below to add the{' '}
                              <span className="font-bold">SideMenu Component</span> to your project.
                         </p>

                         <Steppers
                              className="mb-5 md:mb-10"
                              steps={[
                                   {
                                        step: 1,
                                        title: 'Add the import statement for the component',
                                        code: `import SideMenu from "@/components/sidemenu";`,
                                   },
                                   {
                                        step: 2,
                                        title: 'Import the component in your project'
                                        codePath:
                                             'src/registry/default/sidemenu/usage/example/sidemenu-example.md',
                                   },
                              ]}
                         />
                    </section>
               </section>
          </PageTemplate>
     )
}

export default SideMenuPage
