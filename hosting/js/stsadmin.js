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
  WeDeploy
    .data('https://stsdata-stesse.wedeploy.io')
    .delete('stsdataPhotos')
}

function deleteProducts() {
  WeDeploy
    .data('https://stsdata-stesse.wedeploy.io')
    .delete('stsdataProducts')
}