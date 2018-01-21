const mongoose = require('mongoose');

const Target = mongoose.model('Target');

exports.createTarget = async (req, res) => {
  await Target.findOneAndUpdate({ year: req.body.year }, { target: req.body.target }, { upsert: true });
  req.flash('success', 'Target added');
  res.redirect('/');
};

exports.deleteTarget = async (req, res) => {
  const target = await Target.findOneAndRemove({ year: req.body.year });
  if (target) {
    req.flash('success', `Target for year ${target.year} deleted`);
  } else {
    req.flash('error', `Target for year ${req.body.year ? req.body.year : ''} does not exist`);
  }
  res.redirect('/');
};