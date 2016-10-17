import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// Components
import App from '../components/App'

// Reducers
import { counterReducer, todoReducer } from '../core/reducers'

import { fullPage } from '../utils/templates'

export function index(req, res) {
  const reducers = combineReducers({
    counter: counterReducer,
    todos: todoReducer
  })
  const store = createStore(reducers)

  const reactApp = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const state = store.getState()

  res.send(fullPage({ reactApp, state }))
}