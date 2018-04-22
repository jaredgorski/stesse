// DATA
var form = document.querySelector('.stsphotosubmit');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let photoData = {
    message: document.getElementById('photosubmit-input').value,
  }

  // EMAIL
  let photoSubmission = "Photo Link(s): " + photoData.message;

//savedata
  WeDeploy
    .data('stsdata-stesse.wedeploy.io')
    .create('contact', photoData)
    .then(function(response) {
      form.reset();
      console.info('Saved:', response);
      // EMAIL post method
      WeDeploy
        .email('stsemail-stesse.wedeploy.io')
        .auth('74550c77-dc21-4e9d-9908-75f2d960eb73')
        .from('jared.gorski@wedeploy.com')
        .to('jared.gorski@liferay.com')
        .subject("Stesse - New Photo Submission")
        .message(photoSubmission)
        .send()
        .then(function(response) {
          console.log(response);
          alert('Thank you for your submission!');
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