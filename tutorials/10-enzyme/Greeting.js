import React from "react";

export default class Greeting extends React.Component {
  render() {
    return <div className="my-react-app">
      <h1>{this.props.message}</h1>
    </div>;
  }
}
