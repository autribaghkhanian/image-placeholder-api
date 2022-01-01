import supertest from 'supertest';
import {
  assetsPath,
  checkImage,
  processImage,
} from '../../middleware/imageProcessing';
import app from '../../app';
import fs from 'fs';

const request = supertest(app);
describe('Image processing tests', () => {
  it('check image exists', () => {
    let thumbPath = `${assetsPath}/thumbs`;
    fs.mkdirSync(thumbPath, { recursive: true });
    fs.writeFile(`${thumbPath}/beach-100-100.jpeg`, '', () => {});
    expect(checkImage('beach', 100, 100)).toBe(true);
  });

  it('check image does not exist', () => {
    expect(checkImage('test', 100, 100)).toBe(false);
  });
});
