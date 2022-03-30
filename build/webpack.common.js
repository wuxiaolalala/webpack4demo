const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack')
const { merge } = require('webpack-merge')
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
const commonConfig = {
  entry: {
    main: './src/index.js'
  },
  output: {
    // publicPath:'/',
    path:path.resolve(__dirname,'../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
          // presets: [["@babel/preset-env", {
          //   targets: {
          //     chrome:"67" // 设定浏览器版本，如果这样设置67可以支持es6语法，就不用转es5了，不用引入方法了
          //   },
          //   useBuiltIns:"usage" // 用到的才打包到代码里，没用到的不打包
          // }]]
          // "plugins": [["@babel/plugin-transform-runtime", {
          //   "corejs": 2,
          //   "helpers": true,
          //   "regenerator": true,
          //   "useESModules":false
          // }]]
          }
          },
          // {
          //   loader:"imports-loader?this=>window"
          // }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit:10240
          }
        }
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root:path.resolve(__dirname,'../')
    }),
    // new webpack.ProvidePlugin({
    //   $:'jquery'
    // })
  ],
  performance:false,
  optimization: {
    runtimeChunk: {
      name:'runtime'
    },
    usedExports:true,
    splitChunks: {
      chunks: 'all',
      // cacheGroups: {
      //   defaultVendors: false,
      //   default: false
      // },
    }
  }
}

module.exports = (env) => { 
  if (env && env.production) {
    return merge(commonConfig,prodConfig)
  } else { 
    return merge(commonConfig,devConfig)
   }
}