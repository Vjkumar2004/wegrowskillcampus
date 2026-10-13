import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/b-school",
        destination: "/programs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
