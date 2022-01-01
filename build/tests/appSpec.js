"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const imageProcessing_1 = require("../middleware/imageProcessing");
const app_1 = __importDefault(require("../app"));
const fs_1 = __importDefault(require("fs"));
const request = (0, supertest_1.default)(app_1.default);
describe('Endpint checks', () => {
    it('checks wrong endpoint', (done) => {
        request.get('/test').expect('Not a valid route', done);
    });
    it('checks invalid file', (done) => {
        request.get('/api/images/test/100').expect('File not found', done);
    });
    it('checks valid file', (done) => {
        let thumbPath = `${imageProcessing_1.assetsPath}/thumbs`;
        fs_1.default.mkdirSync(thumbPath, { recursive: true });
        fs_1.default.writeFile(`${thumbPath}/beach-100-100.jpeg`, '', () => { });
        request.get('/api/images/beach/100').expect(200, done);
    });
});
