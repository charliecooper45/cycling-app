const mongoose = require('mongoose');

const targetSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: 'Year is required',
    unique: true
  },
  target: {
    type: Number,
    required: 'Target is required'
  },
  values: {
    type: [Number]
  }
});

module.exports = mongoose.model('Target', targetSchema);
