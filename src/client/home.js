import React from 'react'
import ReactDOM from 'react-dom'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from '../core/reducers/home'
import Home from '../components/Home'

const store = createStore(
  combineReducers(reducers),
  window.__STATE__,
  applyMiddleware(createLogger())
)

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)
