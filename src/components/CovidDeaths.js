import React from "react";

const CovidDeaths = ({ covidDeaths }) => {
  const dateFormatter = (dateProvided) => {
    let year = dateProvided.slice(0, 4);
    let month = dateProvided.slice(4, 6);
    let day = dateProvided.slice(6);
    return `Last updated ${month}/${day}/${year}`;
  };

  const lastModified =
    covidDeaths && dateFormatter(covidDeaths.date.toString());

  if (!covidDeaths) {
    return <div>Loading..</div>;
  } else {
    return (
      <div className="covid-deaths-container">
        <div className="covid-deaths-text">
          <h1>{covidDeaths.death.toLocaleString()}</h1>
          <br />
          <div className="covid-deaths-text">
            Americans have died from COVID-19
          </div>
        </div>
        <div className="secondary">
          <a className="secondary" href="https://covidtracking.com/data/api">
            {lastModified}
          </a>
        </div>
      </div>
    );
  }
};

export default CovidDeaths;
