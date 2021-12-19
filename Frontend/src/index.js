import React from "react";
import ReactDOM from "react-dom";
// tools
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// store redux
import { store } from "../src/redux/store";
import App from "./App";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
