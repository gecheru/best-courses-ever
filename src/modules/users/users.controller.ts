import type { RequestHandler } from 'express'
import { UsersService } from './users.service.ts'
import type { IUsersController } from './types/IUsersController.ts'

export class UsersController implements IUsersController {
  constructor(service = new UsersService()) {}

  getUser: RequestHandler = (req, res) => {}
  getUsers: RequestHandler = (req, res) => {}
}
