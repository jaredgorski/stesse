var form = document.querySelector('.stsphotosubmit');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let photoData = {
    message: document.getElementById('photosubmit-input').value,
  }


  let photoSubmission = "Photo Link(s): " + photoData.message;


  var imageUrl = photoData.message;
  var goodImage = imageUrl.includes(".jpg") || imageUrl.includes(".jpeg");
  if (goodImage) {
    WeDeploy
      .data('data-ststesting.wedeploy.io')
      .create('stsdataPhotos', photoData)
      .then(function(response) {
        form.reset();
        console.info('Saved:', response);

        WeDeploy
          .email('email-ststesting.wedeploy.io')
          .auth('b3707fa3-57f6-491a-8184-4a9d513f24c9')
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
  } else {
    alert('Only direct urls to .jpg images will be accepted. Please check your url and try again.')
  }
});