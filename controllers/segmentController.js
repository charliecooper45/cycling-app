const moment = require('moment');
const numeral = require('numeral');

const segmentService = require('../services/segmentService');
const conversionService = require('../services/conversionService');

const mapSegments = async (segment) => {
  const efforts = await segmentService.findSegmentEfforts(segment.id);
  const effortCount = await segmentService.findSegment(segment.id);
  return {
    title: segment.name,
    distance: `${(conversionService.metresToMiles(segment.distance, true))} miles`,
    avg: numeral(segment.average_grade/100).format('0.0%'),
    max: numeral(segment.maximum_grade/100).format('0.0%'),
    count: `${effortCount.athlete_segment_stats.effort_count} efforts`,
    efforts: efforts.map(mapEfforts)
  }
};

const mapEfforts = (effort) => {
  const duration = moment.duration(effort.elapsed_time, 'seconds');
  return {
    date: moment(effort.start_date).format('DD MMMM YYYY'),
    time: `${duration.minutes()} mins ${duration.seconds()} secs`
  }
};

exports.getSegments = async (req, res) => {
  let segments = await segmentService.findStarredSegments();
  segments = await Promise.all(segments.map(mapSegments));

  res.render('segments', { title: `Segments`, segments});
};