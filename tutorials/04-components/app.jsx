import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {
  render() {
    return <div className="my-react-app">
      <h1>{this.props.message}</h1>
    </div>;
  }
}

const reactApp = <Greeting message="Hello World!" />;

const reactRoot = document.getElementById("react-root");
ReactDOM.render(reactApp, reactRoot);
