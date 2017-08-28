const numeral = require('numeral');

exports.metresToFeet = (value, decimals) => {
  return numeral(value*3.2808).format(decimals ? '0,0.00' : '0,0');
};

exports.metresToMiles = (value, decimals) => {
  return numeral(value*0.00062137).format(decimals ? '0,0.00' : '0,0');
};