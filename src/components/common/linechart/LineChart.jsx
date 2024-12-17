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
import { LineChartWrapper } from "./LineChart.styled";

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

const LineChart = ({ data, options, className }) => {
  return (
    <LineChartWrapper>
      <Line data={data} options={options} className={className} />
    </LineChartWrapper>
  );
};

export default LineChart;
