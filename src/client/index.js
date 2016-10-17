import React from 'react'
import ReactDOM from 'react-dom'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { counterReducer, todoReducer } from '../core/reducers'
import App from '../components/App'

const reducers = combineReducers({
  counter: counterReducer,
  todos: todoReducer
})
const store = createStore(reducers, window.__STATE__, applyMiddleware(createLogger()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
