import VerticalFlow from '@/components/elixir-ui/vertical-flow-carousel'
import { Icon } from 'lucide-react'

const featuredCards = [
     {
          link: '/image.jpg',
          icons: <Icon className="h-7 w-7 text-2xl text-black dark:text-white" />,
          title: 'Card Title',
          category: 'Card Category',
          description: 'Card Description',
          image: 'associated-image-url.jpg',
     },
]

export default function VerticalFlowExample() {
     return (
          <div className="mx-auto h-full w-5xl overflow-hidden rounded-xl bg-black/10">
               <VerticalFlow cards={featuredCards} />
          </div>
     )
}
