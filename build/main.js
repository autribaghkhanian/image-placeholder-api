"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./routes/images/images"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', images_1.default);
app.get('*', function (req, res) {
    res.send('Not a valid route');
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
exports.default = app;
