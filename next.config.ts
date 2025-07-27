import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// build GitHub Pages url
// when repo is owber.github.io, no basePath or assetPrefix is set

const owner = process.env.GITHUB_OWNER;
const ownerAndRepo = process.env.GITHUB_REPOSITORY;

if (typeof owner === "string" && typeof ownerAndRepo === "string") {
  // extract "repo" from "owner/repo"
  const repo = ownerAndRepo.slice(owner.length + 1);
  if (repo !== `${owner}.github.io`) {
    nextConfig.basePath = `/${repo}`;
    nextConfig.assetPrefix = `/${repo}`;
  }
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
