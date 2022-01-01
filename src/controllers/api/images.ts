import express, { Request, Response, NextFunction } from 'express';
import { processImage } from '../../middleware/imageProcessing';
import { checkImageParams } from '../../middleware/validator';

const routes = express.Router();

routes.get(
  '/images/:name/:width/:height?',
  checkImageParams,
  (req: Request, res: Response, next: NextFunction): void => {
    let name = req.params['name'];
    let width = req.params['width'];
    let height = req.params['height'];

    // If height isnt provided, assume user wants a square
    height = height ?? width;

    // Process and serve a new thumbnaiil
    let result = processImage(name, Number(width), Number(height));
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
  }
);

export default routes;
