import { config } from 'dotenv'
import type { ServerOptions } from 'node:https'
import fs from 'node:fs'

config({ path: `.env.${process.env.NODE_ENV || 'local'}` })

const SERVER_OPTIONS: ServerOptions = {
  key: fs.readFileSync('.certs/server.key'),
  cert: fs.readFileSync('.certs/server.cert'),
}

const { APP_PORT, DB_HOST, DB_NAME, DB_PORT } = process.env

export { SERVER_OPTIONS, APP_PORT, DB_HOST, DB_NAME, DB_PORT }
