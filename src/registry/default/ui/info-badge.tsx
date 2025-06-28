import { Icon } from '@/registry/default/ui/icon'
import { cva } from 'class-variance-authority'
import { cn } from '@/registry/default/lib/utils'

export const infoBadgeIconVariants = cva(
     'h-3 w-3 rounded-full border-2 md:border-3 md:h-4 md:w-4',
     {
          variants: {
               variant: {
                    orange: 'border-orange-500 bg-orange-500',
                    red: 'border-red-500 bg-red-500',
                    green: 'border-green-500 bg-green-500',
                    blue: 'border-blue-500 bg-blue-500',
               },
          },
          defaultVariants: {
               variant: 'orange',
          },
     }
)

export default function InfoBadge({
     title,
     iconColor,
     iconName,
}: {
     title: string
     iconColor:
          | 'orange'
          | 'red'
          | 'green'
          | 'blue'
          | 'yellow'
          | 'purple'
          | 'pink'
          | 'gray'
          | 'brown'
          | 'black'
          | 'white'
     iconName: 'Circle' | 'Check' | 'X' | 'Info'
}) {
     return (
          <div
               className={cn(
                    'md:py-1.5backdrop-blur-sm flex items-center gap-2 rounded-full bg-white/30 px-2 py-1.5'
               )}
          >
               <Icon
                    name={iconName}
                    className={cn(
                         infoBadgeIconVariants({
                              variant: iconColor as 'orange' | 'red' | 'green' | 'blue',
                         })
                    )}
               />
               <p className={cn('text-xs font-medium text-white/90')}>{title}</p>
          </div>
     )
}
