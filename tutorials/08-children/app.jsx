import React from "react";
import ReactDOM from "react-dom";

const Greeting = ({ message, children }) =>
  <div className="my-react-app">
    <h1>{message}</h1>
    {children}
  </div>;

const reactApp =
  <Greeting message="Hello World!">
    <h1>Hello children!</h1>
  </Greeting>;

const reactRoot = document.getElementById("react-root");
ReactDOM.render(reactApp, reactRoot);
