import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Data",
        data: [10, 250, 450, 800, 200, 580, 620],
        fill: true,
        backgroundColor: "rgba(55, 125, 255, 0.1)",
        borderColor: "rgba(24, 20, 243, 1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "Arial, sans-serif",
          },
          color: "#999999",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#EDEDED",
        },
        ticks: {
          stepSize: 200,
          color: "#999999",
          font: {
            size: 12,
            family: "Arial, sans-serif",
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        height: "240px",
        width: "100%",
        maxWidth: "750px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
