import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import { Container } from "@/components/container";
import { UsageSteps } from "@/components/usage-steps";
import { MDXPropsTable } from "@/components/ui/mdx-props-table";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
   h1: (props: HeadingProps) => (
      <h1
         className="mb-2 pt-4 text-2xl font-bold text-gray-900 md:mb-4 md:pt-8 md:text-3xl lg:mb-6 lg:text-4xl dark:text-zinc-100"
         {...props}
      />
   ),
   h2: (props: HeadingProps) => (
      <h2
         className="mt-8 mb-2 text-xl font-bold text-gray-800 md:text-2xl lg:mb-4 lg:text-3xl dark:text-zinc-200"
         {...props}
      />
   ),
   h3: (props: HeadingProps) => (
      <h3
         className="mt-6 mb-3 text-2xl font-semibold text-gray-800 dark:text-zinc-200"
         {...props}
      />
   ),
   h4: (props: HeadingProps) => (
      <h4 className="mt-5 mb-2 text-xl font-medium text-gray-800 dark:text-zinc-200" {...props} />
   ),
   h5: (props: HeadingProps) => (
      <h5 className="mt-4 mb-2 text-lg font-medium text-gray-800 dark:text-zinc-200" {...props} />
   ),
   h6: (props: HeadingProps) => (
      <h6 className="mt-4 mb-2 text-base font-medium text-gray-800 dark:text-zinc-200" {...props} />
   ),
   p: (props: ParagraphProps) => (
      <p className="text-[13px] text-gray-800 md:text-[15px] dark:text-zinc-300" {...props} />
   ),
   ol: (props: ListProps) => (
      <ol className="list-decimal space-y-2 pl-5 text-gray-800 dark:text-zinc-300" {...props} />
   ),
   ul: (props: ListProps) => (
      <ul className="list-disc space-y-1 pl-5 text-gray-800 dark:text-zinc-300" {...props} />
   ),
   li: (props: ListItemProps) => <li className="pl-1" {...props} />,
   em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-medium" {...props} />,
   strong: (props: ComponentPropsWithoutRef<"strong">) => (
      <strong className="font-medium" {...props} />
   ),
   a: ({ href, children, ...props }: AnchorProps) => {
      const className =
         "text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800";
      if (href?.startsWith("/")) {
         return (
            <Link href={href} className={className} {...props}>
               {children}
            </Link>
         );
      }
      if (href?.startsWith("#")) {
         return (
            <a href={href} className={className} {...props}>
               {children}
            </a>
         );
      }
      return (
         <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
            {children}
         </a>
      );
   },
   code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
      const codeHTML = highlight(children as string);
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
   },
   Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
      <table>
         <thead>
            <tr>
               {data.headers.map((header, index) => (
                  <th key={index}>{header}</th>
               ))}
            </tr>
         </thead>
         <tbody>
            {data.rows.map((row, index) => (
               <tr key={index}>
                  {row.map((cell, cellIndex) => (
                     <td key={cellIndex}>{cell}</td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   ),
   blockquote: (props: BlockquoteProps) => (
      <blockquote
         className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
         {...props}
      />
   ),
   Container,
   UsageSteps,
   MDXPropsTable,
};

declare global {
   type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
   return components;
}
