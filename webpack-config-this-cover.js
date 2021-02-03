
module.exports = {
  entry: './src/index.js',
  output: {
    filename:'webpack-this-cover.js',

    // 如果没有设置 library 的值，那么将模块返回值的所有属性都分配到 `this`对象中。
    libraryTarget: 'this',
  }
}