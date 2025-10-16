import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "content", "components");

function getAllSlugs(): string[] {
   if (!fs.existsSync(CONTENT_DIR)) return [];
   return fs
      .readdirSync(CONTENT_DIR)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
}

export function generateStaticParams() {
   return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
   const { slug } = await params;
   const candidates = Array.from(new Set([slug, slug.replace(/-/g, "")]));

   for (const candidate of candidates) {
      const candidatePath = path.join(CONTENT_DIR, `${candidate}.mdx`);
      if (!fs.existsSync(candidatePath)) continue;
      try {
         const mod = (await import(`@/content/components/${candidate}.mdx`)) as {
            metadata?: {
               title?: string;
               description?: string;
            };
         };
         const mdxMeta = mod.metadata || {};
         return {
            title: mdxMeta.title || slug,
            description: mdxMeta.description,
            alternates: {
               canonical: `/docs/(content)/components/${slug}`,
            },
         };
      } catch {}
   }

   return {};
}

export default async function DocsComponentsSlugPage({ params }: { params: { slug: string } }) {
   const { slug } = await params;
   const candidates = Array.from(new Set([slug, slug.replace(/-/g, "")]));

   let Mod: { default?: React.ComponentType } | null = null;

   for (const candidate of candidates) {
      const candidatePath = path.join(CONTENT_DIR, `${candidate}.mdx`);
      if (!fs.existsSync(candidatePath)) continue;
      try {
         Mod = await import(`@/content/components/${candidate}.mdx`);
         break;
      } catch {}
   }

   if (!Mod?.default) return notFound();

   // Load preview component
   // const PreviewComponent = await loadPreviewComponent(slug)

   const Component = Mod.default as React.ComponentType;

   return (
      <div className="space-y-8">
         <Component />
      </div>
   );
}
