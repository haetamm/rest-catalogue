/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['restaurant-api.dicoding.dev'],
  },
  compiler: {
    styledComponents: true,
  },
};

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const withPWA = require('next-pwa')({
  dest: 'public', // Output directory for service worker files
  register: true, // Automatically register service worker
  skipWaiting: true, // Make new service worker active immediately
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development
});

// Export wrapped config
export default withPWA(nextConfig);