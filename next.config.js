/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: { formats: ["image/avif", "image/webp"], domains: []},
  basePath: "/work",
  assetPrefix: "/work",
  trailingSlash: true
}

module.exports = nextConfig
