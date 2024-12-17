import React, { useEffect, useState } from "react";
import { QuickBalanceCardWrapper } from "./QuickBalanceCardSection.styled";
import { Col, Form, Row } from "antd";
import CustomCard from "../../common/card/Card";
import LineChart from "../../common/linechart/LineChart";
import CarouselCard from "../../common/carousel-card/CarouselCard";
import InputButton from "../../common/input-button/InputButton";
import { ReactComponent as SendIcon } from "../../../assets/icon/send-icon.svg";
import axios from "axios";
import { lineChartOptions } from "../../../config/chart/lineChart";

const QuickBalanceCardSection = () => {
  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [carouselCards, setCarouselCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/lineChart")
      .then((response) => setLineChartData(response.data[0]))
      .catch(() => console.error("Failed to fetch line chart data"));

    axios
      .get("http://localhost:3001/carouselCards")
      .then((response) => setCarouselCards(response.data))
      .catch(() => console.error("Failed to fetch carousel cards data"));
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <QuickBalanceCardWrapper>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[30, 20]} className="quick-balance-container">
          <Col xxl={10} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Row>
              <Col span={24} className="Card-title">
                Quick Transfer
              </Col>
              <Col span={24}>
                <CustomCard className="quick-transfer-card">
                  <Row gutter={[0, 25]}>
                    <Col span={24}>
                      <CarouselCard cards={carouselCards} />
                    </Col>
                    <Col span={24} className="input-button-col">
                      <Form.Item
                        name="amount"
                        valuePropName="value"
                        getValueFromEvent={(e) => e.target.value}
                      >
                        <InputButton
                          type={"number"}
                          name={"amount"}
                          label="Write Amount"
                          placeholder="Enter amount"
                          buttonText="Send"
                          icon={<SendIcon className="send_icon" />}
                          htmlType="submit"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </CustomCard>
              </Col>
            </Row>
          </Col>
          <Col xxl={14} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Row>
              <Col span={24} className="Card-title-balance">
                Balance History
              </Col>
              <Col span={24}>
                <CustomCard className="quick-balance-card">
                  <Row>
                    <LineChart
                      data={lineChartData}
                      options={lineChartOptions}
                    />
                  </Row>
                </CustomCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </QuickBalanceCardWrapper>
  );
};

export default QuickBalanceCardSection;
