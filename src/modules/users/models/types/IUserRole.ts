import { USER_ROLE } from '../constants/UserRole.ts'

export type IUserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE]
