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

function deleteGallery() {
  if (confirm("This will erase the entire gallery collection from the database. This cannot be undone. Continue?")) {
    WeDeploy
      .data('https://stsdata-stesse.wedeploy.io')
      .delete('stsdataPhotos')
    }
}

function deleteProducts() {
  if (confirm("This will erase all products from the database. This cannot be undone. Continue?")) {
    WeDeploy
      .data('https://stsdata-stesse.wedeploy.io')
      .delete('stsdataProducts')
  }
}