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

describe('GET /logout', () => {
  it('should return 302 FOUND', (done) => {
    request(app)
      .get('/')
      .expect('Location', '/login')
      .expect(302, done);
  });
});
