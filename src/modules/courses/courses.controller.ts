import type { RequestHandler } from 'express'
import { CoursesService } from './courses.service.ts'
import type { ICoursesController } from './types/ICoursesController.ts'

export class CoursesController implements ICoursesController {
  constructor(service = new CoursesService()) {}

  createCourse: RequestHandler = (req, res) => {}
  updateCourse: RequestHandler = (req, res) => {}
  deleteCourse: RequestHandler = (req, res) => {}
  getCourse: RequestHandler = (req, res) => {}
  getCourses: RequestHandler = (req, res) => {}
}
