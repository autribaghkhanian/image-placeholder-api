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
exports.processImage = void 0;
const jimp_1 = __importDefault(require("jimp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const assetsPath = path_1.default.join(__dirname, '../assets');
function processImage(name, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        const thumbPath = `${assetsPath}/thumbs/${name}-${width}-${height}.jpeg`;
        // Look for same image request in cache
        if (checkImage(name, width, height)) {
            return thumbPath;
        }
        // Create thumbnail
        const image = yield jimp_1.default.read(`${assetsPath}/full/${name}.jpeg`);
        yield image.resize(width, height);
        yield image.writeAsync(thumbPath);
        return thumbPath;
    });
}
exports.processImage = processImage;
function checkImage(name, width, height) {
    try {
        return fs_1.default.existsSync(`${assetsPath}/thumbs/${name}-${width}-${height}.jpeg`);
    }
    catch (err) {
        console.error(err);
    }
}
