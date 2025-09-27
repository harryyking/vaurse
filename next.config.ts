import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  eslint: {
    ignoreDuringBuilds: true
  },

  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io', // Add the hostname
        pathname: '/f/**',     // Allow all paths under this domain
      },

      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com', // Add the hostname
        pathname: '/api/character/avatar/**',     // Allow all paths under this domain
      },
    ]
  }
};


export default nextConfig;
