const moment = require('moment');

const stravaAthleteId = process.env.STRAVA_ATHLETE_ID;
const segmentService = require('../services/segmentService');

const mapSegments = async (segment) => {
  const efforts = await segmentService.findSegmentEfforts(segment.id, stravaAthleteId);
  const effortCount = await segmentService.findSegment(segment.id);
  return {
    title: segment.name,
    distance: `${(segment.distance*0.00062137).toFixed(2)} miles`,
    avg: `${segment.average_grade} %`,
    max: `${segment.maximum_grade} %`,
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