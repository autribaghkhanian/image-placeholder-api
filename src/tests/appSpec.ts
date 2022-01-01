import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('Endpint checks', () => {
  it('checks wrong endpoint', (done) => {
    request.get('/test').expect('Not a valid route', done);
  });
});
