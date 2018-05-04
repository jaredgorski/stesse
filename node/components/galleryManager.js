module.exports.galleryManager = function (req, res, next) {
  const WeDeploy = require('wedeploy');
  function updatePhoto() {
    var photoUpdateId = document.getElementById('photoupdate-id').value;
    var photoUpdateUrl = document.getElementById('photoupdate-url').value;
      WeDeploy
        .data('https://data-stesse.wedeploy.io')
        .update('stsdataPhotos/' + photoUpdateId, {
          "message": photoUpdateUrl
        }).then(function(success) {
          alert("Gallery updated!");
        });
  }

  function deleteGallery() {
    if (confirm("This will erase the entire gallery collection from the database. This cannot be undone. Continue?")) {
      WeDeploy
        .data('https://data-stesse.wedeploy.io')
        .delete('stsdataPhotos')
    }
  }

  function deleteGalleryById() {
    var photoId = document.getElementById('photo-id').value;
    if (photoId == '') {
      alert("Please enter a photo ID.");
    } else if (confirm("This will delete the specified photo from the database. This cannot be undone. Continue?")) {
      WeDeploy
        .data('https://data-stesse.wedeploy.io')
        .delete('stsdataPhotos/' + photoId)
    }
  }
}