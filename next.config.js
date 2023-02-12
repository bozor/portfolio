module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/web': { page: '/web' },
      '/print': { page: '/print' },
      '/apps': { page: '/apps' }
    }
  },
  basePath: "/work",
  assetPrefix: "/work",
  trailingSlash: true,
}
