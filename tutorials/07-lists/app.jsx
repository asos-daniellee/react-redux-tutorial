import React from "react";
import ReactDOM from "react-dom";

const peopleToSayHelloTo = ["ASOS", "World", "Mum"];

const Greeting = ({ message }) =>
  <h1>{message}</h1>;

const reactApp = <div className="my-react-app">
  {peopleToSayHelloTo.map(name =>
    <Greeting key={name} message={`Hello ${name}`} />
  )}
</div>;

const reactRoot = document.getElementById("react-root");
ReactDOM.render(reactApp, reactRoot);
