import { combineReducers } from 'redux'

export function counter(state = 0, action) {
  switch (action.type) {
    case 'INC':
      return state+1
    case 'DEC':
      return state-1
    default:
      return state
  }
}

export function todo(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.data]
    default:
      return state
  }
}

export default combineReducers({
  counter,
  todo
})