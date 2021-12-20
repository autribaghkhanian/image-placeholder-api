"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function addFunc(a, b) {
    return a + b;
}
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
// endpoint
app.get('/test', (req, res) => {
    res.send('You have reached the end...point');
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
exports.default = app;
