module.exports.login = function (req, res, next) {
  const WeDeploy = require('wedeploy');

  var auth = WeDeploy.auth('auth-stesse.wedeploy.io');


  function signIn() {
    auth.signInWithEmailAndPassword(user.email.value, user.password.value)
    .then(function(loginSuccess) {
      document.location.href = '/admin';
    })
    .catch(function(loginError) {
     console.log(loginError);
     alert('Sign-in failed. Try another email/password.');
    });
  }

}