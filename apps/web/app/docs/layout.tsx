import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { baseOptions } from "@/web/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const tree = {
    name: "Documentation",
    children: [],
  };

  return (
    <DocsLayout
      tree={tree}
      sidebar={{ defaultOpenLevel: 1 }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
