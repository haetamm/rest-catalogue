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
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',

  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 60 * 60 * 24 * 30,
        },
      },
    },
  ],
});

export default withPWA(nextConfig);
