import supertest from 'supertest';
import { assetsPath } from '../../../middleware/imageProcessing';
import app from '../../../app';
import fs from 'fs';

const request = supertest(app);

describe('Images endpint checks', () => {
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
