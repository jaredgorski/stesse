const handlebars = require('handlebars');
const fs = require('fs');

module.exports.gallery = function (req, res, next) {
  const source = fs.readFileSync('./pages/gallery.html').toString();
  const template = handlebars.compile(source);
  const html = template();
  res.send(html);
};