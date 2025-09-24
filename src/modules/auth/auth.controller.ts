import type { RequestHandler } from 'express'
import { AuthService } from './auth.service.ts'
import type { IAuthController } from './types/IAuthController.ts'

export class AuthController implements IAuthController {
  constructor(service = new AuthService()) {}

  register: RequestHandler = (req, res) => {}
  login: RequestHandler = (req, res) => {}
  logout: RequestHandler = (req, res) => {}
}
