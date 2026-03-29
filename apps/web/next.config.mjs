import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**",
         },
      ],
   },
  transpilePackages: ["@workspace/ui"],
   outputFileTracingIncludes: {
      "/docs/[[...slug]]": ["./.next/fumadocs-typescript/**/*.json"],
   },
   outputFileTracingExcludes: {
      "*": ["../../packages/cli/dist/**/*"],
   },
}

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});
export default withMDX(nextConfig);

// export default nextConfig
