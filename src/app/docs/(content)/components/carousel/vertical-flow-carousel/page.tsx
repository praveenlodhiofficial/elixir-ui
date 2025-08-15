import React from 'react'
import VerticalFlowCarouselPreview from './preview/page'
import { generateComponentMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import ComponentTemplate from '@/components/ComponentTemplate'
export const metadata: Metadata = generateComponentMetadata('vertical-flow-carousel')

const VerticalFlowPage = () => {
  const componentData = {
    title: "Vertical Flow Carousel",
    description: "Vertical Flow is a carousel component that allows you to create a vertical flow of content where it switches between cards at a fixed interval.",
    componentPath: "src/registry/components/vertical-flow-carousel.tsx",
    previewComponent: <VerticalFlowCarouselPreview />,
    installation: {
      cliSteps: [
        {
          step: '+',
          title: 'Run the following command in the terminal.',
          codePath: 'src/registry/cli/vertical-flow-carousel-cli.txt',
        },
      ],
      manualSteps: [
        {
          step: 1,
          title: 'Install the dependencies',
          code: `pnpm i motion react-icons`,
        },
        {
          step: 2,
          title: 'Add the utils to your project in',
          codeDirectory: 'src/lib/utils.ts',
          codePath: 'src/registry/lib/utils.ts',
        },
        {
          step: 3,
          title: 'Add the vertical flow carousel to your project in',
          codeDirectory: 'src/registry/components/vertical-flow-carousel.tsx',
          codePath: 'src/registry/components/vertical-flow-carousel.tsx',
        },
      ],
    },
    usage: {
      steps: [
        {
          step: 1,
          title: 'Add the import statement for the component',
          code: `import VerticalFlowCarousel from '@/components/vertical-flow-carousel';`,
        },
        {
          step: 2,
          title: 'Import the component in your project',
          codePath: 'src/registry/usage/vertical-flow-carousel-usage.txt',
        },
      ],
    },
  }

  return <ComponentTemplate 
  title="Vertical Flow Carousel"
  description="Vertical Flow is a carousel component that allows you to create a vertical flow of content where it switches between cards at a fixed interval."
  componentPath="src/registry/components/vertical-flow-carousel.tsx"
  previewComponent={<VerticalFlowCarouselPreview />}
  installation={componentData.installation}
  usage={componentData.usage}
  />
}

export default VerticalFlowPage
