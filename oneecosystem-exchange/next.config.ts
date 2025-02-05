/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensure App Router is enabled
  },
  output: 'standalone', // Optional for better deployment
};

module.exports = nextConfig;
