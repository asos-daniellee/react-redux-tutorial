import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
  }

  handleOnClick = () => {
    const newClickCount = this.state.clicks + 1;
    this.setState({ clicks: newClickCount });
  };

  render() {
    return <div className="my-react-app" onClick={this.handleOnClick}>
      <h1>{this.props.message}</h1>
      <p>Clicked {this.state.clicks} time{this.state.clicks !== 1 ? "s" : ""}</p>
    </div>;
  }
}

const reactApp = <Greeting message="Hello World!" />;

const reactRoot = document.getElementById("react-root");
ReactDOM.render(reactApp, reactRoot);
