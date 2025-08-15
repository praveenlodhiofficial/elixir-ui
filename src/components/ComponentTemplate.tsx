import React from 'react'
import { Steppers } from '@/components/ui/steppers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { PageSubTitle, PageTemplate } from '@/components/docs/page-template'
import PreviewCodeCard from '@/components/docs/preview-code-card'

interface Step {
  step: string | number
  title: string
  code?: string
  codePath?: string
  codeDirectory?: string
}

interface InstallationData {
  cliSteps: Step[]
  manualSteps: Step[]
}

interface UsageData {
  steps: Step[]
}

interface ComponentTemplateProps {
  title: string
  description: string
  className?: string
  componentPath: string
  previewComponent: React.ReactNode
  installation: InstallationData
  usage: UsageData
}

const ComponentTemplate: React.FC<ComponentTemplateProps> = ({
  title,
  description,
  className = "md:mt-5",
  componentPath,
  previewComponent,
  installation,
  usage
}) => {
  return (
    <PageTemplate
      title={title}
      className={className}
      description={description}
    >
      <section className="space-y-8">
        <PreviewCodeCard path={componentPath}>
          {previewComponent}
        </PreviewCodeCard>

        <section>
          <PageSubTitle>Installation</PageSubTitle>
          <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
            Follow the steps below to add the{' '}
            <span className="font-bold">{title}</span> to your project.
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
                steps={installation.cliSteps}
              />
            </TabsContent>

            <TabsContent value="manual" className="mt-4 rounded-md">
              <Steppers
                className="mb-5 md:mb-10"
                steps={installation.manualSteps}
              />
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <PageSubTitle>Usage</PageSubTitle>
          <p className="pb-2 text-gray-800 md:pb-5 dark:text-gray-200">
            Follow the steps below to add the{' '}
            <span className="font-bold">{title}</span> to your project.
          </p>

          <Steppers
            className="mb-5 md:mb-10"
            steps={usage.steps}
          />
        </section>
      </section>
    </PageTemplate>
  )
}

export default ComponentTemplate
