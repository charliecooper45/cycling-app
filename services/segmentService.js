const request = require('request-promise');

const accessToken = process.env.STRAVA_ACCESS_TOKEN;
const stravaSegmentAPI = 'https://www.strava.com/api/v3/segments';

exports.findStarredSegments = () => {
  var options = {
    uri: `${stravaSegmentAPI}/starred`,
    qs: {
      access_token: accessToken
    },
    json: true
  };
  return request(options);
};

exports.findSegmentEfforts = (segmentId, athleteId) => {
  var options = {
    uri: `${stravaSegmentAPI}/${segmentId}/all_efforts`,
    qs: {
      access_token: accessToken,
      per_page: '10',
      athlete_id: athleteId
    },
    json: true
  };
  return request(options);
};

exports.findSegment = (segmentId) => {
  var options = {
    uri: `${stravaSegmentAPI}/${segmentId}`,
    qs: {
      access_token: accessToken
    },
    json: true
  };
  return request(options);
};