import React from "react";
import { WeeklyExpenseCardWrapper } from "./WeeklyExpenseCardSection.styled";
import { Col, Row } from "antd";
import CustomCard from "../../common/card/Card";
import PieChart from "../../common/piechart/PiaChart";
import BarChart from "../../common/barchart/BarChart";

const WeeklyExpenseCardSection = () => {
  return (
    <WeeklyExpenseCardWrapper>
      <Row gutter={[30, 20]} className="weekly-container">
        <Col xxl={16} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24} className="Card-title">
              Weekly Activity
            </Col>
            <Col span={24}>
              <CustomCard hoverable className="weekly-card">
                <BarChart />
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
              <CustomCard hoverable className="weekly-card">
                <PieChart />
              </CustomCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </WeeklyExpenseCardWrapper>
  );
};

export default WeeklyExpenseCardSection;
