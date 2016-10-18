import fs from 'fs'
import express from 'express'
import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { fullPage } from './utils/templates'

const app = express()

app.use(express.static('public'))

fs.readdirSync(`${__dirname}/components`)
  .forEach((component) => {
    const Component = require(`./components/${component}`).default
    const { method, path } = Component.route

    const getReducers = ({ file, functions }) => {
      if (!file) {
        return undefined
      }
      if (!functions) {
        return require(`${__dirname}/core/reducers/${file}`).default
      }
      return combineReducers(require(`${__dirname}/core/reducers/${file}`))
    }

    const getReactApp = (Component, reducers) => {
      if (!reducers) {
        return {
          reactApp: renderToString(<Component />)
        }
      }
      const store = createStore(reducers)
      return {
        store,
        reactApp: renderToString(
          <Provider store={store}>
            <Component />
          </Provider>
        )
      }
    }

    const render = (template, params) => {
      return template(params)
    }

    const handler = (req, res) => {
      const { store, reactApp } = getReactApp(Component, getReducers(Component.reducers))
      const params = {
        reactApp,
        state: store.getState(),
        universal: Component.isUniversal
      }
      res.send(render(fullPage, params))
    }

    switch (method) {
      case 'GET':
        app.get(path, handler)
        break
      case 'POST':
        app.post(path, handler)
        break
      default:
        throw new Error('Unsupported HTTP method!')
    }

  })

app.listen(3000, () => {
  console.log('App listening to port 3000')
})
