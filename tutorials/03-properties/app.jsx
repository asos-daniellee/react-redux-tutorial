import React from "react";
import ReactDOM from "react-dom";

const Greeting = ({ message }) =>
  <div className="my-react-app">
    <h1>{message}</h1>
  </div>;

const reactApp = <Greeting message="Hello ASOS!" />;

const reactRoot = document.getElementById("react-root");
ReactDOM.render(reactApp, reactRoot);
