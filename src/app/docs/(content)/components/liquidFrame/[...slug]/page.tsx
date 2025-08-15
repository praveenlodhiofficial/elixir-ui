import ComponentViewer from '@/components/ComponentViewer'
import { readUsageFile } from '@/lib/file-utils'
import liquidFrameData from '@/app/docs/(content)/data/liquidFrame.json'

interface LiquidFramePageProps {
    params: Promise<{
        slug: string[]
    }>
}

export default async function LiquidFramePage({ params }: LiquidFramePageProps) {
    const { slug } = await params
    const slugValue = slug[0] || '1'
    
    // Find the liquidFrame data based on slug
    const liquidFrameKey = Object.keys(liquidFrameData).find(
        key => liquidFrameData[key as keyof typeof liquidFrameData].slug === slugValue
    )
    
    // Default to liquidFrame1 if no match found
    const liquidFrame = liquidFrameKey ? liquidFrameData[liquidFrameKey as keyof typeof liquidFrameData] : liquidFrameData.liquidFrame1
    
    // Dynamically import the preview component
    let PreviewComponent
    try {
        const componentModule = await import(`@/app/docs/(content)/preview/${liquidFrameKey || 'liquidFrame1'}`)
        PreviewComponent = componentModule[liquidFrame.previewComponent as keyof typeof componentModule]
    } catch (error) {
        console.error(`Failed to load preview component: ${liquidFrame.previewComponent}`)
        // Fallback to a default component or show error
        PreviewComponent = () => <div>Preview component not found</div>
    }
    
    // Read the file contents
    const codePath = await readUsageFile(liquidFrame.codePath)
    const usagePath = await readUsageFile(liquidFrame.usagePath)

    return (
        <ComponentViewer
            preview={<PreviewComponent />}
            codePath={codePath}
            usagePath={usagePath}
            cliCommands={liquidFrame.cliCommand}
        />
    )
}


