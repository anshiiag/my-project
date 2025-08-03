const request = require('supertest');
const app = require('../app');

describe('POST /api/url/shorten', () => {
  it('should return short URL for valid input', async () => {
    const res = await request(app)
      .post('/api/url/shorten')
      .send({ originalUrl: 'https://google.com' });

    expect(res.statusCode).toBe(200);
    expect(res.body.shortUrl).toBeDefined();
  });

  it('should return 400 for missing input', async () => {
    const res = await request(app)
      .post('/api/url/shorten')
      .send({});

    expect(res.statusCode).toBe(400);
  });
});
