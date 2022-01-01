import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';

export const assetsPath = path.join(__dirname, '../public/assets');

export async function processImage(
  name: string,
  width: number,
  height: number
): Promise<string | void> {
  const thumbPath = `${assetsPath}/thumbs/${name}-${width}-${height}.jpeg`;

  // Look for same image request in cache
  if (checkImage(name, width, height)) {
    return thumbPath;
  }

  // Create thumbnail
  const image = await Jimp.read(`${assetsPath}/full/${name}.jpeg`);
  await image.resize(width, height);
  await image.writeAsync(thumbPath);

  return thumbPath;
}

export function checkImage(
  name: string,
  width: number,
  height: number
): boolean | undefined {
  try {
    return fs.existsSync(
      `${assetsPath}/thumbs/${name}-${width}-${height}.jpeg`
    );
  } catch (err) {
    console.error(err);
  }
}
