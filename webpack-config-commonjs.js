module.exports = {
  entry: './src/index.js',
  output: {
    filename:'webpack-commonjs.js',

    // 模块的返回值分配给 `exports` 对象的属性上， 这个属性由 `output.library` 指定
    library: 'demo',
    libraryTarget: 'commonjs',
  }
}