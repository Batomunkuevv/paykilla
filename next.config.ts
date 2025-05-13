import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [ 768, 1024, 1600],
    formats: ["image/avif", "image/webp"],

    dangerouslyAllowSVG: true,
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
