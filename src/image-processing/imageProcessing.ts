
import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';

const assetsPath = path.join(__dirname, '../assets');

export async function processImage(name: string, width: number, height: number): Promise<string | void> {
    const thumbPath = `${assetsPath}/thumbs/${name}-${width}-${height}.jpeg`;

    // look for same image request in cache
    if (checkImage(name, width, height)) {
        return thumbPath;
    }

    // await Jimp.read(`${assetsPath}/full/${name}.jpeg`)
    // .then(img => {
    //     return Promise.resolve(img
    //     .resize(width, height)
    //     .write(thumbPath));       
    //     // console.log('debug 1');
    //     // return Promise.resolve(thumbPath);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     return;
    //   });

    const image = await Jimp.read(`${assetsPath}/full/${name}.jpeg`);
    await image.resize(width, height);
    await image.writeAsync(thumbPath);

    return thumbPath;
      
}

function checkImage(name: string, width: number, height: number) {
    try {
        return fs.existsSync(`${assetsPath}/thumbs/${name}-${width}-${height}.jpeg`);
      } catch(err) {
        console.error(err);
      }
}

// async function create(name: string, width: number, height: number) {
//     //create image promise, async/away
//     Jimp.read(`${assetsPath}/full/${name}.jpeg`)
//     .then(img => {
//         img
//         .resize(width, height)
//         .write(`${assetsPath}/thumbs/${name}-${width}-${height}.jpeg`);
//         console.log('debug 1');
//         return `${assetsPath}/thumbs/${name}-${width}-${height}.jpeg`;
//       })
//       .catch(err => {
//         console.error(err);
//       });
// }