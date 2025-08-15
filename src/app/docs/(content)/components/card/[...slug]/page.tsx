import ComponentViewer from '@/components/ComponentViewer'
import { readUsageFile } from '@/lib/file-utils'
import cardData from '@/app/docs/(content)/data/card.json'

interface CardPageProps {
    params: Promise<{
        slug: string[]
    }>
}

export default async function CardPage({ params }: CardPageProps) {
    const { slug } = await params
    const slugValue = slug[0] || '1'
    
    // Find the card data based on slug
    const cardKey = Object.keys(cardData).find(
        key => cardData[key as keyof typeof cardData].slug === slugValue
    )
    
    // Default to card1 if no match found
    const card = cardKey ? cardData[cardKey as keyof typeof cardData] : cardData.card1
    
    // Dynamically import the preview component
    let PreviewComponent
    try {
        const componentModule = await import(`@/app/docs/(content)/preview/${cardKey || 'card1'}`)
        PreviewComponent = componentModule[card.previewComponent as keyof typeof componentModule]
    } catch (error) {
        console.error(`Failed to load preview component: ${card.previewComponent}`)
        // Fallback to a default component or show error
        PreviewComponent = () => <div>Preview component not found</div>
    }
    
    // Read the file contents
    const codePath = await readUsageFile(card.codePath)
    const usagePath = await readUsageFile(card.usagePath)

    return (
        <ComponentViewer
            preview={<PreviewComponent />}
            codePath={codePath}
            usagePath={usagePath}
            cliCommands={card.cliCommand}
        />
    )
}


