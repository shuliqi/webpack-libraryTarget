module.exports = {
  entry: './src/index.js',
  output: {
    // 打包的文件名
    filename: 'webpack-var.js',

    // 模块的返回值分配到一个使用var 声明的变量上， 该变量由  library 决定
    library: 'demo',
    libraryTarget: 'var',
  }
}