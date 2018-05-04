const WeDeploy = require('wedeploy');

module.exports.contactPost = function (req, res, next) {
  const contactData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fromEmail: req.body.emailAddress,
    message: req.body.message,
  };

  const msg = "First Name: " + contactData.firstName + "<br>Last Name: " +
  contactData.lastName + "<br>Message: " + contactData.message;

  WeDeploy
    .data('data-stesse.wedeploy.io')
    .create('contact', contactData)
    .then(function(dbresponse) {

      console.info('Saved:', dbresponse);

      WeDeploy
        .email('email-stesse.wedeploy.io')
        .auth('74550c77-dc21-4e9d-9908-75f2d960eb73')
        .from(contactData.fromEmail)
        .to('jared.gorski@liferay.com')
        .subject("Stesse Contact - New Message")
        .message(msg)
        .send()
        .then(function(emailresponse) {
          console.log(emailresponse);
          res.redirect('/contact?cmd=success');
        })
    })
    .catch(function(error) {
      console.log(error);
      res.redirect('/contact?cmd=fail');
    });
}