import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "World"
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return <div className="my-react-app">
      <h1>Hello {this.state.name}!</h1>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} />
      </form>
    </div>;
  }
}

const reactApp = <Greeting />;

const reactRoot = document.getElementById("react-root");
ReactDOM.render(reactApp, reactRoot);
