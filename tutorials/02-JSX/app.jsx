import React from "react";
import ReactDOM from "react-dom";

const reactApp =
  <div className="my-react-app">
    <h1>Hello World!</h1>
  </div>;

const reactRoot = document.getElementById("react-root");
ReactDOM.render(reactApp, reactRoot);

