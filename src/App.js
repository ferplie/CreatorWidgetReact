/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Spinner from "./Components/Spinner";

function App() {
  const [name, setName] = useState("UNKNOWN USER");
  useEffect(() => {
    ZOHO.CREATOR.init().then(function (data) {
      var config = {
        appName: "bainsvleicpf",
        reportName: "All_HouseHold_People",
        criteria: "(ID == 2573309000007572638)",
        page: 1,
        pageSize: 10,
      };

      ZOHO.CREATOR.API.getAllRecords(config).then(function (response) {
        var recordArr = response.data;
        console.log(recordArr[0]);
        setName(recordArr[0].Name);
        // myName.innerHTML = recordArr[0].Full_Name;
      });
    });
  }, []);

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
