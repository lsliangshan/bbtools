const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  publicPath: '',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'resources',
          to: './',
          ignore: [".*"]
        }
      ])
    ]
  }
}