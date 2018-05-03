const handlebars = require('handlebars');
const fs = require('fs');

module.exports.blogDefault = function (req, res, next) {
  const source = fs.readFileSync('./pages/blogDefault.html').toString();
  const template = handlebars.compile(source);
  const html = template();
  res.send(html);
};