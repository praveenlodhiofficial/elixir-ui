import ComponentViewer from '@/components/ComponentViewer'
import { readUsageFile } from '@/lib/file-utils'
import messageThread1Data from '@/app/docs/(content)/data/messageThread.json'

interface MessageThread1PageProps {
    params: Promise<{
        slug: string[]
    }>
}

export default async function MessageThread1Page({ params }: MessageThread1PageProps) {
    const { slug } = await params
    const slugValue = slug[0] || '1'
    
    // Find the showcase data based on slug
    const messageThread1Key = Object.keys(messageThread1Data).find(
        key => messageThread1Data[key as keyof typeof messageThread1Data].slug === slugValue
    )
    
    // Default to showcase1 if no match found
    const messageThread1 = messageThread1Key ? messageThread1Data[messageThread1Key as keyof typeof messageThread1Data] : messageThread1Data.messageThread1
    
    // Dynamically import the preview component
    let PreviewComponent
    try {
        const componentModule = await import(`@/app/docs/(content)/preview/${messageThread1Key || 'messageThread1'}`)
        PreviewComponent = componentModule[messageThread1.previewComponent as keyof typeof componentModule]
    } catch (error) {
        console.error(`Failed to load preview component: ${messageThread1.previewComponent}`)
        // Fallback to a default component or show error
        PreviewComponent = () => <div>Preview component not found</div>
    }
    
    // Read the file contents
    const codePath = await readUsageFile(messageThread1.codePath)
    const usagePath = await readUsageFile(messageThread1.usagePath)

    return (
        <ComponentViewer
            preview={<PreviewComponent />}
            codePath={codePath}
            usagePath={usagePath}
            cliCommands={messageThread1.cliCommand}
        />
    )
}


