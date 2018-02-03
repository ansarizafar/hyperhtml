const glob = require('glob')
const path = require("path");
const PurgecssPlugin = require("purgecss-webpack-plugin");

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 * https://github.com/FullHuman/purgecss-webpack-plugin
 */
class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-z0-9-:\/]+/g);
    }
  }
 
  const PATHS = {
    src: path.join(__dirname, 'src')
  }

module.exports = {
  entry: './src/index.js', 
  extendWebpack(config) {
      // Disable progress bar while building
     // config.plugins.delete('progress-bar')
     config
  .plugin('purge')
  .init(() => new PurgecssPlugin({
    paths:  glob.sync(`${PATHS.src}/**/*.js`),
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ["html", "js"]
      }
    ]
  }));
  
    }
  }