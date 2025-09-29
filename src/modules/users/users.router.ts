import { Router } from 'express'
import { UsersController } from './users.controller.ts'

const usersRouter = Router()
const usersController = new UsersController()

usersRouter.get('/', usersController.getUsers)
usersRouter.get('/:id', usersController.getUser)

export default usersRouter
