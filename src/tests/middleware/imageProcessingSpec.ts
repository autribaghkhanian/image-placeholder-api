import {
  assetsPath,
  checkImage,
  processImage,
} from '../../middleware/imageProcessing';
import fs from 'fs';

const thumbPath = `${assetsPath}/thumbs`;

describe('Image check and process tests', () => {
  it('check image exists', () => {
    fs.mkdirSync(thumbPath, { recursive: true });
    fs.writeFile(`${thumbPath}/beach-100-100.jpeg`, '', () => {});
    expect(checkImage('beach', 100, 100)).toBe(true);
  });

  it('check image does not exist', () => {
    expect(checkImage('test', 100, 100)).toBe(false);
  });

  it('processed image returns existing image', async () => {
    const result = await processImage('beach', 100, 100);
    expect(result).toEqual(`${thumbPath}/beach-100-100.jpeg`);
  });
});
