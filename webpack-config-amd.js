module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'webpack-amd.js',

    // library 定义有效值
    library: 'demo',
    libraryTarget: 'amd',
  }
}