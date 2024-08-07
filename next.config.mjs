const config = async () => {
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

  return nextConfig;
};

export default config;
