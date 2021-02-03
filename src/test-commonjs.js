const my_exports = require('../dist/webpack-commonjs');
const demo = my_exports.demo;
console.log(demo)
demo.getName()