var auth = WeDeploy.auth('auth-ststest.wedeploy.io');


function signIn() {
	console.log(user.email.value);
  auth.signInWithEmailAndPassword(user.email.value, user.password.value)
  .then(function(loginSuccess) {
  	console.log(loginSuccess);
    document.location.href = '../pages/stsadmin.html';
    console.log('yay');
  })
  .catch(function(loginError) {
  	console.log(loginError);
  	alert('Sign-in failed. Try another email/password.');
    console.log('boo');
  });
}


if (auth.currentUser) {
    document.getElementById('name').placeholder = auth.currentUser.name;
    document.getElementById('email').placeholder = auth.currentUser.email;
}


function out() {
	auth.signOut()
	.then(() => {
		location.href = '../pages/stsadmin-login.html';
	});
}