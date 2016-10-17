import express from 'express'
import { index } from './core/controllers'

const app = express()

app.use(express.static('public'))
app.get('/', index)

app.listen(3000, () => {
  console.log('App listening to port 3000')
})
