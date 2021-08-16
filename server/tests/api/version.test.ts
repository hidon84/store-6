import request from 'supertest';
import createApp from '@/app';

describe('Test version route', () => {
  const url = '/api/version';

  test(`GET ${url} API Test`, done => {
    createApp()
      .then(app => request(app).get(url))
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.version).toBe(process.env.API_VERSION);
        done();
      });
  });

  /*
    => POST 요청 테스트 샘플
    const res = await request(app)
      .post('/user')
      .set('Accept', 'application/json')
      .type('application/json')
      .send({ name: 'test user' })
  */
});
