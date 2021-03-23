import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import { ThemeProvider } from "@emotion/react";
import "./styles.css";
import { defaultTheme } from "./theme";
import store from "./store";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  rootElement
);
