var imgGridContent = document.getElementById('imageGrid');

WeDeploy
  .data('stsdata-ststest.wedeploy.io')
  .orderBy()
  .get('stsdataPhotos')
  .then(function(response) {
    populateImages(response);
  })
  .catch(function(error) {
    console.error(error);
  });

function populateImages(photoData) {
  var galleryGrid = '';

  photoData.forEach(function(image) {
    var imageUrl = image.message;
    var goodImage = imageUrl.includes(".jpg") || imageUrl.includes(".jpeg");
    if (goodImage) {
    galleryGrid += `<div class="image-grid-content" id="gridImage" style="background-image:url(${image.message});"></div>`;
    }
  });

  imgGridContent.innerHTML = galleryGrid;
}