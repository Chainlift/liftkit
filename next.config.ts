import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	output: "export",
};

const withMDX = createMDX({
	// Remove the options object entirely
});

export default withMDX(nextConfig);
