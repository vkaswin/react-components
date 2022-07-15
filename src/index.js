import React, { StrictMode, Fragment } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "router";
import { ToastContainer } from "components";
import reportWebVitals from "./reportWebVitals";

import "assets/scss/index.scss";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

const App = () => {
  return (
    <Fragment>
      <Router />
      <ToastContainer />
    </Fragment>
  );
};

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
