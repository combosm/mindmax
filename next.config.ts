import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 430, 768, 1024, 1440, 1920],
    imageSizes: [64, 96, 160, 256, 384],
    qualities: [75, 82, 88],
  },
};

export default nextConfig;
