import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "node:path";

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm", "remark-toc"],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "wrap" }],
      ["rehype-pretty-code", { theme: { dark: "synthwave-84", light: "github-light" } }],
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // The library is consumed as TypeScript source from the workspace.
  transpilePackages: ["@chainlift/liftkit"],
  turbopack: { root: path.join(__dirname, "../..") },
};

export default withMDX(nextConfig);
