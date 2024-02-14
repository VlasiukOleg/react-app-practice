import React, { Component } from "react";

import { CounterWrap, CounterValue, CounterControls } from "./Counter.styled";

class Counter extends Component {
  state = {
    value: 5,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <CounterWrap>
        <CounterValue>{this.state.value}</CounterValue>
        <CounterControls className="Counter__controls">
          <button type="button" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button onClick={this.handleIncrement}>Increment</button>
        </CounterControls>
      </CounterWrap>
    );
  }
}

export default Counter;
