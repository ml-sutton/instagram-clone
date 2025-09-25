import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'img.clerk.com',
      pathname: '**',
    },
    {
      protocol: 'https',
      hostname: 'dlhjdetph3.ufs.sh',
      pathname: '**',
    }]
  }
};

export default nextConfig;
