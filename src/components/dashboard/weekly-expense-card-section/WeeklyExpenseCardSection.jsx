import React, { useEffect, useState } from "react";
import { WeeklyExpenseCardWrapper } from "./WeeklyExpenseCardSection.styled";
import { Col, Row } from "antd";
import CustomCard from "../../common/card/Card";
import PieChart from "../../common/piechart/PieChart";
import BarChart from "../../common/barchart/BarChart";
import { barChartOptions } from "../../../config/chart/barChart";
import axios from "axios";

const WeeklyExpenseCardSection = () => {
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/barChart")
      .then((response) => {
        const data = Array.isArray(response.data)
          ? response.data[0]
          : response.data.barChart[0];
        setBarChartData(data || { labels: [], datasets: [] });
      })
      .catch((error) => {
        console.error("Error fetching bar chart data:", error);
        setBarChartData({
          labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
          datasets: [
            {
              label: "Error Loading Data",
              data: [0, 0, 0, 0, 0, 0, 0],
              backgroundColor: "#ccc",
            },
          ],
        });
      });

    // Fetch Pie Chart Data
    axios
      .get("http://localhost:3001/pieChartData")
      .then((response) => setPieChartData(response.data))
      .catch((error) => {
        console.error("Error fetching pie chart data:", error);
        setPieChartData([]);
      });
  }, []);

  return (
    <WeeklyExpenseCardWrapper>
      <Row gutter={[30, 20]} className="weekly-container">
        <Col xxl={16} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24} className="Card-title">
              Weekly Activity
            </Col>
            <Col span={24}>
              <CustomCard className="weekly-card">
                <BarChart data={barChartData} options={barChartOptions} />
              </CustomCard>
            </Col>
          </Row>
        </Col>
        <Col xxl={8} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24} className="Card-title">
              Expense Statistics
            </Col>
            <Col span={24}>
              <CustomCard className="weekly-card">
                <PieChart data={pieChartData} />
              </CustomCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </WeeklyExpenseCardWrapper>
  );
};

export default WeeklyExpenseCardSection;
