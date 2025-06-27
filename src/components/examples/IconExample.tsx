import React from 'react'
import { Icon } from '@/components/ui/icon'

export default function IconExample() {
     const techStackIcons = ['FaReact', 'TbBrandTypescript', 'TbBrandTailwind', 'FaFigma']

     return (
          <div className="space-y-6 p-6">
               <h2 className="text-2xl font-bold">Icon Management System Example</h2>

               {/* Basic Usage */}
               <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Basic Usage</h3>
                    <div className="flex gap-4">
                         <Icon name="FaReact" className="h-6 w-6 text-blue-500" />
                         <Icon name="TbBrandTypescript" className="h-6 w-6 text-blue-600" />
                         <Icon name="TbBrandTailwind" className="h-6 w-6 text-cyan-500" />
                         <Icon name="FaFigma" className="h-6 w-6 text-purple-500" />
                    </div>
               </div>

               {/* Dynamic Rendering */}
               <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Dynamic Rendering</h3>
                    <div className="flex gap-2">
                         {techStackIcons.map((iconName, index) => (
                              <Icon key={index} name={iconName} className="h-5 w-5" />
                         ))}
                    </div>
               </div>

               {/* With Different Sizes */}
               <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Different Sizes</h3>
                    <div className="flex items-center gap-4">
                         <Icon name="Zap" size={16} className="text-yellow-500" />
                         <Icon name="Zap" size={24} className="text-yellow-500" />
                         <Icon name="Zap" size={32} className="text-yellow-500" />
                         <Icon name="Zap" size={48} className="text-yellow-500" />
                    </div>
               </div>

               {/* Interactive Icons */}
               <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Interactive Icons</h3>
                    <div className="flex gap-4">
                         <Icon
                              name="ArrowRight"
                              className="h-6 w-6 cursor-pointer transition-transform hover:translate-x-1"
                              onClick={() => alert('Arrow clicked!')}
                         />
                         <Icon
                              name="Star"
                              className="h-6 w-6 cursor-pointer text-yellow-400 transition-colors hover:text-yellow-600"
                              onClick={() => alert('Star clicked!')}
                         />
                    </div>
               </div>

               {/* Error Handling Example */}
               <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Error Handling (Non-existent Icon)</h3>
                    <div className="flex gap-4">
                         <Icon name="NonExistentIcon" className="h-6 w-6" />
                         <span className="text-sm text-gray-500">(Check console for warning)</span>
                    </div>
               </div>
          </div>
     )
}
