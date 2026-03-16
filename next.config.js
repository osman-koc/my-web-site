/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
  env: {
    RAINDROP_ACCESS_TOKEN: process.env.RAINDROP_ACCESS_TOKEN,
    PLAYAI_API_KEY: process.env.PLAYAI_API_KEY
  },
};

module.exports = nextConfig;