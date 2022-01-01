import { Request, Response, NextFunction } from 'express';

export const checkImageParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let width = Number(req.params['width']);
  let height = req.params['height'] ? Number(req.params['height']) : width;

  if (isNaN(width) || isNaN(height)) {
    res.send('Either width or height was not a number.');
  }

  next();
};
