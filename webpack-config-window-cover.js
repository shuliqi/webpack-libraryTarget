
module.exports = {
  entry: './src/index.js',
  output: {
    filename:'webpack-window-cover.js',

    // 如果没有设置 library 的值，那么将模块返回值的所有属性都分配到 `window`对象中。
    libraryTarget: 'window',
  }
}