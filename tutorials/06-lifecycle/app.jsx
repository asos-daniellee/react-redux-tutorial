import React from "react";
import ReactDOM from "react-dom";

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    console.log("ClickCounter constructor");
  }

  componentDidMount() {
    console.log("ClickCounter componentDidMount");
  }

  componentDidUpdate() {
    console.log("ClickCounter componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ClickCounter componentWillUnmount");
  }

  render() {
    console.log("ClickCounter render");
    return <p>Clicked {this.props.clicks} time{this.props.clicks !== 1 ? "s" : ""}</p>
  }
}

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      counterVisible: true
    }
  }

  increaseClicks = () => {
    const newClickCount = this.state.clicks + 1;
    this.setState({ clicks: newClickCount });
  };

  toggleClickCounter = () => {
    const newcounterVisible = !this.state.counterVisible;
    this.setState({ counterVisible: newcounterVisible });
  };

  render() {
    return <div className="my-react-app">
      <h1>{this.props.message}</h1>
      <button onClick={this.increaseClicks}>Increase Clicks</button>
      <button onClick={this.toggleClickCounter}>Turn Counter {this.counterVisible ? "Off" : "On"}</button>
      {this.state.counterVisible && <ClickCounter clicks={this.state.clicks} />}
    </div>;
  }
}

const reactApp = <Greeting message="Hello World!" />;

const reactRoot = document.getElementById("react-root");
ReactDOM.render(reactApp, reactRoot);
