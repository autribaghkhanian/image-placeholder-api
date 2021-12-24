import supertest from 'supertest';
import app from '../../../main';

const request = supertest(app);

describe('Test', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get('/api/images/beach/100');
    console.dir('++++++');
    console.dir(response);
    expect(response.body).toBe('');
    done();
  });
});
