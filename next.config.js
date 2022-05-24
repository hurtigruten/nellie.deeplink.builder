/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "downloads.ctfassets.net"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
