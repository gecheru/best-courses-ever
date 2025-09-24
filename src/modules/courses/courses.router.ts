import { Router } from 'express'
import { CoursesController } from './courses.controller.ts'

const coursesRouter = Router()
const coursesController = new CoursesController()

coursesRouter.get('/', coursesController.getCourses)
coursesRouter.get('/:id', coursesController.getCourse)
coursesRouter.post('/create', coursesController.createCourse)
coursesRouter.put('/:id', coursesController.updateCourse)
coursesRouter.delete('/:id', coursesController.deleteCourse)

export default coursesRouter
