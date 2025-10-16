import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import { ComponentPreview } from "@/components/ComponentPreview";

const PREVIEW_DIR = path.join(process.cwd(), "content", "components", "preview");

function getAllPreviewSlugs(): string[] {
   if (!fs.existsSync(PREVIEW_DIR)) return [];
   return fs
      .readdirSync(PREVIEW_DIR)
      .filter((file) => file.endsWith(".tsx"))
      .map((file) => file.replace(/\.tsx$/, ""));
}

export function generateStaticParams() {
   return getAllPreviewSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
   const { slug } = await params;
   const candidates = Array.from(new Set([slug, slug.replace(/-/g, "")]));

   for (const candidate of candidates) {
      const candidatePath = path.join(PREVIEW_DIR, `${candidate}.tsx`);
      if (!fs.existsSync(candidatePath)) continue;
      return {
         title: `${candidate} Preview`,
         description: `Live preview of the ${candidate} component`,
         alternates: {
            canonical: `/docs/components/${slug}/preview`,
         },
      };
   }

   return {};
}

export default async function ComponentPreviewPage({ params }: { params: { slug: string } }) {
   const { slug } = await params;
   const candidates = Array.from(new Set([slug, slug.replace(/-/g, "")]));

   let PreviewComponent: React.ComponentType | null = null;

   for (const candidate of candidates) {
      const candidatePath = path.join(PREVIEW_DIR, `${candidate}.tsx`);
      if (!fs.existsSync(candidatePath)) continue;
      try {
         const mod = await import(`@/content/components/preview/${candidate}.tsx`);
         // Look for the preview component export (e.g., LiquidFrame1Preview)
         const componentName = Object.keys(mod).find(
            (key) => key.includes("Preview") || key.includes("Component")
         );
         PreviewComponent = componentName ? mod[componentName] : mod.default;
         break;
      } catch (error) {
         console.error(`Failed to load preview for ${candidate}:`, error);
      }
   }

   if (!PreviewComponent) return notFound();

   return (
      <ComponentPreview>
         <PreviewComponent />
      </ComponentPreview>
   );
}
