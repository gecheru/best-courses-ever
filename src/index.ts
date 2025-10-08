import app from './app.ts'
import https from 'node:https'
import { APP_PORT, SERVER_OPTIONS, DB_HOST, DB_NAME, DB_PORT } from './config/index.ts'
import mongoose from 'mongoose'

const start = async () => {
  try {
    const db = await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)

    console.log('Connected to database:', db.connection.name)

    https.createServer(SERVER_OPTIONS, app).listen(APP_PORT, () => {
      console.log(`App listening on https://localhost:${APP_PORT}`)
    })
  } catch (err) {
    console.error('Failed to start the application')
    console.error(err)
    process.exit(1)
  }
}

process.on('SIGINT', async () => {
  await mongoose.disconnect()
  console.log('App closed')
  process.exit()
})

start()
