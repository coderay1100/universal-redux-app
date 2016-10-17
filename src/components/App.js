import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor() {
    super()
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  increment() {
    this.props.dispatch({
      type: 'INC'
    });
  }

  decrement() {
    this.props.dispatch({
      type: 'DEC'
    })
  }

  addTodo(newTodo) {
    this.props.dispatch({
      type: 'ADD_TODO',
      data: newTodo
    });
  }

  render() {
    return (
      <div>
        <Counter currentValue={this.props.counter} onIncrement={this.increment}
                                                   onDecrement={this.decrement} />

        <Todos todos={this.props.todos} onAddTodo={this.addTodo} />
      </div>
    )
  }
}

const Counter = (props) => {
  return (
    <div>
      <h1>{props.currentValue}</h1>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
    </div>
  );
}

const Todos = (props) => {
  const list = props.todos.map((todo, index) => {
    return <li key={index}>{todo}</li>
  })
  const handlePressEnter = (e) => {
    if (e.which === 13) {
      props.onAddTodo(e.target.value.trim())
      e.target.value = ''
    }
  }
  return (
    <div>
      <h1>Todos List</h1>
      <input onKeyUp={handlePressEnter} />
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default connect((state) => state)(App)