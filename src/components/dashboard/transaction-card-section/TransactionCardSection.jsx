import React from "react";
import { TransactionCardWrapper } from "./TransactionCardSection.styled";
import { Col, Row } from "antd";
import CreditCard from "../../common/credit-card/CreditCard";
import CustomCard from "../../common/card/Card";
import PaymentCard from "../../common/payment-card/PaymentCard";
import { ReactComponent as DepositIcon } from "../../../assets/icon/deposit-icon.svg";
import { ReactComponent as PaypalIcon } from "../../../assets/icon/paypal-icon.svg";
import { ReactComponent as DollarIcon } from "../../../assets/icon/dollar-icon.svg";

const TransactionCardSection = () => {
  return (
    <TransactionCardWrapper>
      <Row gutter={[30, 20]}>
        <Col xxl={16} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24} className="card-see-all">
              <div className="my-card-text">My Cards</div>
              <div className="see-all-text">See All</div>
            </Col>
            <Col span={24}>
              <Row gutter={[30, 20]}>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                  <CreditCard />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                  <CreditCard whiteCard />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xxl={8} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24} className="recent-transaction">
              Recent Transaction
            </Col>
            <Col span={24}>
              <CustomCard hoverable className="deposite-card">
                <Row>
                  <Col span={24}>
                    <PaymentCard
                      icon={DepositIcon}
                      title="Deposit from my Card"
                      date="28 January 2021"
                      amount="-$850"
                      amountColor="red"
                      backgroundColor="#FFF5D9"
                    />
                  </Col>
                  <Col span={24}>
                    <PaymentCard
                      icon={PaypalIcon}
                      title="Deposit Paypal"
                      date="25 January 2021"
                      amount="+$2,500"
                      amountColor="green"
                      backgroundColor="#E7EDFF"
                    />
                  </Col>
                  <Col span={24}>
                    <PaymentCard
                      icon={DollarIcon}
                      title="Jemi Wilson"
                      date="21 January 2021"
                      amount="+$5,400"
                      amountColor="green"
                      backgroundColor="#DCFAF8"
                    />
                  </Col>
                </Row>
              </CustomCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </TransactionCardWrapper>
  );
};

export default TransactionCardSection;
