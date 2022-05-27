import React, { StrictMode, Fragment } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "router";
import { ToastContainer } from "components";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "assets/scss/common.scss";

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

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
