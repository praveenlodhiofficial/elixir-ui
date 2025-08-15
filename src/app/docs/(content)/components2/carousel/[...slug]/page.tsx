import ComponentViewer from '@/components/ComponentViewer'
import { readUsageFile } from '@/lib/file-utils'
import carouselData from '@/app/docs/(content)/data/carousel.json'

interface CarouselPageProps {
    params: {
        slug: string[]
    }
}

export default async function CarouselPage({ params }: CarouselPageProps) {
    const slug = (await params).slug[0] || '1'
    
    // Find the carousel data based on slug
    const carouselKey = Object.keys(carouselData).find(
        key => carouselData[key as keyof typeof carouselData].slug === slug
    )
    
    // Default to carousel1 if no match found
    const carousel = carouselKey ? carouselData[carouselKey as keyof typeof carouselData] : carouselData.carousel1
    
    // Dynamically import the preview component
    let PreviewComponent
    try {
        const componentModule = await import(`@/app/docs/(content)/preview/${carouselKey || 'carousel1'}`)
        PreviewComponent = componentModule[carousel.previewComponent as keyof typeof componentModule]
    } catch (error) {
        console.error(`Failed to load preview component: ${carousel.previewComponent}`)
        // Fallback to a default component or show error
        PreviewComponent = () => <div>Preview component not found</div>
    }
    
    // Read the file contents
    const codePath = await readUsageFile(carousel.codePath)
    const usagePath = await readUsageFile(carousel.usagePath)

    return (
        <ComponentViewer
            preview={<PreviewComponent />}
            codePath={codePath}
            usagePath={usagePath}
            cliCommands={carousel.cliCommand}
        />
    )
}


