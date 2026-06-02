import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portofolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;