import React, { Component } from 'react'

const Counter = ({ value, increment, decrement }) =>
  <div>
    <p>Counter Value: {value}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>;

export default Counter
