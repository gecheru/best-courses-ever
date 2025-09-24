import app from './app.ts'
import https from 'node:https'
import fs from 'node:fs'

const PORT = 3000

// app.listen(PORT, () => {
//   console.log(`App listening on http://localhost:${PORT}`)
// })

const options = {
  key: fs.readFileSync('.certs/server.key'),
  cert: fs.readFileSync('.certs/server.cert'),
}

https.createServer(options, app).listen(PORT, () => {
  console.log(`App listening on https://localhost:${PORT}`)
})
