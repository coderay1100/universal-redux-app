import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.currentValue}</h1>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter