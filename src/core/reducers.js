export function counterReducer(state = 0, action) {
  if (action.type === 'INC') {
    return state+1
  } else if (action.type === 'DEC') {
    return state-1
  }
  return state
}

export function todoReducer(state = [], action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.data]
  }
  return state
}