import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

import { scTheme, classicTheme } from "./themes";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <ThemeProvider theme={classicTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
