/* dependencies-------------------------------------------------------------- */
import fs from 'fs'
import express from 'express'
import chalk from 'chalk'
import dotenv from 'dotenv'

/* ENV ---------------------------------------------------------------------- */
dotenv.load({
  path: '.env'
})
const port = process.env.PORT || 4000

/* app config --------------------------------------------------------------- */
const app = express()

import expressEs6 from './config/express'

expressEs6(app)

/* bootstrap ---------------------------------------------------------------- */
export default app

const listen = () => {
  app.listen(port, () => {
    console.log(
      '%s Express server listening on port %d in %s mode.',
      chalk.green('✓'),
      port,
      app.get('env')
    )
  })
}

if (module.hot) {
  module.hot.accept(['./app'], () => {
    listen()
  })
}
listen()
