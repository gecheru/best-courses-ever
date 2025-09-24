import type { RequestHandler } from 'express'

export type IControllerMethods<T extends string> = {
  [K in T]: RequestHandler
}
