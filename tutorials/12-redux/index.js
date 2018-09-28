import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { store, incrementCounter } from "./redux/counter";

store.dispatch(incrementCounter());
store.subscribe(() => console.log(store.getState()));

const reactRoot = document.getElementById("react-root");
ReactDOM.render(<App store={store} />, reactRoot);
