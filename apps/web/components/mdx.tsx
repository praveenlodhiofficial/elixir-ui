import Image from "next/image";

import * as TabsComponents from "fumadocs-ui/components/tabs";
import { EventCard } from "@workspace/ui/components/event-card";
import { FunnelGallery } from "@workspace/ui/components/funnel-gallery";
import { GalleryShowcase } from "@workspace/ui/components/gallery-showcase";
import { LiquidFrame } from "@workspace/ui/components/liquid-frame";
import { MasonryGrid } from "@workspace/ui/components/masonry-grid";
import { MotionGallery } from "@workspace/ui/components/motion-gallery";
import { MotionSidebar } from "@workspace/ui/components/motion-sidebar";
import { NavigationalCard } from "@workspace/ui/components/navigational-card";
import { OrbitalFlow } from "@workspace/ui/components/orbital-flow";
import { QuantityStepper } from "@workspace/ui/components/quantity-stepper";
import { ReadMore } from "@workspace/ui/components/read-more";
import { StatCard } from "@workspace/ui/components/stat-card";
import { TidalTextAnimation } from "@workspace/ui/components/tidal-text-animation";
import { VanillaTiltCard } from "@workspace/ui/components/vanilla-tilt-card";
import { VisionGlassCard } from "@workspace/ui/components/vision-glass-card";
import {
  createFileSystemGeneratorCache,
  createGenerator,
} from "fumadocs-typescript";
import { AutoTypeTable, type AutoTypeTableProps } from "fumadocs-typescript/ui";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { ComponentPreview } from "@/web/components/ComponentPreview";

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
    ...(components as Record<string, unknown>),
    MotionGallery,
    TidalTextAnimation,
    OrbitalFlow,
    MotionSidebar,
    FunnelGallery,
    LiquidFrame,
    VanillaTiltCard,
    NavigationalCard,
    VisionGlassCard,
    EventCard,
    StatCard,
    ReadMore,
    MasonryGrid,
    QuantityStepper,
    GalleryShowcase,
    Image,
    ComponentPreview,
    CodeBlock,
  };
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = MDXComponents;
}
