export function increment() {
  return {
    type: 'INC'
  }
}

export function decrement() {
  return {
    type: 'DEC'
  }
}

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    data: text
  }
}