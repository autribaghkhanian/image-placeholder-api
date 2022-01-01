"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkImageParams = void 0;
const checkImageParams = (req, res, next) => {
    let width = Number(req.params['width']);
    let height = req.params['height'] ? Number(req.params['height']) : width;
    if (isNaN(width) || isNaN(height)) {
        res.send('Either width or height was not a number.');
    }
    next();
};
exports.checkImageParams = checkImageParams;
