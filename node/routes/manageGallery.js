const handlebars = require('handlebars');
const fs = require('fs');

module.exports.manageGallery = function (req, res, next) {
  const source = fs.readFileSync('./pages/manageGallery.html').toString();
  const template = handlebars.compile(source);
  const html = template();
  res.send(html);
};