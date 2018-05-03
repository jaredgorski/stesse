const handlebars = require('handlebars');
const fs = require('fs');

module.exports.products = function (req, res, next) {
  const source = fs.readFileSync('./pages/products.html').toString();
  const template = handlebars.compile(source);
  const html = template();
  res.send(html);
};