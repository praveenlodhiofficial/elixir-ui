import React from "react";

interface MDXPropDefinition {
   prop: string;
   type: string;
   default: string;
   description: string;
}

interface MDXPropsTableProps {
   props: MDXPropDefinition[];
   className?: string;
}

export const MDXPropsTable: React.FC<MDXPropsTableProps> = ({ props, className = "" }) => {
   return (
      <div className={`overflow-hidden overflow-x-auto rounded-lg ${className}`}>
         <table className="w-full border-collapse">
            <thead>
               <tr>
                  <th className="text-center text-[15px] font-semibold">Prop</th>
                  <th className="text-center text-[15px] font-semibold">Type</th>
                  <th className="text-center text-[15px] font-semibold">Default</th>
                  <th className="min-w-60 text-center text-[15px] font-semibold">Description</th>
               </tr>
            </thead>
            <tbody>
               {props.map((prop, index) => (
                  <tr key={index}>
                     <td className="px-3 text-center">{prop.prop}</td>
                     <td className="px-3 text-center">{prop.type}</td>
                     <td className="px-3 text-center">{prop.default}</td>
                     <td className="px-3 text-center">{prop.description}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};
