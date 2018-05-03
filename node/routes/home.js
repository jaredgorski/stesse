const handlebars = require('handlebars');
const fs = require('fs');

module.exports.home = function (req, res, next) {
  const source = fs.readFileSync('./pages/index.html').toString();
  const template = handlebars.compile(source);
  const html = template();
  res.send(html);
};