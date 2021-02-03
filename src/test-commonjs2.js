const my_module_exports = require('../dist/webpack-commonjs2.js');
const demo = my_module_exports.demo;
console.log(my_module_exports);
console.log(demo);
demo.getName()