const moment = require('moment');
const mongoose = require('mongoose');
const conversionService = require('../services/conversionService');

const Ftp = mongoose.model('Ftp');
const Weight = mongoose.model('Weight');

const mapFtp = ftp => ({
  date: conversionService.formatDate(ftp.date),
  shortDate: conversionService.formatShortDate(ftp.date),
  value: ftp.value,
  test: ftp.test
});

const mapWeight = weight => ({
  date: conversionService.formatDate(weight.date),
  shortDate: conversionService.formatShortDate(weight.date),
  value: weight.value
});

const getStats = (ftps, weights) => {
  const ftp = ftps.length > 0 ? ftps[0].value : 'NA';
  const weight = weights.length > 0 ? weights[0].value : 'NA';
  return {
    ftp,
    weight,
    wattsPerKilo: conversionService.formatWattsPerKilo(ftp / weight)
  };
};

exports.getFitness = async (req, res) => {
  let ftps = await Ftp.find().sort('-date');
  ftps = await Promise.all(ftps.map(mapFtp));
  let weights = await Weight.find().sort('-date');
  weights = await Promise.all(weights.map(mapWeight));
  res.render('fitness', { stats: getStats(ftps, weights), ftps, weights });
};

exports.createFtp = async (req, res) => {
  const { day, month, year, ftp, test } = req.body;
  const date = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
  await Ftp.findOneAndUpdate({ date }, { date, value: ftp, test }, { upsert: true });
  req.flash('success', 'FTP added');
  res.redirect('/fitness');
};

exports.deleteFtp = async (req, res) => {
  const values = req.body.date.split('/');
  const date = moment(`${values[2]}${values[1]}${values[0]}`);
  const ftp = await Ftp.findOneAndRemove({ date });
  if (ftp) {
    req.flash('success', `Ftp ${req.body.date} deleted`);
  } else {
    req.flash('error', `Ftp ${req.body.date ? req.body.date : ''} does not exist`);
  }
  res.redirect('/fitness');
};

exports.createWeight = async (req, res) => {
  const { day, month, year, weight } = req.body;
  const date = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
  await Weight.findOneAndUpdate({ date }, { date, value: weight }, { upsert: true });
  req.flash('success', 'Weight added');
  res.redirect('/fitness');
};

exports.deleteWeight = async (req, res) => {
  const values = req.body.date.split('/');
  const date = moment(`${values[2]}${values[1]}${values[0]}`);
  const weight = await Weight.findOneAndRemove({ date });
  if (weight) {
    req.flash('success', `Weight ${req.body.date} deleted`);
  } else {
    req.flash('error', `Weight ${req.body.date ? req.body.date : ''} does not exist`);
  }
  res.redirect('/fitness');
};
