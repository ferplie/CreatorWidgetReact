import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Spinner from "./Components/Spinner";

function App() {
  useEffect(() => {});

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hallo</h1>
        <div>
          <Spinner />
        </div>
      </header>
    </div>
  );
}

export default App;
