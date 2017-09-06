const moment = require('moment');
const mongoose = require('mongoose');
const conversionService = require('../services/conversionService');

const Ftp = mongoose.model('Ftp');

const mapFtp = ftp => ({
  date: conversionService.formatDate(ftp.date),
  value: ftp.value
});

exports.getFitness = async (req, res) => {
  let ftps = await Ftp.find().sort('-date');
  ftps = await Promise.all(ftps.map(mapFtp));
  res.render('fitness', { ftps });
};

exports.createFtp = async (req, res) => {
  const { day, month, year, ftp } = req.body;
  const date = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
  await Ftp.findOneAndUpdate({ date }, { date, value: ftp }, { upsert: true });
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
