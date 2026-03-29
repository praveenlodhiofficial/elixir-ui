import Image from "next/image";

import * as TabsComponents from "fumadocs-ui/components/tabs";
import {
  createFileSystemGeneratorCache,
  createGenerator,
} from "fumadocs-typescript";
import { AutoTypeTable, type AutoTypeTableProps } from "fumadocs-typescript/ui";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { ComponentPreview } from "@/web/components/ComponentPreview";
import { showcaseComponents } from "./mdx-component-registry";

const generator = createGenerator({
  // set a cache, necessary for serverless platform like Vercel
  cache: createFileSystemGeneratorCache(
    process.env.VERCEL ? "/tmp/fumadocs-typescript" : ".next/fumadocs-typescript"
  ),
});

export function getMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    ...defaultMdxComponents,
    // HTML `ref` attribute conflicts with `forwardRef`
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    AutoTypeTable: (props: Partial<AutoTypeTableProps>) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    ...TabsComponents,
    ...(showcaseComponents as Record<string, unknown>),
    ...(components as Record<string, unknown>),
    Image,
    ComponentPreview,
    CodeBlock,
  };
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = MDXComponents;
}
