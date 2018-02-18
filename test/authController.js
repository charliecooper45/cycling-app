const request = require('supertest');
require('../start.js');
const app = require('../app.js');

describe('GET /login', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/login')
      .expect(200, done);
  });
});

describe('GET /fitness', () => {
  it('should return 401 UNAUTHORISED', (done) => {
    request(app)
      .get('/fitness')
      .expect(401, done);
  });
});
