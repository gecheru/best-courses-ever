import type { RequestHandler } from 'express'
import { AuthService } from './auth.service.ts'
import type { IAuthController } from './types/IAuthController.ts'
import { StatusCodes } from 'http-status-codes'

export class AuthController implements IAuthController {
  constructor(service = new AuthService()) {}

  register: RequestHandler = (req, res) => {
    res.status(StatusCodes.CREATED).send({ message: 'created' })
  }
  login: RequestHandler = (req, res) => {}
  logout: RequestHandler = (req, res) => {}
}
