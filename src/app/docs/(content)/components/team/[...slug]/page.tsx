import ComponentViewer from '@/components/ComponentViewer'
import { readUsageFile } from '@/lib/file-utils'
import team1Data from '@/app/docs/(content)/data/team.json'

interface Team1PageProps {
    params: Promise<{
        slug: string[]
    }>
}

export default async function Team1Page({ params }: Team1PageProps) {
    const { slug } = await params
    const slugValue = slug[0] || '1'
    
    // Find the showcase data based on slug
    const team1Key = Object.keys(team1Data).find(
        key => team1Data[key as keyof typeof team1Data].slug === slugValue
    )
    
    // Default to showcase1 if no match found
    const team1 = team1Key ? team1Data[team1Key as keyof typeof team1Data] : team1Data.team1
    
    // Dynamically import the preview component
    let PreviewComponent
    try {
        const componentModule = await import(`@/app/docs/(content)/preview/${team1Key || 'team1'}`)
        PreviewComponent = componentModule[team1.previewComponent as keyof typeof componentModule]
    } catch (error) {
        console.error(`Failed to load preview component: ${team1.previewComponent}`)
        // Fallback to a default component or show error
        PreviewComponent = () => <div>Preview component not found</div>
    }
    
    // Read the file contents
    const codePath = await readUsageFile(team1.codePath)
    const usagePath = await readUsageFile(team1.usagePath)

    return (
        <ComponentViewer
            preview={<PreviewComponent />}
            codePath={codePath}
            usagePath={usagePath}
            cliCommands={team1.cliCommand}
        />
    )
}


