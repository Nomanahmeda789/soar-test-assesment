import React from "react";
import { PieChartWrapper } from "./PieChart.styled";

const PieChart = ({ data }) => {
  const renderSlices = () => {
    let cumulativeAngle = 0;

    return data.map((slice) => {
      const startAngle = cumulativeAngle;
      const sliceAngle = (slice.percentage / 100) * 360;
      cumulativeAngle += sliceAngle;

      const x1 = 50 + slice.radius * Math.cos((Math.PI * startAngle) / 180);
      const y1 = 50 + slice.radius * Math.sin((Math.PI * startAngle) / 180);
      const x2 =
        50 +
        slice.radius * Math.cos((Math.PI * (startAngle + sliceAngle)) / 180);
      const y2 =
        50 +
        slice.radius * Math.sin((Math.PI * (startAngle + sliceAngle)) / 180);

      const largeArcFlag = sliceAngle > 180 ? 1 : 0;

      return (
        <path
          key={slice.id}
          d={`M 50,50 L ${x1},${y1} A ${slice.radius},${slice.radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`}
          fill={slice.color}
          stroke="white"
          strokeWidth="2"
        />
      );
    });
  };

  const renderLabels = () => {
    let cumulativeAngle = 0;

    return data.map((slice) => {
      const sliceAngle = (slice.percentage / 100) * 360;
      const angle = cumulativeAngle + sliceAngle / 2;
      cumulativeAngle += sliceAngle;
      const x = 50 + slice.radius * 0.6 * Math.cos((Math.PI * angle) / 180);
      const y = 50 + slice.radius * 0.6 * Math.sin((Math.PI * angle) / 180);

      return (
        <g key={slice.id}>
          <text
            x={x}
            y={y - 1.5}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFFFFF"
            fontSize="4.5"
            fontWeight="bold"
          >
            {slice.percentage}%
          </text>

          <text
            x={x}
            y={y + 5}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFFFFF"
            fontSize="4.5"
            fontWeight="bold"
          >
            {slice.label}
          </text>
        </g>
      );
    });
  };

  return (
    <PieChartWrapper>
      <svg width="310" height="300" viewBox="5 15 100 75">
        {renderSlices()}
        {renderLabels()}
      </svg>
    </PieChartWrapper>
  );
};

export default PieChart;
