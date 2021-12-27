import supertest from 'supertest';
import { assetsPath } from '../image-processing/imageProcessing';
import app from '../main';
import fs from 'fs';

const request = supertest(app);

describe('Endpint checks', () => {
  it('checks wrong endpoint', (done) => {
    request.get('/test').expect('Not a valid route', done);
  });

  it('checks invalid file', (done) => {
    request.get('/api/images/test/100').expect('File not found', done);
  });

  it('checks valid file', (done) => {
    let thumbPath = `${assetsPath}/thumbs`;
    fs.mkdirSync(thumbPath, { recursive: true });
    fs.writeFile(`${thumbPath}/beach-100-100.jpeg`, '', () => {});
    request.get('/api/images/beach/100').expect(200, done);
  });
});
