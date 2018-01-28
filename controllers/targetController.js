const mongoose = require('mongoose');
const moment = require('moment');
const Target = mongoose.model('Target');

exports.createTarget = async (req, res) => {
  if (moment().month() === 0) {
    await Target.findOneAndUpdate({year: req.body.year}, {target: req.body.target}, {upsert: true});
    req.flash('success', 'Target added');
  } else {
    req.flash('error', `Target can only be created in January`);
  }
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