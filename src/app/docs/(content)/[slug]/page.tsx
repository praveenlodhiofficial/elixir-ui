import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";

const TOP_LEVEL_CONTENT_DIR = path.join(process.cwd(), "content");

function getAllSlugs(): string[] {
   if (!fs.existsSync(TOP_LEVEL_CONTENT_DIR)) return [];
   return fs
      .readdirSync(TOP_LEVEL_CONTENT_DIR)
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
      const candidatePath = path.join(TOP_LEVEL_CONTENT_DIR, `${candidate}.mdx`);
      if (!fs.existsSync(candidatePath)) continue;
      try {
         const mod = (await import(`@/content/${candidate}.mdx`)) as {
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
               canonical: `/docs/(content)/${slug}`,
            },
         };
      } catch {}
   }

   return {};
}

export default async function DocsSlugPage({ params }: { params: { slug: string } }) {
   const { slug } = await params;
   const candidates = Array.from(new Set([slug, slug.replace(/-/g, "")]));

   let Mod: { default?: React.ComponentType } | null = null;

   for (const candidate of candidates) {
      const candidatePath = path.join(TOP_LEVEL_CONTENT_DIR, `${candidate}.mdx`);
      if (!fs.existsSync(candidatePath)) continue;
      try {
         Mod = await import(`@/content/${candidate}.mdx`);
         break;
      } catch {}
   }

   if (!Mod?.default) return notFound();

   const Component = Mod.default as React.ComponentType;
   return <Component />;
}
