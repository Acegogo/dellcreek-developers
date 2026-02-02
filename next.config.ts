import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Static-first marketing site.
   * `next build` will emit a fully static output in `out/`.
   */
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
