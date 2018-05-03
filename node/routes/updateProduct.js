const handlebars = require('handlebars');
const fs = require('fs');

module.exports.updateProduct = function (req, res, next) {
  const source = fs.readFileSync('./pages/updateProduct.html').toString();
  const template = handlebars.compile(source);