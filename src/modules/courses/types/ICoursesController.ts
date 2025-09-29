import type { IControllerMethods } from '../../../shared/types/IControllerMethods.ts'

export type ICoursesController = IControllerMethods<
  'createCourse' | 'updateCourse' | 'deleteCourse' | 'getCourse' | 'getCourses'
>
