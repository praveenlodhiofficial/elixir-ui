import React from 'react'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'
import { Steppers } from '@/components/ui/steppers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import SplitViewPanelPreview from '@/app/docs/(content)/components/card/split-view-panel/preview/page'
import { generateComponentMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateComponentMetadata('split-view-panel')

const VanillaTiltCardPage = () => {
     return (
          <PageTemplate
               title="Split View Panel"
               className="md:mt-5"
               description={`A React component library for creating stunning split view panel using SplitViewPanel. Wrap anything inside the ${(<strong>SplitViewPanel</strong>)} tag to add dynamic and interactive visuals to your UI.`}
          >
               <section className="space-y-8">
                    <PreviewCodeCard path="src/registry/blocks/split-view-panel.tsx">
                         <SplitViewPanelPreview />
                    </PreviewCodeCard>

                    <section>
                         <PageSubTitle>Installation</PageSubTitle>
                         <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
                              Follow the steps below to add the{' '}
                              <span className="font-bold">Split View Panel Component</span> to your
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
                                                       'src/registry/cli/split-view-panel-cli.txt',
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
                                                  code: `pnpm i lucide-react react-icons clsx tailwind-merge`,
                                             },
                                             {
                                                  step: 2,
                                                  title: 'Add the Split View Panel component to your project in',
                                                  codeDirectory:
                                                       'src/components/split-view-panel.tsx',
                                                  codePath:
                                                       'src/registry/blocks/split-view-panel.tsx',
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
                              <span className="font-bold">Split View Panel Component</span> to your
                              project.
                         </p>

                         <Steppers
                              className="mb-5 md:mb-10"
                              steps={[
                                   {
                                        step: 1,
                                        title: 'Add the import statement for the component',
                                        code: `import SplitViewPanel from "@/components/split-view-panel";`,
                                   },
                                   {
                                        step: 2,
                                        title: 'Import the component in your project',
                                        codePath: 'src/registry/usage/split-view-panel-usage.txt',
                                   },
                              ]}
                         />
                    </section>
               </section>
          </PageTemplate>
     )
}

export default VanillaTiltCardPage
