/** @type {import('next').NextConfig} */

BACKEND_PROXY = process.env.BACKEND

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BACKEND_PROXY}/:path*` // Proxy to Backend
      }
    ]
  }
};

module.exports = nextConfig
