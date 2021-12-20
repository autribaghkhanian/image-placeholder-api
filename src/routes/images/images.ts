import express from 'express';
import { processImage } from '../../image-processing/imageProcessing';

const routes = express.Router();

routes.get('/images/:name/:width/:height?', (req, res) => {
    let name = req.params['name'];
    let width = req.params['width'];
    let height = req.params['height'];

    height = typeof height === 'string' ? height : undefined;

    // if height isnt provided, assume user wants a square
    if (!height) {
        height = width;
    }

    // process and serve a new thumbnaiil
    let result = processImage(name, parseInt(width), parseInt(height));
    result
    .then((path) => {
        res.sendFile(path as string);
        return;
    })
    .catch(err => console.error(err));
});

export default routes;
