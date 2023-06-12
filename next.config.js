/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["prnt.sc"],
  },
};

module.exports = nextConfig;
