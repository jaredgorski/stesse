var auth = WeDeploy.auth('stsauth-stesse.wedeploy.io');


function signIn() {
  auth.signInWithEmailAndPassword(user.email.value, user.password.value)
  .then(function(loginSuccess) {
    document.location.href = '../pages/stsadmin.html';
  })
  .catch(function(loginError) {
  	console.log(loginError);
  	alert('Sign-in failed. Try another email/password.');
  });
}

function out() {
	auth.signOut()
	.then(() => {
		location.href = '../pages/stsadmin-login.html';
	});
}


function updatePhoto() {
  var photoUpdateId = document.getElementById('photoupdate-id').value;
  var photoUpdateUrl = document.getElementById('photoupdate-url').value;
    WeDeploy
      .data('https://stsdata-stesse.wedeploy.io')
      .update('stsdataPhotos/' + photoUpdateId, {
        "message": photoUpdateUrl
      }).then(function(success) {
        alert("Gallery updated!");
      });
}

function deleteGallery() {
  if (confirm("This will erase the entire gallery collection from the database. This cannot be undone. Continue?")) {
    WeDeploy
      .data('https://stsdata-stesse.wedeploy.io')
      .delete('stsdataPhotos')
  }
}

function deleteGalleryById() {
  var photoId = document.getElementById('photo-id').value;
  if (photoId == '') {
    alert("Please enter a photo ID.");
  } else if (confirm("This will delete the specified photo from the database. This cannot be undone. Continue?")) {
    WeDeploy
      .data('https://stsdata-stesse.wedeploy.io')
      .delete('stsdataPhotos/' + photoId)
  }
}

function deleteProducts() {
  if (confirm("This will erase all products from the database. This cannot be undone. Continue?")) {
    WeDeploy
      .data('https://stsdata-stesse.wedeploy.io')
      .delete('stsdataProducts')
  }
}

function deleteProductsById() {
  var productId = document.getElementById('product-id').value;
  if (productId == '') {
    alert("Please enter a product ID.");
  } else if (confirm("This will delete the specified product from the database. This cannot be undone. Continue?")) {
    WeDeploy
      .data('https://stsdata-stesse.wedeploy.io')
      .delete('stsdataProducts/' + productId)
  }
}