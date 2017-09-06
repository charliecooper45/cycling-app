const mongoose = require('mongoose');

const ftpSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: 'Date is required',
    unique: true
  },
  value: {
    type: Number,
    required: 'Value is required'
  }
});

module.exports = mongoose.model('Ftp', ftpSchema);
