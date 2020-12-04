import React, { useEffect, useState } from "react";
import CovidDeaths from "./CovidDeaths";
import MajorWarDeaths from "./MajorWarDeaths";
import warsInUnitedState from "../datasets/warsInUnitedState";
import Chart from "./Chart";

import "../css/normalize.css";
import "../css/index.css";

const App = () => {
  const [covidDeaths, setCovidDeaths] = useState(null);

  useEffect(() => {
    const URL = "https://api.covidtracking.com/v1/us/current.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCovidDeaths(data[0]));
  }, []);
  return (
    <div className="container">
      <CovidDeaths covidDeaths={covidDeaths} />
      <MajorWarDeaths
        covidDeaths={covidDeaths}
        warsInUnitedState={warsInUnitedState}
      />
      <Chart covidDeaths={covidDeaths} warsInUnitedState={warsInUnitedState} />
    </div>
  );
};

export default App;
