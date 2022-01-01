import express from 'express';
import { processImage } from '../../middleware/imageProcessing';

const routes = express.Router();

routes.get('/images/:name/:width/:height?', (req, res) => {
  let name = req.params['name'];
  let width = req.params['width'];
  let height = req.params['height'];

  height = typeof height === 'string' ? height : undefined;

  // If height isnt provided, assume user wants a square
  if (!height) {
    height = width;
  }

  // Process and serve a new thumbnaiil
  let result = processImage(name, parseInt(width), parseInt(height));
  result
    .then((path) => {
      res.sendFile(path as string);
      return;
    })
    .catch((err) => {
      if (err.errno == -2) {
        res.send('File not found');
        return;
      }
    });
});

export default routes;
