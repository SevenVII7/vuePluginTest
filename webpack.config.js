// 用來確保webpack不會吐在奇怪的地方
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // 這個檔案import了所有css和js
  entry: './src/index.js',
  output: {
    // 吐出來的檔案預設在dist
    path: path.resolve(__dirname, './dist/'),
    // 預設吐出來後把[name]換成main
    filename: 'main.js',
    // filename: '[name].min.js'
  },
  module: {
    //放一些正規表達式和模組名稱
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    // 放一些類別(class)
    new VueLoaderPlugin()
  ]
}