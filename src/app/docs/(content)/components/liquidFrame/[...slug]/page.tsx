import ComponentViewer from '@/components/ComponentViewer'
import { readUsageFile } from '@/lib/file-utils'
import liquidFrame1Data from '@/app/docs/(content)/data/liquidFrame.json'

interface LiquidFrame1PageProps {
    params: Promise<{
        slug: string[]
    }>
}

export default async function LiquidFrame1Page({ params }: LiquidFrame1PageProps) {
    const { slug } = await params
    const slugValue = slug[0] || '1'
    
    // Find the showcase data based on slug
    const liquidFrame1Key = Object.keys(liquidFrame1Data).find(
        key => liquidFrame1Data[key as keyof typeof liquidFrame1Data].slug === slugValue
    )
    
    // Default to showcase1 if no match found
    const liquidFrame1 = liquidFrame1Key ? liquidFrame1Data[liquidFrame1Key as keyof typeof liquidFrame1Data] : liquidFrame1Data.liquidFrame1
    
    // Dynamically import the preview component
    let PreviewComponent
    try {
        const componentModule = await import(`@/app/docs/(content)/preview/${liquidFrame1Key || 'liquidFrame1'}`)
        PreviewComponent = componentModule[liquidFrame1.previewComponent as keyof typeof componentModule]
    } catch (error) {
        console.error(`Failed to load preview component: ${liquidFrame1.previewComponent}`)
        // Fallback to a default component or show error
        PreviewComponent = () => <div>Preview component not found</div>
    }
    
    // Read the file contents
    const codePath = await readUsageFile(liquidFrame1.codePath)
    const usagePath = await readUsageFile(liquidFrame1.usagePath)

    return (
        <ComponentViewer
            preview={<PreviewComponent />}
            codePath={codePath}
            usagePath={usagePath}
            cliCommands={liquidFrame1.cliCommand}
        />
    )
}


