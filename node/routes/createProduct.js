const handlebars = require('handlebars');
const fs = require('fs');

module.exports.createProduct = function (req, res, next) {
  const source = fs.readFileSync('./pages/createProduct.html').toString();
  const template = handlebars.compile(source);