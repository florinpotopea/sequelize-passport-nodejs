import express from 'express'
import passport from 'passport'
import db from './src/services/postgres/db'
import router from './src/api'
import passportFile from './src/services/passport'

const app = express()

app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(router)

db.sync()
  .then(() => app.listen(3000, console.log('Server running on port 3000...')))
  .catch(err => console.error('DB Sync Error: ', err))

export default app
