import type { RequestHandler } from 'express'

export class PagesController {
  getMain: RequestHandler = (req, res) => {
    res.render('index')
  }

  getAuth: RequestHandler = (req, res) => {
    res.render('auth')
  }
}
