const handlebars = require('handlebars');
const fs = require('fs');

module.exports.contact = function (req, res, next) {
  const source = fs.readFileSync('./pages/contact.html').toString();
  const template = handlebars.compile(source);

  let success = false;
  let failure = false;

  if (req.query.cmd === 'success') {
    success = true;
    console.log('in if');
  } else if (req.query.cmd === 'fail') {
    failure = true;
    console.log("in else if");
  };
  const html = template({success: success, failure: failure});
  res.send(html);
};