const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.loginForm = (req, res) => {
  res.render('login');
};

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Login failed',
  successRedirect: '/'
});

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};