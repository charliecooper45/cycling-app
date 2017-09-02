const numeral = require('numeral');
const moment = require('moment');

exports.metresToFeet = (value, decimals) => numeral(value * 3.2808).format(decimals ? '0,0.00' : '0,0');

exports.metresToMiles = (value, decimals) => numeral(value * 0.00062137).format(decimals ? '0,0.00' : '0,0');

exports.secondsToDuration = value => moment.duration(value, 'seconds');

exports.formatMiles = value => numeral(value).format('0,0.00');

exports.formatFeet = value => numeral(value).format('0,0');

exports.formatDate = value => moment(value).format('DD MMMM YYYY');

exports.formatPercentage = value => numeral(value).format('0.0%');
