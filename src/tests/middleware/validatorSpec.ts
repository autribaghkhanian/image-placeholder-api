import supertest from 'supertest';
import app from '../../app';
import { checkImageParams } from '../../middleware/validator';

const request = supertest(app);
describe('Validator test', () => {
  it('middleware is defined', () => {
    expect(checkImageParams).toBeDefined;
  });
});
