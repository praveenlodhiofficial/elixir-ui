import { Icon } from '@/registry/ui/icon'
import { cva } from 'class-variance-authority'
import { cn } from '@/registry/lib/utils'

export const featureBoxIconVariants = cva('h-6 w-6 rounded-full p-1 md:h-7 md:w-7 lg:h-8 lg:w-8', {
     variants: {
          variant: {
               orange: 'bg-orange-100 text-orange-500',
               red: 'bg-red-100 text-red-500',
               green: 'bg-green-100 text-green-500',
               blue: 'bg-blue-100 text-blue-500',
               yellow: 'bg-yellow-100 text-yellow-500',
               purple: 'bg-purple-100 text-purple-500',
               pink: 'bg-pink-100 text-pink-500',
               gray: 'bg-gray-100 text-gray-500',
               brown: 'bg-amber-100 text-amber-500',
          },
     },
     defaultVariants: {
          variant: 'orange',
     },
})

export default function FeatureBox({
     title,
     description,
     iconColor,
     iconName = 'FaServicestack',
}: {
     title: string
     description: string
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
     iconName?:
          | 'FaServicestack'
          | 'FaRocket'
          | 'FaCog'
          | 'FaLightbulb'
          | 'FaStar'
          | 'FaHeart'
          | 'FaShield'
          | 'FaUsers'
          | 'FaCode'
}) {
     return (
          <div
               className={cn(
                    'flex flex-col gap-2 rounded-xl bg-gradient-to-br from-orange-100 to-orange-300 p-1.5 md:p-4 dark:from-orange-200 dark:to-orange-300'
               )}
          >
               <div className={cn('flex items-center justify-start gap-3')}>
                    <div className={cn('flex items-center gap-2 rounded-full bg-white p-1 pr-5')}>
                         <Icon
                              name={iconName}
                              className={cn(featureBoxIconVariants({ variant: iconColor })) }
                         />
                         <h3 className={cn('text-sm font-medium text-gray-900 md:text-base')}>
                              {title}
                         </h3>
                    </div>
               </div>
               <p className={cn('px-2 text-xs text-black md:text-[15px]')}>{description}</p>
          </div>
     )
}
