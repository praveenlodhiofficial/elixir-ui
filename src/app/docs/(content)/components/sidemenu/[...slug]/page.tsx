import ComponentViewer from '@/components/ComponentViewer'
import { readUsageFile } from '@/lib/file-utils'
import sidemenu1Data from '@/app/docs/(content)/data/sidemenu.json'

interface Sidemenu1PageProps {
    params: Promise<{
        slug: string[]
    }>
}

export default async function Sidemenu1Page({ params }: Sidemenu1PageProps) {
    const { slug } = await params
    const slugValue = slug[0] || '1'
    
    // Find the showcase data based on slug
    const sidemenu1Key = Object.keys(sidemenu1Data).find(
        key => sidemenu1Data[key as keyof typeof sidemenu1Data].slug === slugValue
    )
    
    // Default to showcase1 if no match found
    const sidemenu1 = sidemenu1Key ? sidemenu1Data[sidemenu1Key as keyof typeof sidemenu1Data] : sidemenu1Data.sidemenu1
    
    // Dynamically import the preview component
    let PreviewComponent
    try {
        const componentModule = await import(`@/app/docs/(content)/preview/${sidemenu1Key || 'sidemenu1'}`)
        PreviewComponent = componentModule[sidemenu1.previewComponent as keyof typeof componentModule]
    } catch (error) {
        console.error(`Failed to load preview component: ${sidemenu1.previewComponent}`)
        // Fallback to a default component or show error
        PreviewComponent = () => <div>Preview component not found</div>
    }
    
    // Read the file contents
    const codePath = await readUsageFile(sidemenu1.codePath)
    const usagePath = await readUsageFile(sidemenu1.usagePath)

    return (
        <ComponentViewer
            preview={<PreviewComponent />}
            codePath={codePath}
            usagePath={usagePath}
            cliCommands={sidemenu1.cliCommand}
        />
    )
}


