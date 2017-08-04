const path = require('path');
const webpack = require('webpack');

module.export = {

  devtool: 'cheap-module-source-map',

  // 在这里写你的资源文件
  entry: {
    main: './src/js/main.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
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
          'css-loader',
          'less-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)&/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.md$/,
        use: [
          'html-loader',
          'markdown-loader'
        ]
      }
    ]
  },

  devServer: {
    port: 7777,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    contentBase: __dirname + '/blog',
    watchOptions: {
      poll: true
    }
  }
}