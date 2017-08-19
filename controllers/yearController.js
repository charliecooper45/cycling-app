const mongoose = require('mongoose');
const Year = mongoose.model('Year');

exports.getYears = async (req, res) => {
  const years = await Year.find();
  res.render('years', { title: `Years (${years.length} total)`, years });
};