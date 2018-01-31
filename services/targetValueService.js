const moment = require('moment');
const athletesService = require('./athletesService');
const conversionService = require('./conversionService');
const Target = require('../models/Target');

exports.fetchTotal = async () => {
  const year = moment().year();
  const target = await Target.findOne({ year });
  if (target) {
    const stats = await athletesService.findAthleteStats();
    const yearDistance = parseInt(conversionService.metresToMiles(stats.ytd_ride_totals.distance), 10);
    const month = moment().month() + 1;
    target.values[month] = yearDistance;
    console.log(`Setting month ${month} value to ${target.values[month]}`);
    await Target.findOneAndUpdate({ year }, { values: target.values });
  }
};
