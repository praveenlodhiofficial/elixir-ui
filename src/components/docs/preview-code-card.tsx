import React from 'react'
import { cn } from '@/lib/utils'
import CodeCard from '@/components/docs/code-card/code-card'

interface PreviewCodeCardProps {
     className?: string
     fileContent?: string
     children?: React.ReactNode
}

const PreviewCodeCard = ({ className, fileContent, children }: PreviewCodeCardProps) => {
     return (
          <CodeCard code={fileContent || ''} className={cn('mb-12 md:mt-5', className)}>
               <div className="flex items-center justify-center">{children}</div>
          </CodeCard>
     )
}

export default PreviewCodeCard
