"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcessing_1 = require("../../middleware/imageProcessing");
const validator_1 = require("../../middleware/validator");
const routes = express_1.default.Router();
routes.get('/images/:name/:width/:height?', validator_1.checkImageParams, (req, res, next) => {
    let name = req.params['name'];
    let width = req.params['width'];
    let height = req.params['height'];
    // If height isnt provided, assume user wants a square
    height = height !== null && height !== void 0 ? height : width;
    // Process and serve a new thumbnaiil
    let result = (0, imageProcessing_1.processImage)(name, Number(width), Number(height));
    result
        .then((path) => {
        res.sendFile(path);
        return;
    })
        .catch((err) => {
        if (err.errno == -2) {
            res.send('File not found');
            return;
        }
    });
});
exports.default = routes;
