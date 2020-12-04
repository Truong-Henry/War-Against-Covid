import React, { useState, useEffect } from "react";
import { Bar, defaults } from "react-chartjs-2";

// Global settings for Chart.js
defaults.global.defaultFontFamily = "Lato, Arial, sans-serif";
defaults.global.defaultFontColor = "#2c3e50ef";

const Chart = ({ covidDeaths, warsInUnitedState }) => {
  const [chartData, setChartData] = useState({});
  const chartItems = warsInUnitedState.map((war) => war);

  useEffect(() => {
    covidDeaths && // Add COVID-19 to the dataset if has a value
      chartItems.push({
        name: "COVID-19",
        startYear: 2019,
        totalDeaths: covidDeaths.death,
      });

    chartItems.sort((a, b) => b.totalDeaths - a.totalDeaths); // Descending order by totalDeaths

    setChartData({
      labels: chartItems.map((item) => item.name),
      datasets: [
        {
          data: chartItems.map((item) => item.totalDeaths),
          backgroundColor: chartItems.map(
            (item) => (item.name !== "COVID-19" ? "#2c3e50" : "#e74c3c") // Covid is the only #e74c3c
          ),
        },
      ],
    });
  }, [covidDeaths]);

  const chartOptions = {
    title: {
      display: true,
      text: "War Against Covid",
      fontSize: 25,
      fontStyle: "300",
    },
    legend: { display: false, position: "top" },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    tooltips: {
      enabled: false,
    },
    hover: {
      animationDuration: 0, // No animation on hover
      mode: null,
    },
    animation: {
      duration: 0,
      onComplete: function () {
        const chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.textAlign = "center";
        ctx.font = "300 16px Lato";
        ctx.textBaseline = "bottom";
        // Loop through each data in the datasets
        this.data.datasets.forEach((dataset, i) => {
          const meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            const data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y);
          });
        });
      },
    },
  };

  return (
    <div className="chart">
      <Bar data={chartData} width={100} height={600} options={chartOptions} />
    </div>
  );
};

export default Chart;
