module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'webpack-amd-cover.js',
    // 没有定义 library 
    libraryTarget: 'amd',
  }
}