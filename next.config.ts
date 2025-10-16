import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**",
         },
      ],
   },
   pageExtensions: ["mdx", "ts", "tsx"],

   // Use the JavaScript MDX compiler so we can add remark/rehype plugins
   // (required for GitHub-Flavored Markdown tables)

   /* config options here */
};

const withMDX = createMDX({
   options: {
      // Use string form so options remain serializable for Turbopack
      remarkPlugins: ["remark-gfm"],
   },
});

export default withMDX(nextConfig);
