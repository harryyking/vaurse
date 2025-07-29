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
        hostname: 'rickandmortyapi.com', // Add the hostname
        pathname: '/api/character/avatar/**',     // Allow all paths under this domain
      },
    ]
  }
};

// Import the PWA plugin
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  // Define caching strategies for API calls
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/rickandmortyapi\.com\/api\/.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'rickandmorty-api-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
});

export default withPWA(nextConfig);
