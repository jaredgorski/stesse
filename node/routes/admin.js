const handlebars = require('handlebars');
const fs = require('fs');

module.exports.admin = function (req, res, next) {
  const source = fs.readFileSync('./pages/admin.html').toString();
  const template = handlebars.compile(source);
  const html = template();
  res.send(html);
};