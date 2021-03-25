const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
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
  assetPrefix: "/work"
}

module.exports = withPlugins([
  [sass, {
    sassLoaderOptions: {
      sassOptions: {
        includePaths: ["styles/*"],
      }
    }
  }],
  [optimizedImages,{
    imagesFolder: 'images',
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 70,
    },
    pngquant: true,
  }]
], nextConfig);
