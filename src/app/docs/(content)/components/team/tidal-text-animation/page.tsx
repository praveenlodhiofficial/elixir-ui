import React from 'react'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'
import { Steppers } from '@/components/ui/steppers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { generateComponentMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import TidalTextAnimationPreview from './preview/page'

export const metadata: Metadata = generateComponentMetadata('teammates-v1')

const TidalTextAnimation = () => {
     return (
          <PageTemplate
               title="Tidal Text Animation"
               className="md:mt-5"
               description="Tidal Text Animation component is an interactive component where hovering over a team member's image reveals their name rising from the bottom, mimicking a wave motion. In the default state, the team name is displayed"
          >
               <section className="space-y-8">
                    <PreviewCodeCard path="src/registry/components/tidal-text-animation.tsx">
                         <TidalTextAnimationPreview />
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
                                                       'src/registry/cli/tidal-text-animation-cli.txt',
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
                                                  code: `pnpm i gsap @types/gsap`,
                                             },
                                             {
                                                  step: 2,
                                                  title: 'Add the tidal text animation component to your project in',
                                                  codeDirectory: 'src/components/TidalTextAnimation.tsx',
                                                  codePath:
                                                       'src/registry/components/tidal-text-animation.tsx',
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
                              <span className="font-bold">Tidal Text Animation Component</span> to your
                              project.
                         </p>

                         <Steppers
                              className="mb-5 md:mb-10"
                              steps={[
                                   {
                                        step: 1,
                                        title: 'Add the import statement for the component',
                                        code: `import TidalTextAnimation from "@/components/tidal-text-animation";`,
                                   },
                                   {
                                        step: 2,
                                        title: 'Import the component in your project',
                                        codePath:
                                             'src/registry/usage/tidal-text-animation-usage.txt',
                                   },
                              ]}
                         />
                    </section>
               </section>
          </PageTemplate>
     )
}

export default TidalTextAnimation
