import request from 'supertest'
import app from '../../../app.ts'
import { StatusCodes } from 'http-status-codes'

describe('POST /api/auth/register', () => {
  it('should register user', async () => {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@email.com',
      password: '123',
    }

    const response = await request(app).post('/api/auth/register').send(userData)
    expect(response.statusCode).toBe(StatusCodes.CREATED)
    console.log(response.body)
    expect(response.body).toBe('')
  })
})
