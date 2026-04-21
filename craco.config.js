const path = require('path');

// craco.config.js
module.exports = {
  webpack: {
    configure: {
      optimization: {
        splitChunks: {
          chunks: 'all',
          maxSize: 244000,
        }
      }
    }
  }
}
