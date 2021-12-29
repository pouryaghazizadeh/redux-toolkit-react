import React from "react";
import ReactDOM from "react-dom";
// tools
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// store redux
import { store } from "../src/redux/store";
// style to remove default style
import { CssBaseline } from "@mui/material";

import App from "./App";
ReactDOM.render(
  <BrowserRouter>
  <CssBaseline/>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
