import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../core/actions/home'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Counter currentValue={this.props.counter} onIncrement={this.props.increment}
                                                   onDecrement={this.props.decrement} />
        <Todos todos={this.props.todo} onAddTodo={this.props.addTodo} />
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

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actions, dispatch)
)(Home)