import React from 'react'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'
import { Steppers } from '@/components/ui/steppers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import Showcase from './showcase'

const ShowcasePage = () => {
     return (
          <PageTemplate
               title="Showcase"
               className="md:mt-5"
               description="A React Three Fiber component that renders a 3D hollow cylinder with a custom image texture and subtle rotation. Perfect for dynamic 3D showcases."
          >
               <section className="space-y-8">
                    <PreviewCodeCard path="src/registry/default/showcase/components/showcase.tsx">
                         <Showcase />
                    </PreviewCodeCard>

                    <section>
                         <PageSubTitle>Installation</PageSubTitle>
                         <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
                              Follow the steps below to add the{' '}
                              <span className="font-bold">Showcase Component</span> to your project.
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
                                                       'src/registry/default/showcase/usage/showcase-cli.md',
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
                                                  code: `pnpm i three @types/three @react-three/postprocessing @react-three/drei @react-three/fiber`,
                                                  isInstallStep: true,
                                             },
                                             {
                                                  step: 2,
                                                  title: 'Add the showcase component to your project in',
                                                  codeDirectory: 'src/components/showcase.tsx',
                                                  codePath:
                                                       'src/registry/default/showcase/components/showcase.tsx',
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
                              <span className="font-bold">Showcase Component</span> to your project.
                         </p>

                         <Steppers
                              className="mb-5 md:mb-10"
                              steps={[
                                   {
                                        step: 1,
                                        title: 'Import the component',
                                        code: `import Showcase from "@/components/showcase";`,
                                   },
                                   {
                                        step: 2,
                                        title: 'Add the component to your project',
                                        codePath:
                                             'src/registry/default/showcase/usage/showcase-example.md',
                                   },
                              ]}
                         />
                    </section>
               </section>
          </PageTemplate>
     )
}

export default ShowcasePage
