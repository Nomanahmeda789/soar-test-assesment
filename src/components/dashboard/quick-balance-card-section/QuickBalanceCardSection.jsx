import React, { useState } from "react";
import { QuickBalanceCardWrapper } from "./QuickBalanceCardSection.styled";
import { Col, Row } from "antd";
import CustomCard from "../../common/card/Card";
import LineChart from "../../common/linechart/LineChart";
import CarouselCard from "../../common/carousel-card/CarouselCard";
import { ReactComponent as C1Icon } from "../../../assets/icon/C1.svg";
import { ReactComponent as C2Icon } from "../../../assets/icon/C2.svg";
import { ReactComponent as C3Icon } from "../../../assets/icon/C3.svg";
import { ReactComponent as C4Icon } from "../../../assets/icon/C4.svg";
import { ReactComponent as C5Icon } from "../../../assets/icon/C5.svg";
import InputButton from "../../common/input-button/InputButton";

const QuickBalanceCardSection = () => {
  const [amount, setAmount] = useState("525.50");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleClick = () => {
    alert(`Amount: ${amount}`);
  };
  const cardData = [
    {
      name: "Livia Bator",
      role: "CEO",
      image: <C1Icon />,
    },
    {
      name: "Randy Press",
      role: "Director",
      image: <C2Icon />,
    },
    {
      name: "Workman",
      role: "Designer",
      image: <C3Icon />,
    },
    {
      name: "Workman",
      role: "Designer",
      image: <C4Icon />,
    },
    {
      name: "Workman",
      role: "Designer",
      image: <C5Icon />,
    },
  ];

  return (
    <QuickBalanceCardWrapper>
      <Row gutter={[30, 0]} className="quick-balance-container">
        <Col xxl={10} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24} className="Card-title">
              Quick Transfer
            </Col>
            <Col span={24}>
              <CustomCard hoverable className="quick-balance-card">
                <Row gutter={[0, 30]}>
                  <Col span={24}>
                    <CarouselCard cards={cardData} />
                  </Col>
                  <Col span={24} className="input-button-col">
                    <InputButton
                      placeholder="Enter amount"
                      buttonText="Send"
                      value={amount}
                      onChange={handleChange}
                      onClick={handleClick}
                    />
                  </Col>
                </Row>
              </CustomCard>
            </Col>
          </Row>
        </Col>
        <Col xxl={14} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24} className="Card-title">
              Balance History
            </Col>
            <Col span={24}>
              <CustomCard hoverable className="quick-balance-card">
                <Row>
                  <LineChart />
                </Row>
              </CustomCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </QuickBalanceCardWrapper>
  );
};

export default QuickBalanceCardSection;
