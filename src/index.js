import React from "react"; // The import needed to build a react app, needed for the React.StrictMode> component
import ReactDOM from "react-dom"; // The import needed for appending the React component to the DOM
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
