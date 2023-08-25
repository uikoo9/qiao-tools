// html webpack plugin
const HtmlWebpackPlugin = require('./plugin-for-html.js');

// mini css extract plugin
const MiniCssExtractPlugin = require('./plugin-for-minicss.js');

// webpack bundle analyzer
const BundleAnalyzerPlugin = require('./plugin-for-analyzer.js');

/**
 * webpack plugins
 * @param {*} isDev
 * @param {*} plugins
 * @param {*} isAnalyzer
 * @returns
 */
module.exports = function (isDev, plugins, isAnalyzer) {
  // check
  const res = [];
  if (!plugins || !plugins.length) return res;

  // isAnalyzer
  if (isAnalyzer) res.push(BundleAnalyzerPlugin());

  // plugins
  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];

    // html
    if (plugin.type == 'html') {
      delete plugin.type;
      res.push(HtmlWebpackPlugin(plugin));
    }

    // css
    if (plugin.type == 'css') {
      delete plugin.type;
      res.push(MiniCssExtractPlugin(plugin));
    }
  }

  return res;
};
