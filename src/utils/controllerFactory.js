import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

export default (reducers, component, template) => (req, res) => {
  const store = createStore(combineReducers(reducers))
  const reactApp = renderToString(
    <Provider store={store}>
      {component}
    </Provider>
  )
  res.send(template({ reactApp, state: store.getState() }))
}