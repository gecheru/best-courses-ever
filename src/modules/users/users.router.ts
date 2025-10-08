import { Router } from 'express'
import { UsersController } from './controllers/users.controller.ts'

const usersRouter = Router()
const usersController = new UsersController()

usersRouter.get('/', usersController.getUsers)

export default usersRouter
