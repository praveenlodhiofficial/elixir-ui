// source.config.ts
import {
  defineConfig,
  defineDocs,
  remarkInclude
} from "fumadocs-mdx/config";
import remarkDirective from "remark-directive";
var docs = defineDocs({
  dir: "content/docs"
});
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInclude, remarkDirective]
  }
});
export {
  source_config_default as default,
  docs
};
