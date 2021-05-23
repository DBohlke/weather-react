import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="55901" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

reportWebVitals();
