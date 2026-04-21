const path = require('path');

// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find TerserPlugin and disable parallel to save memory
      if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
        webpackConfig.optimization.minimizer.forEach((minimizer) => {
          if (minimizer.constructor.name === 'TerserPlugin') {
            minimizer.options.parallel = false;
          }
        });
      }

      // Add splitChunks config
      webpackConfig.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 244000,
      };

      return webpackConfig;
    }
  }
}
