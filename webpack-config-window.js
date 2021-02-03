module.exports = {
  entry: '/src/index.js',
  output: {
    filename:'webpack-window.js',

    // 模块的返回值分配到 window 对象的 demo 属性上
    library: 'demo',
    libraryTarget: 'window',
  }
}