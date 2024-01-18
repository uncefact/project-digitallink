import request from 'supertest';
import { app } from '../src';

describe('GET /healthcheck', () => {
  it('should return 200 status code and isSucess: true', async () => {
    const response: { statusCode: number; body: { isSuccess: boolean } } = await request(app).get('/healthcheck');
    expect(response.statusCode).toBe(200);
    expect(response.body.isSuccess).toEqual(true);
  });
});
