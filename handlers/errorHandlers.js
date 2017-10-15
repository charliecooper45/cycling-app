exports.catchErrors = fn => (req, res, next) => fn(req, res, next).catch(next);

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

exports.validationErrors = (err, req, res, next) => {
  if (!err.errors) return next(err);
  const errorKeys = Object.keys(err.errors);
  errorKeys.forEach(key => req.flash('error', err.errors[key].message));
  return res.redirect('/');
};

exports.errors = (err, req, res, next) => {
  if (!err) return next(err);
  res.status(err.status || 500);
  const errorDetails = {
    message: err.message,
    stack: err.stack
  };
  return res.render('error', errorDetails);
};