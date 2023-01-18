/* eslint-disable */

import "./App.css";
import { useState, useEffect, useRef } from "react";
import Spinner from "./Components/Spinner";

function App() {
  const [name, setName] = useState("UNKNOWN USER");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hallo {name}</h1>
        <div>
          <Spinner />
        </div>
      </header>
    </div>
  );
}

export default App;
