const handlebars = require('handlebars');
const fs = require('fs');

module.exports.adminLogin = function (req, res, next) {
  const source = fs.readFileSync('./pages/adminLogin.html').toString();
  const template = handlebars.compile(source);
  const html = template();
  res.send(html);
};