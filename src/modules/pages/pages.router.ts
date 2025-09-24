import { Router } from 'express'
import { PagesController } from './pages.controller.ts'

const pagesRouter = Router()
const usersController = new PagesController()

pagesRouter.get('/', usersController.getMain)
pagesRouter.get('/auth', usersController.getAuth)

export default pagesRouter
