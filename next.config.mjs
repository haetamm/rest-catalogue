/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['restaurant-api.dicoding.dev'],
  },
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
