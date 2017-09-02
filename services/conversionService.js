const numeral = require('numeral');
const moment = require('moment');

exports.metresToFeet = (value, decimals) => {
  return numeral(value*3.2808).format(decimals ? '0,0.00' : '0,0');
};

exports.metresToMiles = (value, decimals) => {
  return numeral(value*0.00062137).format(decimals ? '0,0.00' : '0,0');
};

exports.secondsToDuration = (value) => {
  return moment.duration(value, 'seconds');
};

exports.formatMiles = (value) => {
  return numeral(value).format('0,0.00');
};

exports.formatFeet = (value) => {
  return numeral(value).format('0,0');
};

exports.formatDate = (value) => {
  return moment(value).format('DD MMMM YYYY');
};

exports.formatPercentage = (value) => {
  return numeral(value).format('0.0%');
};