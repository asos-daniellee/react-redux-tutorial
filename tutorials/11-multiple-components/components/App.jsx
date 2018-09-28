import React, { Component } from "react";
import Counter from "./Counter";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return <div>
      <Counter
        value={this.state.value}
        increment={this.increment}
        decrement={this.decrement}
      />
    </div>
  }
}
