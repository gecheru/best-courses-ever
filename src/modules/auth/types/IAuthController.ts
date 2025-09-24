import type { IControllerMethods } from '../../../shared/types/IControllerMethods.ts'

export type IAuthController = IControllerMethods<'register' | 'login' | 'logout'>
