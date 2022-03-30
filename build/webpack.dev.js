const webpack = require('webpack');
const devConfig = {
  mode: 'development',
  devtool:'cheap-module-eval-source-map', // 关闭sourceMap
  output: {
    filename: '[name].js',
    chunkFilename:'[name].chunk.js',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true, // 开启热模块更新
    // hotOnly:true // 即便html的功能没有生效，也不让浏览器刷新
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              // modules:true
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 导入热更新插件
  ]
}

module.exports = devConfig;