import {
  defineConfig,
  defineDocs,
  type DocsCollection,
  remarkInclude,
} from "fumadocs-mdx/config";
import remarkDirective from "remark-directive";

export const docs: DocsCollection<any, any> = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInclude, remarkDirective],
  },
});
