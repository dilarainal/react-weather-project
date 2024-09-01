import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code,
        </a>
        {} by {}
        <a
          className="App-link"
          href="https://www.linkedin.com/in/dilarainal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dilara Inal
        </a>
      </footer>
    </div>
  );
}

export default App;
