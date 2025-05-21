import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
        loader: "default",
        qualities: [100],
    },
};

export default nextConfig;
