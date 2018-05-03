const handlebars = require('handlebars');
const fs = require('fs');

module.exports.manageProducts = function (req, res, next) {
  const source = fs.readFileSync('./pages/manageProducts.html').toString();
  const template = handlebars.compile(source);