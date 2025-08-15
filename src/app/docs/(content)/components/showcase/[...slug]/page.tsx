import ComponentViewer from '@/components/ComponentViewer'
import { readUsageFile } from '@/lib/file-utils'
import showcaseData from '@/app/docs/(content)/data/showcase.json'

interface ShowcasePageProps {
    params: Promise<{
        slug: string[]
    }>
}

export default async function ShowcasePage({ params }: ShowcasePageProps) {
    const { slug } = await params
    const slugValue = slug[0] || '1'
    
    // Find the showcase data based on slug
    const showcaseKey = Object.keys(showcaseData).find(
        key => showcaseData[key as keyof typeof showcaseData].slug === slugValue
    )
    
    // Default to showcase1 if no match found
    const showcase = showcaseKey ? showcaseData[showcaseKey as keyof typeof showcaseData] : showcaseData.showcase1
    
    // Dynamically import the preview component
    let PreviewComponent
    try {
        const componentModule = await import(`@/app/docs/(content)/preview/${showcaseKey || 'showcase1'}`)
        PreviewComponent = componentModule[showcase.previewComponent as keyof typeof componentModule]
    } catch (error) {
        console.error(`Failed to load preview component: ${showcase.previewComponent}`)
        // Fallback to a default component or show error
        PreviewComponent = () => <div>Preview component not found</div>
    }
    
    // Read the file contents
    const codePath = await readUsageFile(showcase.codePath)
    const usagePath = await readUsageFile(showcase.usagePath)

    return (
        <ComponentViewer
            preview={<PreviewComponent />}
            codePath={codePath}
            usagePath={usagePath}
            cliCommands={showcase.cliCommand}
        />
    )
}


