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
    .data('data-ststesting.wedeploy.io')
    .create('contact', contactData)
    .then(function(dbresponse) {

      console.info('Saved:', dbresponse);

      WeDeploy
        .email('email-ststesting.wedeploy.io')
        .auth('b3707fa3-57f6-491a-8184-4a9d513f24c9')
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