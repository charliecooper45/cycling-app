const numeral = require('numeral');
const moment = require('moment');

exports.metresToFeet = (value, decimals) => numeral(value * 3.2808).format(decimals ? '0,0.00' : '0,0');

exports.metresToMiles = (value, format, decimals) => {
  const miles = value * 0.000621371;
  return format ? numeral(miles).format(decimals ? '0,0.00' : '0,0') : miles;
};

exports.secondsToDuration = value => moment.duration(value, 'seconds');

exports.formatMiles = value => numeral(value).format('0,0.00');

exports.formatFeet = value => numeral(value).format('0,0');

exports.formatWattsPerKilo = value => numeral(value).format('0,0.00');

exports.formatDate = value => moment(value).format('DD MMMM YYYY');

exports.formatShortDate = value => moment(value).format('DD/MM/YY');

exports.formatPercentage = value => numeral(value).format('0.0%');
