const passport = require('passport');

exports.loginForm = (req, res) => {
  res.render('login');
};

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Login failed',
  successRedirect: '/',
  successFlash: 'Login success'
});

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).render('../views/login');
};
