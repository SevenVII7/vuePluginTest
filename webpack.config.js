// 用來確保webpack不會吐在奇怪的地方
const path = require('path');

module.exports = {
  // 這個檔案import了所有css和js
  entry: './src/index.js',
  module: {
    //放一些正規表達式和模組名稱(記得先安裝)
    rules: []
  },
  // plugins: {
  //  // 放一些類別(class)
  // },
  output: {
    // 吐出來的檔案預設在dist
    path: path.resolve(__dirname, './dist/'),
    // 預設吐出來後把[name]換成main
    filename: 'main.js',
    // filename: '[name].min.js'
  }
}