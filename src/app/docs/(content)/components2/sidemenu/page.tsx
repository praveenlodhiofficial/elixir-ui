import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import SideMenuPreview from './preview/page'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'
import { Steppers } from '@/components/ui/steppers'
import { generateComponentMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateComponentMetadata('sidemenu')

const SideMenuPage = () => {
     return (
          <PageTemplate
               title="SideMenu"
               className="md:mt-5"
               description="The SideMenu component is a compact and interactive sidebar menu, ideal for responsive navigation. It offers a toggleable design with smooth animations, making it a versatile choice for modern web applications."
          >
               <section className="space-y-8">
                    <PreviewCodeCard path="src/registry/components/sidemenu.tsx">
                         <SideMenuPreview />
                    </PreviewCodeCard>

                    <section>
                         <PageSubTitle>Installation</PageSubTitle>
                         <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
                              Follow the steps below to add the{' '}
                              <span className="font-bold">SideMenu Component</span> to your
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
                                                       'src/registry/cli/sidemenu-cli.txt',
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
                                             },
                                             {
                                                  step: 2,
                                                  title: 'Add the utils to your project in',
                                                  codeDirectory: 'src/registry/lib/utils.ts',
                                                  codePath: `src/registry/lib/utils.ts`,
                                             },
                                             {
                                                  step: 3,
                                                  title: 'Add the sidemenu button component to your project in',
                                                  codeDirectory: 'src/components/ui/sidemenu-button.tsx',
                                                  codePath:
                                                       'src/registry/ui/sidemenu-button.tsx',
                                             },
                                             {
                                                  step: 4,
                                                  title: 'Add the nav component to your project in',
                                                  codeDirectory: 'src/components/ui/sidemenu-nav.tsx',
                                                  codePath:
                                                       'src/registry/ui/sidemenu-nav.tsx',
                                             },
                                             {
                                                  step: 5,
                                                  title: 'Add the sidemenu component to your project in',
                                                  codeDirectory: 'src/components/sidemenu.tsx',
                                                  codePath:
                                                       'src/registry/components/sidemenu.tsx',
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
                                        title: 'Import the component in your project and use it',
                                        codePath:
                                             'src/registry/usage/sidemenu-usage.txt',
                                   },
                              ]}
                         />
                    </section>
               </section>
          </PageTemplate>
     )
}

export default SideMenuPage
