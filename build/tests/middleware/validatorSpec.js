"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const validator_1 = require("../../middleware/validator");
const request = (0, supertest_1.default)(app_1.default);
describe('Validator test', () => {
    it('middleware is defined', () => {
        expect(validator_1.checkImageParams).toBeDefined;
    });
});
