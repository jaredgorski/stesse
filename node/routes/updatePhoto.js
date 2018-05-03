const handlebars = require('handlebars');
const fs = require('fs');

module.exports.updatePhoto = function (req, res, next) {
  const source = fs.readFileSync('./pages/updatePhoto.html').toString();
  const template = handlebars.compile(source);