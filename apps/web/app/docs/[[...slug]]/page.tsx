import { notFound } from "next/navigation";

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";

import { getMDXComponents } from "@/web/components/mdx";
import { getDocsFooterItems } from "@/web/lib/docs-footer";
import { source } from "@/web/lib/source";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const page = source.getPage(resolvedParams.slug ?? []);

  if (!page) return notFound();

  const footerItems = getDocsFooterItems(source.getPages(), page.url);

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      footer={{
        enabled: true,
        items: footerItems,
      }}
      tableOfContent={{ style: "clerk" }}
      tableOfContentPopover={{ style: "clerk" }}
    >
      <DocsTitle className="font-bold lg:text-4xl">{page.data.title}</DocsTitle>
      <DocsDescription className="lg:text-base">
        {page.data.description}
      </DocsDescription>
      {/* <Separator className="relative bottom-4" /> */}
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}
