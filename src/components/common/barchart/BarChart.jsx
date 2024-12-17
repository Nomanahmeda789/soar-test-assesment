import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BarChartWrapper } from "./BarChart.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, options, className }) => {
  return (
    <BarChartWrapper>
      <Bar data={data} options={options} className={className} />
    </BarChartWrapper>
  );
};

export default BarChart;
