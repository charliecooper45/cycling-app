const mongoose = require('mongoose');

const yearSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
    unique: true
  },
  miles: Number
});

module.exports = mongoose.model('Year', yearSchema);