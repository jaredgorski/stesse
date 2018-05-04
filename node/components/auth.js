module.exports.auth = function (req, res, next) {
  const WeDeploy = require('wedeploy');
  const express = require('express');

  const app = express();

  var auth = WeDeploy.auth('auth-stesse.wedeploy.io');

  function out() {
   auth.signOut()
   .then(() => {
     location.href = '/adminLogin';
   });
  }

  app.get('/logout', (req, res, next) => {
    res.clearCookie('access_token');
    res.redirect('/');
  });
}