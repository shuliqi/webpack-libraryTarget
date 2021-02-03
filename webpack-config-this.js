module.exports = {
  entry: './src/index.js',
  output: {
    // 打包后的文件名字
    filename: 'webpack-this.js',

    // 模块的返回值分配在 this 对象的 demo 属性上
    library: 'demo',
    libraryTarget: 'this',
    
  }
}