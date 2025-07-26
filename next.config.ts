import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const base = process.env.NEXT_PUBLIC_BASE_PATH;
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  basePath: base,
  assetPrefix: base,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
