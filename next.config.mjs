import { fetchTranslations } from "./fetchTranslations.mjs";

export default async () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
  };

  await fetchTranslations();
  return nextConfig;
};
