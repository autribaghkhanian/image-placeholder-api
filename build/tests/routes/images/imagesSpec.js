"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const main_1 = __importDefault(require("../../../main"));
const request = (0, supertest_1.default)(main_1.default);
// describe('Test', () => {
//   it('gets the api endpoint', async (done) => {
//     const response = await request.get('/api/images/beach/100');
//     console.dir('++++++');
//     console.dir(response);
//     expect(response.body).toBe('');
//     done();
//   });
// });
