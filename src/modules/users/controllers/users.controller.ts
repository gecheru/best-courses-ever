import type { RequestHandler } from 'express'
import { UsersService } from '../services/users.service.ts'

export class UsersController {
  private service: UsersService

  constructor(service = new UsersService()) {
    this.service = service
  }

  getUsers: RequestHandler = async (req, res) => {
    const users = this.service.getUsers()
    res.send(users)
  }
}
