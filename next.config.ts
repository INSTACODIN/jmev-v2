import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.jmev.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jmev.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
