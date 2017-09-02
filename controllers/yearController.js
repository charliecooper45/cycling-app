const mongoose = require('mongoose');

const Year = mongoose.model('Year');

exports.createYear = async (req, res) => {
  await Year.findOneAndUpdate({ year: req.body.year }, req.body, { upsert: true });
  req.flash('success', 'Year added');
  res.redirect('/');
};

exports.deleteYear = async (req, res) => {
  const year = await Year.findOneAndRemove({ year: req.body.year });
  if (year) {
    req.flash('success', `Year ${year.year} deleted`);
  } else {
    req.flash('error', `Year ${year ? year.year : ''} does not exist`);
  }
  res.redirect('/');
};
