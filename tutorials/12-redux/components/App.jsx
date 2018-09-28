import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, getValue } from "../redux/counter";
import Counter from "./Counter";

class App extends Component {
  constructor() {
    super();
  }

  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return <div>
      <Counter
        value={this.props.value}
        increment={this.increment}
        decrement={this.decrement}
      />
    </div>
  }
}

const mapStateToProps = state => ({
    value: getValue(state)
  });

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
  });

export default connect(mapStateToProps, mapDispatchToProps)(App)