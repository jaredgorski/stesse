const handlebars = require('handlebars');
const fs = require('fs');

module.exports.blog = function (req, res, next) {
  const source = fs.readFileSync('./pages/blog.html').toString();
  const template = handlebars.compile(source);