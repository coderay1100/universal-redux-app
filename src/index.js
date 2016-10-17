import express from 'express'
import * as controllers from './core/controllers'

const app = express()

app.use(express.static('public'))

app.get('/', controllers.home)

app.listen(3000, () => {
  console.log('App listening to port 3000')
})
