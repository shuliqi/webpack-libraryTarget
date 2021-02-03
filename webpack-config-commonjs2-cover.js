module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'webpack-commonjs2-cover.js',
    
    // 如果没有指定 `library`， 那么模块的返回值将直接分配到 `module.exports`上。
    libraryTarget: 'commonjs2',
  }
}