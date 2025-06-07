/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/gameaccess2025",
        destination: "/GameAccess2025",
      },
    ];
  },
};

module.exports = nextConfig;
