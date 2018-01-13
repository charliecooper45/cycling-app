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
  },
  test: {
    type: String,
    required: 'Test type is required'
  }
});

module.exports = mongoose.model('Ftp', ftpSchema);
