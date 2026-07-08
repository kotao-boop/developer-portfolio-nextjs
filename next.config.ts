import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/developer-portfolio-nextjs',
};

export default nextConfig;
