/** @type {import('next').NextConfig} */

import withBundleAnalyzer from "@next/bundle-analyzer";
import withLitSSR from "@lit-labs/nextjs";

let nextConfig = {
  transpilePackages: ["@mui/material-next"],
};

// Toggle these variables to enable/disable plugins
const useBundleAnalyzer = false;
const useLitSSR = false;

if (useBundleAnalyzer) {
  nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  })(nextConfig);
}

if (useLitSSR) {
  nextConfig = withLitSSR()(nextConfig);
}

export default nextConfig;
