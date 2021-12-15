import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('error occur.');
    }
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

export default Counter;