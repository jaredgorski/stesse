const handlebars = require('handlebars');
const fs = require('fs');

module.exports.addPhoto = function (req, res, next) {
  const source = fs.readFileSync('./pages/addPhoto.html').toString();
  const template = handlebars.compile(source);
  const html = template();
  res.send(html);
};