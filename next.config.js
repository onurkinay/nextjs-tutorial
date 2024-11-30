/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'wembleypark.com'],
  },
};

module.exports = nextConfig;
