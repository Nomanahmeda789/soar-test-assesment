import React from "react";
import { TransactionCardWrapper } from "./TransactionCardSection.styled";
import { Col, Row } from "antd";
import CreditCard from "../../common/credit-card/CreditCard";
import CustomCard from "../../common/card/Card";

const TransactionCardSection = () => {
  return (
    <TransactionCardWrapper>
      <Row gutter={[20, 0]}>
        <Col span={16}>
          <Row>
            <Col span={24} className="card-see-all">
              <div className="my-card-text">My Cards</div>
              <div className="see-all-text">See All</div>
            </Col>
            <Col span={24}>
              <Row gutter={[25, 0]}>
                <Col span={12}>
                  <CreditCard />
                </Col>
                <Col span={12}>
                  <CreditCard whiteCard />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={24} className="recent-transaction">
              Recent Transaction
            </Col>
            <Col span={24}>
              <CustomCard hoverable></CustomCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </TransactionCardWrapper>
  );
};

export default TransactionCardSection;
