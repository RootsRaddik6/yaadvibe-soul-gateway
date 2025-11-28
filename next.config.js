/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: false
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
