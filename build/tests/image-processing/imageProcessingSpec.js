"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const imageProcessing_1 = require("../../image-processing/imageProcessing");
const main_1 = __importDefault(require("../../main"));
const fs_1 = __importDefault(require("fs"));
const request = (0, supertest_1.default)(main_1.default);
describe('Image processing tests', () => {
    it('check image exists', () => {
        let thumbPath = `${imageProcessing_1.assetsPath}/thumbs`;
        fs_1.default.mkdirSync(thumbPath, { recursive: true });
        fs_1.default.writeFile(`${thumbPath}/beach-100-100.jpeg`, '', () => { });
        expect((0, imageProcessing_1.checkImage)('beach', 100, 100)).toBe(true);
    });
    it('check image does not exist', () => {
        expect((0, imageProcessing_1.checkImage)('test', 100, 100)).toBe(false);
    });
});
