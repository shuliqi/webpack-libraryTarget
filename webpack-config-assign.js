module.exports = {
  entry: './src/index.js',
  output: {
    // 打包文件名字
    filename: 'webpack-assign.js',

    // 模块的返回值将分配到一个没有使用var声明的变量上，变量由 library 控制
    library: 'demo',
    libraryTarget: 'assign',
  }
}