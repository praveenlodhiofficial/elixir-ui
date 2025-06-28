import React from 'react'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'
import { Steppers } from '@/components/ui/steppers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import Teammatesv2Demo from './teammates-v2-demo'

const TeammatesPage = () => {
     return (
          <PageTemplate
               title="Teammates v2.0.0"
               className="md:mt-5"
               description="The Teammates-v2.0.0 is a responsive React component for team rosters. List with profile images on large screens, stacked cards on small screens. Includes social links and Framer Motion animations."
          >
               <section className="space-y-8">
                    <PreviewCodeCard path="src/registry/default/teammates/components/teammates-v2.tsx">
                         <Teammatesv2Demo />
                    </PreviewCodeCard>

                    <section>
                         <PageSubTitle>Installation</PageSubTitle>
                         <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
                              Follow the steps below to add the{' '}
                              <span className="font-bold">Teammates Component</span> to your
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
                                                       'src/registry/default/teammates/usage/cli/teammates-v2-cli.md',
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
                                                  title: 'Add the icons component in your project',
                                                  codeDirectory: 'src/components/ui/icons.tsx',
                                                  codePath:
                                                       'src/registry/default/teammates/components/ui/icons.tsx',
                                             },
                                             {
                                                  step: 3,
                                                  title: 'Add the teammates component to your project in',
                                                  codeDirectory: 'src/components/teammates-v2.tsx',
                                                  codePath:
                                                       'src/registry/default/teammates/components/teammates-v2.tsx',
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
                              <span className="font-bold">Teammates Component</span> to your
                              project.
                         </p>

                         <Steppers
                              className="mb-5 md:mb-10"
                              steps={[
                                   {
                                        step: 1,
                                        title: 'Add the import statement for the component',
                                        code: `import TeamMates from "@/components/teammates-v2";`,
                                   },
                                   {
                                        step: 2,
                                        title: 'Import the component in your project'
                                        codePath:
                                             'src/registry/default/teammates/usage/example/teammates-v2-example.md',
                                   },
                              ]}
                         />
                    </section>
               </section>
          </PageTemplate>
     )
}

export default TeammatesPage
