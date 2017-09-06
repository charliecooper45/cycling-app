const segmentService = require('../services/segmentService');
const conversionService = require('../services/conversionService');

const mapEffort = (effort) => {
  const duration = conversionService.secondsToDuration(effort.elapsed_time);
  return {
    date: conversionService.formatDate(effort.start_date),
    time: `${duration.minutes()} mins ${duration.seconds()} secs`
  };
};

const mapSegment = async (segment) => {
  const efforts = await segmentService.findSegmentEfforts(segment.id);
  const effortCount = await segmentService.findSegment(segment.id);
  return {
    title: segment.name,
    distance: `${(conversionService.metresToMiles(segment.distance, true))} miles`,
    avg: conversionService.formatPercentage(segment.average_grade / 100),
    max: conversionService.formatPercentage(segment.maximum_grade / 100),
    count: `${effortCount.athlete_segment_stats.effort_count} efforts`,
    efforts: efforts.map(mapEffort)
  };
};

exports.getSegments = async (req, res) => {
  let segments = await segmentService.findStarredSegments();
  segments = await Promise.all(segments.map(mapSegment));

  res.render('segments', { title: 'Segments', segments });
};
