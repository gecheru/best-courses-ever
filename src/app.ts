import express from 'express'
import { engine } from 'express-handlebars'
import authRouter from './modules/auth/auth.router.ts'
import usersRouter from './modules/users/users.router.ts'
import coursesRouter from './modules/courses/courses.router.ts'
import pagesRouter from './modules/pages/pages.router.ts'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.json())

app.use('/', pagesRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/courses', coursesRouter)

export default app
