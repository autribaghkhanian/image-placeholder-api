Simple API built with node and express to serve placeholder images using the Jimp library to resize images.

## How to use
1. Place image in the `src/public/assets/full` folder. There are sample images included to get you started
2. Start application 
    - `npm start`
3. Navigate to `http://localhost:3000/api/images/[:name]/[:width]/[:height]`
    - Example: `http://localhost:3000/api/images/beach/500/350`
    - You can omit the height parameter if you want a square image

You should now see the image on the browser, as well as have a thumbnail generated in the `src/public/assets/thumbs`

## How to test
1. From root folder, run `npm test`
