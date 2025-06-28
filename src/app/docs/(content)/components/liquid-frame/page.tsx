import React from 'react'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'
import { Steppers } from '@/components/ui/steppers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import LiquidFrame from './preview/page'

const LiquidFramePage = () => {
     return (
          <PageTemplate
               title="Liquid Frame"
               className="md:mt-5"
               description="Liquid Frame adds a fluid, interactive water ripple effect to images using Three.js. It maintains aspect ratio, supports mouse interaction, and is styled with Tailwind CSS for a modern, magical UI touch."
          >
               <section className="space-y-8">
                    <PreviewCodeCard path="src/registry/components/liquid-frame.tsx">
                         <LiquidFrame />
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
                                                       'src/registry/cli/liquid-frame-cli.txt',
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
                                                  code: `pnpm i three @types/three`,
                                             },
                                             {
                                                  step: 2,
                                                  title: 'Add shaders logic to your project in',
                                                  codeDirectory: 'src/lib/liquid-frame.ts',
                                                  codePath:
                                                       'src/registry/lib/liquid-frame.ts',
                                             },
                                             {
                                                  step: 3,
                                                  title: 'Add the liquid frame component to your project in',
                                                  codeDirectory: 'src/components/liquid-frame.tsx',
                                                  codePath:
                                                       'src/registry/components/liquid-frame.tsx',
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
                                        title: 'Add the import statement for the component',
                                        code: `import LiquidFrame from "@/components/liquid-frame";`,
                                   },
                                   {
                                        step: 2,
                                        title: 'Import the component in your project',
                                        codePath:
                                             'src/registry/usage/liquid-frame-usage.txt',
                                   },
                              ]}
                         />
                    </section>
               </section>
          </PageTemplate>
     )
}

export default LiquidFramePage
