import React from 'react'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'
import { Steppers } from '@/components/ui/steppers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import Teammatesv2Demo from './preview/page'
import { generateComponentMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import ProfileLooperPreview from './preview/page'

export const metadata: Metadata = generateComponentMetadata('teammates-v2')

const TeammatesPage = () => {
     return (
          <PageTemplate
               title="Profile Looper"
               className="md:mt-5"
               description="The Profile Looper is a dynamic component that cycles through member names, highlighting each at fixed intervals while displaying their designation and company. Hovering over a name restarts the cycle from that point, creating an interactive and seamless looping effect."
          >
               <section className="space-y-8">
                    <PreviewCodeCard path="src/registry/components/profile-looper.tsx">
                         <ProfileLooperPreview />
                    </PreviewCodeCard>

                    <section>
                         <PageSubTitle>Installation</PageSubTitle>
                         <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
                              Follow the steps below to add the{' '}
                              <span className="font-bold">Profile Looper</span> to your
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
                                                       'src/registry/cli/profile-looper-cli.txt',
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
                                                  title: 'Import the icons library file in your project',
                                                  codeDirectory: 'src/lib/icons.ts',
                                                  codePath:
                                                       'src/registry/lib/icons.ts',
                                             },
                                             {
                                                  step: 2,
                                                  title: 'Add the icon component in your project',
                                                  codeDirectory: 'src/components/ui/icon.tsx',
                                                  codePath:
                                                       'src/registry/ui/icon.tsx',
                                             },
                                             {
                                                  step: 3,
                                                  title: 'Add the profile looper component to your project in',
                                                  codeDirectory: 'src/components/ProfileLooper.tsx',
                                                  codePath:
                                                       'src/registry/components/profile-looper.tsx',
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
                                        code: `import ProfileLooper from "@/components/ProfileLooper";`,
                                   },
                                   {
                                        step: 2,
                                        title: 'Import the component in your project',
                                        codePath:
                                             'src/registry/usage/profile-looper-usage.txt',
                                   },
                              ]}
                         />
                    </section>
               </section>
          </PageTemplate>
     )
}

export default TeammatesPage
