module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'webpack-umd.js',
    library: 'demo',
    libraryTarget: 'umd',
  }
}