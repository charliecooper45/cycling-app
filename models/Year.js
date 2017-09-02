const mongoose = require('mongoose');

const yearSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: 'Year is required',
    unique: true
  },
  distance: {
    type: Number,
    required: 'Distance is required'
  },
  climbing: {
    type: Number,
    required: 'Climbing is required'
  },
  time: {
    type: Number,
    required: 'Time is required'
  },
  count: {
    type: Number,
    required: 'Count is required'
  }
});

module.exports = mongoose.model('Year', yearSchema);