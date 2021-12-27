"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcessing_1 = require("../../image-processing/imageProcessing");
const routes = express_1.default.Router();
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
    let result = (0, imageProcessing_1.processImage)(name, parseInt(width), parseInt(height));
    result
        .then((path) => {
        res.sendFile(path);
        return;
    })
        .catch((err) => {
        if (err.errno == -2) {
            res.send('File not found');
            res.sendStatus(401);
            return;
        }
    });
});
exports.default = routes;
