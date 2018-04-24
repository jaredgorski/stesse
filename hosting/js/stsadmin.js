var auth = WeDeploy.auth('auth-stesse.wedeploy.io');


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