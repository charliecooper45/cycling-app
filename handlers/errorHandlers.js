exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

exports.errors = (err, req, res, next) => {
  res.status(err.status || 500);
  const errorDetails = {
    message: err.message,
    stack: err.stack
  };
  res.render('error', errorDetails);
};

// TODO: production errors
