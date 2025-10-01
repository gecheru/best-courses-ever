import type { RequestHandler } from 'express'
import { CoursesService } from '../courses.service.ts'

export class CoursesController {
  private service: CoursesService

  constructor(service = new CoursesService()) {
    this.service = service
  }

  createCourse: RequestHandler = (req, res) => {}
  updateCourse: RequestHandler = (req, res) => {}
  deleteCourse: RequestHandler = (req, res) => {}
  getCourse: RequestHandler = (req, res) => {}
  getCourses: RequestHandler = (req, res) => {}
}
