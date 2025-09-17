const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

const cleanedDefaultPlugins = defaultConfig.plugins.filter((plugin) => {
  if (['RtlCssPlugin'].includes(plugin.constructor.name)) {
    return false;
  }
  return true;
});

const ignoredFiles = [
  'editor-global.js', 
  'editor-global.asset.php', 
  'frontend-global.js', 
  'frontend-global.asset.php'
];

module.exports = {
  ...defaultConfig,
  entry: {
    ...defaultConfig.entry(),

    // We add an additional entry point
    
    "glide-package/index": path.resolve(process.cwd(), "src/js/glide-init.js"),
    "glide-package/glide.core": path.resolve(process.cwd(), "node_modules/@glidejs/glide/dist/css/glide.core.min.css"),
    "glide-package/glide.min": path.resolve(process.cwd(), "node_modules/@glidejs/glide/dist/glide.min.js"),
    
    'editor-global': path.resolve(__dirname, 'src/scss/editor-global.scss'),
    'frontend-global': path.resolve(__dirname, 'src/scss/frontend-global.scss'),
  },

  plugins: [
    ...cleanedDefaultPlugins,

    new IgnoreEmitPlugin(ignoredFiles),
  ],
};