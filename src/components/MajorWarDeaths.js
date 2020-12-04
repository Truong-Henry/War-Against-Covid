import React from "react";
import Card from "./Card";

const MajorWarDeaths = ({ covidDeaths, warsInUnitedState }) => {
  const majorWarData = warsInUnitedState.sort(
    (a, b) => a.startYear - b.startYear
  );

  const renderedData = majorWarData.map((war) => {
    const { name, totalDeaths } = war;
    const deathComparison =
      covidDeaths && parseInt((covidDeaths.death / totalDeaths) * 100);

    const deathComparisonMessage =
      deathComparison > 100 ? " times more " : "% of ";
    const renderedText = deathComparison && (
      <p className="war-card-rendered-message">
        COVID-19 has taken{" "}
        <span className="secondary">
          {deathComparison}
          {deathComparisonMessage}
        </span>
        American lives compared to the <span className="secondary">{name}</span>
      </p>
    );
    return <Card key={name} title={name} text={renderedText} />;
  });
  return <div className="war-card-container">{renderedData}</div>;
};

export default MajorWarDeaths;
