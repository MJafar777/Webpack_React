import React from "react";
import App from "./app/App";
import ReactDOM from "react-dom";
import "./shared/config/i18n/i18n";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
