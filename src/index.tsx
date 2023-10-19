import React from "react";
import App from "./app/App";
import ReactDOM from "react-dom";
import "./shared/config/i18n/i18n";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

import { ErrorBoundary } from './app/providers/ErrorBoundary';

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
