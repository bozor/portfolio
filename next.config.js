/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/web': { page: '/web' },
      '/print': { page: '/print' },
      '/apps': { page: '/apps' }
    };
  },
  basePath: "/work",
  assetPrefix: "/work",
  trailingSlash: true,
}

module.exports = nextConfig
