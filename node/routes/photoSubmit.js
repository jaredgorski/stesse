const handlebars = require('handlebars');
const fs = require('fs');

module.exports.photoSubmit = function (req, res, next) {
  const source = fs.readFileSync('./pages/photoSubmit.html').toString();
  const template = handlebars.compile(source);
  const html = template();
  res.send(html);
};