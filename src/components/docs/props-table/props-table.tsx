'use client'
import React from 'react'
import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from '@/components/ui/table'
import { PageSubTitle } from '@/components/docs/page-template'
import PropInfo from '@/components/docs/props-table/prop-info'
import { InlineCode } from '@/components/ui/inline-code'
import { Icon } from '@/components/ui/icon'
export interface Props {
     prop: string
     required: boolean
     description: React.ReactNode
     type: string
     typeInfo?: React.ReactNode
     default?: string
}

interface PropsTableProps {
     title?: string
     props: Props[]
}

export const PropsTable = ({ title, props }: PropsTableProps) => {
     return (
          <>
               <PageSubTitle>{title || 'Properties'}</PageSubTitle>
               <div className="px-5">
                    <Table>
                         <TableHeader>
                              <TableRow>
                                   <TableHead>Property</TableHead>
                                   <TableHead>Type</TableHead>
                                   <TableHead>Default</TableHead>
                              </TableRow>
                         </TableHeader>
                         <TableBody>
                              {props.map(prop => (
                                   <TableRow key={prop.prop} className="text-primary text-base">
                                        <TableCell className="flex items-center gap-[2px]">
                                             {prop.required && (
                                                  <span className="text-destructive">*</span>
                                             )}
                                             <InlineCode>{prop.prop}</InlineCode>
                                             <PropInfo className="ml-2">
                                                  {prop.description}
                                             </PropInfo>
                                        </TableCell>
                                        <TableCell>
                                             <div className="flex items-center gap-[2px]">
                                                  <InlineCode>{prop.type}</InlineCode>
                                                  {prop.typeInfo && (
                                                       <PropInfo className="ml-2">
                                                            {prop.typeInfo}
                                                       </PropInfo>
                                                  )}
                                             </div>
                                        </TableCell>
                                        <TableCell>
                                             {prop.default ? (
                                                  <InlineCode>{prop.default}</InlineCode>
                                             ) : (
                                                  <Icon
                                                       name="BsTwitterX"
                                                       className="text-destructive h-4 w-4"
                                                  />
                                             )}
                                        </TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
               </div>
          </>
     )
}
