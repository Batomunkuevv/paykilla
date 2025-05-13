import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [768, 1024],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 60,
    loader: "default",
    qualities: [90]
  },
};

export default nextConfig;
