const mongoose = require('mongoose');
const Year = mongoose.model('Year');

const athletesService = require('../services/athletesService');
const conversionService = require('../services/conversionService');

const mapStats = (stats) => {
  return {
    longest: `${conversionService.metresToMiles(stats.biggest_ride_distance, true)}`,
    highest: `${conversionService.metresToFeet(stats.biggest_climb_elevation_gain, true)}`,
    total_distance: `${conversionService.metresToMiles(stats.all_ride_totals.distance)}`,
    total_climbing: `${conversionService.metresToFeet(stats.all_ride_totals.elevation_gain)}`,
    year_distance: `${conversionService.metresToMiles(stats.ytd_ride_totals.distance)}`,
    year_climbing: `${conversionService.metresToFeet(stats.ytd_ride_totals.elevation_gain)}`
  }
};

exports.getHome = async (req, res) => {
  // const years = await Year.find();
  let stats = await athletesService.findAthleteStats();
  stats = mapStats(stats);

  res.render('home', { title: 'Home', stats });
};