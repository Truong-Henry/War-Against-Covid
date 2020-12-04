import React from "react";
import Card from "./Card";

const MajorWarDeaths = ({ covidDeaths, warsInUnitedState }) => {
  const majorWarData = warsInUnitedState.sort(
    (a, b) => a.startYear - b.startYear
  );

  const renderedData = majorWarData.map((war) => {
    const { name, totalDeaths } = war;
    const deathComparison =
      covidDeaths && parseFloat((covidDeaths.death / totalDeaths).toFixed(2));

    const deathComparisonMessage =
      deathComparison > 1
        ? `${deathComparison} times more `
        : `${deathComparison * 100}% of `;
    const renderedText = deathComparison && (
      <p className="war-card-rendered-message">
        COVID-19 has taken{" "}
        <span className="secondary">{deathComparisonMessage}</span>
        American lives compared to the <span className="secondary">{name}</span>
      </p>
    );
    return <Card key={name} title={name} text={renderedText} />;
  });
  return <div className="war-card-container">{renderedData}</div>;
};

export default MajorWarDeaths;
