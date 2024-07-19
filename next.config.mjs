import { fetchTranslations } from './fetchTranslations.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

fetchTranslations();

export default nextConfig;
