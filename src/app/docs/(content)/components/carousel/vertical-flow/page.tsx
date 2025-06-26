import React from 'react'
import { Steppers } from '@/components/ui/steppers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import VerticalFlowExample from './vertical-flow-example'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'

const VerticalFlowPage = () => {
     return (
          <PageTemplate
               title="Vertical Flow Carousel"
               className="md:mt-5"
               description="Vertical Flow is a carousel component that allows you to create a vertical flow of content where it switches between cards at a fixed interval."
          >
               <section className="space-y-8">
                    <PreviewCodeCard path="src/registry/default/carousel/components/vertical-flow.tsx">
                         <VerticalFlowExample />
                    </PreviewCodeCard>

                    <section>
                         <PageSubTitle>Installation</PageSubTitle>
                         <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
                              Follow the steps below to add the{' '}
                              <span className="font-bold">Vertical Flow Carousel</span> to your
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
                                                       'src/registry/default/carousel/usage/cli/vertical-flow-cli.md',
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
                                                  code: `pnpm i motion react-icons`,
                                                  isInstallStep: true,
                                             },
                                             {
                                                  step: 2,
                                                  title: 'Add the utils to your project in',
                                                  codeDirectory: 'src/lib/utils.ts',
                                                  codePath:
                                                       'src/lib/utils.ts',
                                             },
                                             {
                                                  step: 3,
                                                  title: 'Add the vertical flow carousel to your project in',
                                                  codeDirectory: 'src/components/vertical-flow-carousel.tsx',
                                                  codePath:
                                                       'src/registry/default/carousel/components/vertical-flow.tsx',
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
                              <span className="font-bold">Liquid Frame Component</span> to your
                              project.
                         </p>

                         <Steppers
                              className="mb-5 md:mb-10"
                              steps={[
                                   {
                                        step: 1,
                                        title: 'Import the component',
                                        code: `import VerticalFlow from '@/components/elixir-ui/vertical-flow-carousel';`,
                                   },
                                   {
                                        step: 2,
                                        title: 'Add the component to your project',
                                        codePath:
                                             'src/registry/default/carousel/usage/example/vertical-flow-example.md',
                                   },
                              ]}
                         />
                    </section>
               </section>
          </PageTemplate>
     )
}

export default VerticalFlowPage
