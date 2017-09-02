const request = require('request-promise');

const accessToken = process.env.STRAVA_ACCESS_TOKEN;
const stravaAthleteId = process.env.STRAVA_ATHLETE_ID;
const stravaAthletesApi = 'https://www.strava.com/api/v3/athletes';

exports.findAthleteStats = () => {
  const options = {
    uri: `${stravaAthletesApi}/${stravaAthleteId}/stats`,
    qs: {
      access_token: accessToken
    },
    json: true
  };
  return request(options);
};
