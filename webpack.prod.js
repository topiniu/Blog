const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin');


module.exports = {

  watch: false,
  watchOptions: {
    ignored: './sec/js/*.js'
  },

  // 在这里写你的资源文件
  entry: {
    main: './src/js/main.js',
    main_style: './src/js/main_style.js',
    loadPassage: './src/js/loadPassage.js',
    vendor: [
      'highlight.js/styles/railscasts.css',
      'github-markdown-css'
    ],
  },
  plugins: [
    new Clean(['blog/assets']),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jquery": "jquery"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpack({
      filename: '../index.html',
      template: 'src/index.html'
    }),
    new UglifyJSPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
      },
      comments: false
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/blog/assets',
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            }
          },
          'less-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              name: '[name].[ext]'
            }
          }
        ]
      }, {
        test: /\.md$/,
        use: [
          'html-loader',
          'grommet-markdown-loader'
        ]
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
}