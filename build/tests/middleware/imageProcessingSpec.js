"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageProcessing_1 = require("../../middleware/imageProcessing");
const fs_1 = __importDefault(require("fs"));
const thumbPath = `${imageProcessing_1.assetsPath}/thumbs`;
describe('Image processing tests', () => {
    it('check image exists', () => {
        fs_1.default.mkdirSync(thumbPath, { recursive: true });
        fs_1.default.writeFile(`${thumbPath}/beach-100-100.jpeg`, '', () => { });
        expect((0, imageProcessing_1.checkImage)('beach', 100, 100)).toBe(true);
    });
    it('check image does not exist', () => {
        expect((0, imageProcessing_1.checkImage)('test', 100, 100)).toBe(false);
    });
    it('check process image returns existing image', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, imageProcessing_1.processImage)('beach', 100, 100);
        expect(result).toEqual(`${thumbPath}/beach-100-100.jpeg`);
    }));
});
