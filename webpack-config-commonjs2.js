module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'webpack-commonjs2.js',

    // 模块的返回值（入口的返回值）分配给 `module.exports`对象上的属性, 这个属性由`library`指定
    library: 'demo',
    libraryTarget: 'commonjs2',
  }
}