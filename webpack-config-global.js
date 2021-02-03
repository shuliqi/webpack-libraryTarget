module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'webpack-global.js',

    // 模块的的返回值将分配给 global对象 demo 属性上
    library: 'demo',
    libraryTarget: 'global',
  }
}