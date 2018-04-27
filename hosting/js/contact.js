var form = document.querySelector('.stscontact');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let contactData = {
    firstName: document.querySelector('input[name="first-name"]').value,
    lastName: document.querySelector('input[name="last-name"]').value,
    fromEmail: document.querySelector('input[name="email-address"]').value,
    message: document.getElementById('message').value,
  }

  let msg = "First Name: " + contactData.firstName + "<br>Last Name: " +
  contactData.lastName + "<br>Message: " + contactData.message;


  WeDeploy
    .data('stsdata-stesse.wedeploy.io')
    .create('contact', contactData)
    .then(function(response) {
      form.reset();
      console.info('Saved:', response);

      WeDeploy
        .email('stsemail-stesse.wedeploy.io')
        .auth('74550c77-dc21-4e9d-9908-75f2d960eb73')
        .from(contactData.fromEmail)
        .to('jared.gorski@liferay.com')
        .subject("Stesse Contact - New Message")
        .message(msg)
        .send()
        .then(function(response) {
          console.log(response);
          alert('Thank you for your message. We will get back to you shortly!');
        })
        .catch(function(error) {
          console.log(error);
          alert('There was an error. Please try again!');
        });
    })
    .catch(function(error) {
      console.log(error);
    });
});