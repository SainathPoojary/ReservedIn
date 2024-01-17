/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["miro.medium.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
