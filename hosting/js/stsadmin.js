
var auth = WeDeploy.auth('auth-ststest.wedeploy.io');


// sign in
function signIn() {
  auth.signInWithEmailAndPassword(user.email.value, user.password.value)
  .then(function() {
    document.location.href = '../pages/stsadmin.html';
  })
  .catch(function() {
    alert('Sign-in failed. Try another email/password.');
    console.log(user.email.value);
	console.log(user.password.value);
  });
}


// select current user
if (auth.currentUser) {
    document.getElementById('name').placeholder = auth.currentUser.name;
    document.getElementById('email').placeholder = auth.currentUser.email;
}