const request = require('request-promise');

const accessToken = process.env.STRAVA_ACCESS_TOKEN;
const stravaAthleteId = process.env.STRAVA_ATHLETE_ID;
const stravaSegmentApi = 'https://www.strava.com/api/v3/segments';

exports.findStarredSegments = () => {
  const options = {
    uri: `${stravaSegmentApi}/starred`,
    qs: {
      access_token: accessToken
    },
    json: true
  };
  return request(options);
};

exports.findSegmentEfforts = (segmentId) => {
  const options = {
    uri: `${stravaSegmentApi}/${segmentId}/all_efforts`,
    qs: {
      access_token: accessToken,
      per_page: '10',
      athlete_id: stravaAthleteId
    },
    json: true
  };
  return request(options);
};

exports.findSegment = (segmentId) => {
  const options = {
    uri: `${stravaSegmentApi}/${segmentId}`,
    qs: {
      access_token: accessToken
    },
    json: true
  };
  return request(options);
};
