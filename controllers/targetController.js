const mongoose = require('mongoose');
const moment = require('moment');
const targetValueService = require('../services/targetValueService');

const Target = mongoose.model('Target');

exports.createTarget = async (req, res) => {
  if (moment().month() === 0) {
    await Target.findOneAndUpdate({ year: req.body.year }, { target: req.body.target, values: [0] }, { upsert: true });
    req.flash('success', 'Target added');
  } else {
    req.flash('error', 'Target can only be created in January');
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

exports.refreshTargetValues = async (req, res) => {
  try {
    await targetValueService.fetchTotal();
    req.flash('success', 'Target values updated');
    res.sendStatus(200);
  } catch (error) {
    req.flash('error', 'Error updating target values');
    res.sendStatus(500);
  }
};
