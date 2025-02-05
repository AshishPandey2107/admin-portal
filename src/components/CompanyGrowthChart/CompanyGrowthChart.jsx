import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import "./CompanyGrowthChart.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const CompanyGrowthChart = () => {
  const [filter, setFilter] = useState("Month");

  // Sample data – adjust the values to exactly match your Figma design
  const data = {
    labels: ["W 1", "W 2", "W 3", "W 4"],
    datasets: [
      {
        data: [1, 179, 255, 21132],
        backgroundColor: "#8884d8",
      },
      {
        data: [1810, 266, 22143, 1911],
        backgroundColor: "#82ca9d",
      },
      {
        data: [27, 287, 23154, 20128],
        backgroundColor: "#ff7300",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // Remove the color indicator legend for years
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#333" } },
      y: { grid: { color: "#ccc" }, ticks: { color: "#333" } },
    },
  };

  return (
    <div className="company-growth-chart">
      <div className="chart-header">
        <span>Company Growth</span>
      </div>
      
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>

      <div className="chart-filters">
        <button
          className={filter === "Month" ? "active" : ""}
          onClick={() => setFilter("Month")}
        >
          Month
        </button>
        <button
          className={filter === "Year 2" ? "active" : ""}
          onClick={() => setFilter("Year 2")}
        >
          Year 2
        </button>
        <button
          className={filter === "Year 3" ? "active" : ""}
          onClick={() => setFilter("Year 3")}
        >
          Year 3
        </button>
      </div>
    </div>
  );
};

export default CompanyGrowthChart;
