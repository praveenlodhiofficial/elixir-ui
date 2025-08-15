import React from 'react'
import { generateComponentMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import ComponentTemplate from '@/components/ComponentTemplate'
import { Carousel1Preview } from '@/app/docs/(content)/preview/carousel1'
import Carousel2Preview from '@/app/docs/(content)/preview/carousel2'
import carouselData from '@/app/docs/(content)/data/carousel.json'
import { generateComponentMapping } from '@/lib/component-mapper'

// Dynamic metadata generation
export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const componentName = params.slug[0] || 'carousel'
  return generateComponentMetadata(componentName)
}

// Automated component mapping - no more manual updates needed!
const carouselComponents = generateComponentMapping(
  carouselData,
  {
    carousel1: Carousel1Preview,
    carousel2: Carousel2Preview
  }
)

// Dynamic page component
export default function CarouselPage({ params }: { params: { slug: string[] } }) {
  const componentKey = params.slug[0] || '1'
  const component = carouselComponents[componentKey as keyof typeof carouselComponents]

  if (!component) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Component Not Found</h1>
          <p className="text-gray-600">The carousel component "{componentKey}" could not be found.</p>
          <p className="text-sm text-gray-500 mt-2">Available components: 1, 2</p>
        </div>
      </div>
    )
  }

  return (
    <ComponentTemplate 
      title={component.title}
      description={component.description}
      componentPath={component.componentPath}
      previewComponent={component.previewComponent}
      installation={component.installation}
      usage={component.usage}
    />
  )
} 
