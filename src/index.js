import React, { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "router";
import { ToastContainer } from "components";
import reportWebVitals from "./reportWebVitals";

import "assets/scss/common.scss";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError)
      return (
        <div>
          <h1>Something went wrong.</h1>
        </div>
      );

    return children;
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <Router />
      <ToastContainer />
    </ErrorBoundary>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
