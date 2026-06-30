import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/smartprobonoip",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
