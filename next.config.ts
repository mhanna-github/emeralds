import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      deviceSizes: [1, 640, 960, 1200, 1920, 2200],
      imageSizes: [48, 96, 160, 320],
      domains: ['images.prismic.io'],
      formats: process.env.NODE_ENV === 'development' ? ['image/webp'] : ['image/avif', 'image/webp'],
      loader: 'default',
  },
};

export default nextConfig;
