const mongoose = require('mongoose');
const moment = require('moment');
const athletesService = require('../services/athletesService');
const conversionService = require('../services/conversionService');

const Year = mongoose.model('Year');

const mapStats = (stats) => {
  const duration = conversionService.secondsToDuration(stats.ytd_ride_totals.elapsed_time);
  return {
    longest: `${conversionService.metresToMiles(stats.biggest_ride_distance, true)}`,
    highest: `${conversionService.metresToFeet(stats.biggest_climb_elevation_gain, true)}`,
    total_distance: `${conversionService.metresToMiles(stats.all_ride_totals.distance)}`,
    total_climbing: `${conversionService.metresToFeet(stats.all_ride_totals.elevation_gain)}`,
    year_distance: `${conversionService.metresToMiles(stats.ytd_ride_totals.distance)}`,
    year_distance_decimal: `${conversionService.metresToMiles(stats.ytd_ride_totals.distance, true)}`,
    year_climbing: `${conversionService.metresToFeet(stats.ytd_ride_totals.elevation_gain)}`,
    year_time: `${duration.days()}d ${duration.hours()}h ${duration.minutes()}m`,
    year_count: `${stats.ytd_ride_totals.count}`,
    year: moment().year()
  };
};

const mapYears = (year) => {
  const duration = conversionService.secondsToDuration(year.time);
  return {
    year: year.year,
    distance: conversionService.formatMiles(year.distance),
    climbing: conversionService.formatFeet(year.climbing),
    time: `${duration.days()} d ${duration.hours()} h ${duration.minutes()} m`,
    count: year.count
  };
};

exports.getHome = async (req, res) => {
  let stats = await athletesService.findAthleteStats();
  stats = mapStats(stats);

  let years = await Year.find().sort('-distance').limit(5);
  years = years.map(mapYears);

  res.render('home', { title: 'Home', stats, years });
};
