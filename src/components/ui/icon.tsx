import React from 'react'
import { getIcon, hasIcon, type IconName } from '@/lib/icons'
import { cn } from '@/lib/utils'

interface IconProps {
     name: IconName
     className?: string
     size?: number | string
     [key: string]: any // Allow passing through other props to the icon component
}

export function Icon({ name, className, size = 24, ...props }: IconProps) {
     if (typeof name !== 'string') {
          console.warn(`Icon name must be a string, got:`, name)
          return null
     }

     if (!hasIcon(name)) {
          console.warn(`Icon "${name}" not found in icon registry`)
          return null
     }

     const IconComponent = getIcon(name)

     if (!IconComponent) {
          return null
     }

     return <IconComponent className={cn(className)} size={size} {...props} />
}

// Export the icon registry for direct access if needed
export { iconMap, getIcon, hasIcon, type IconName } from '@/lib/icons'
