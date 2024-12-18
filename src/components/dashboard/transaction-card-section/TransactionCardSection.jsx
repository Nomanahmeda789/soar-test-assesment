import React, { useState, useRef, useEffect } from "react";
import { TransactionCardWrapper } from "./TransactionCardSection.styled";
import { Carousel, Col, Row } from "antd";
import CreditCard from "../../common/credit-card/CreditCard";
import CustomCard from "../../common/card/Card";
import PaymentCard from "../../common/payment-card/PaymentCard";
import axios from "axios";
import { ReactComponent as DepositIcon } from "../../../assets/icon/deposit-icon.svg";

const TransactionCardSection = () => {
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://soar-test-assesment.vercel.app";
    axios
      .get(`${apiUrl}/cards`)
      .then((response) => setCards(response.data))
      .catch((error) => console.error("Error fetching cards:", error));

    axios
      .get(`${apiUrl}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <TransactionCardWrapper>
      <Row gutter={[30, 20]}>
        <Col xxl={16} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24} className="card-see-all">
              <div className="my-card-text">My Cards</div>
              <div className="see-all-text">See All</div>
            </Col>
            <Col span={24} className={"desktop-carosule"}>
              <Row gutter={[30, 20]}>
                {cards.map((card) => (
                  <Col xl={12} lg={12} md={12} sm={24} xs={24} key={card.id}>
                    <CreditCard whiteCard={card.type === "white"} card={card} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col span={24} className="mobile-carosule">
              <div className="credit-card-carousel-container">
                <Carousel
                  dots={false}
                  draggable={true}
                  infinite={true}
                  swipeToSlide={true}
                  speed={300}
                  easing="ease-out"
                  vertical={false}
                  autoplay={false}
                  className="carosule-section"
                >
                  <div className="carousel-slide">
                    <CreditCard />
                  </div>
                  <div className="carousel-slide">
                    <CreditCard whiteCard />
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xxl={8} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24} className="recent-transaction">
              Recent Transaction
            </Col>
            <Col span={24}>
              <CustomCard className="deposite-card">
                <Row>
                  <Col span={24}>
                    {transactions.map((card, index) => (
                      <PaymentCard
                        key={index}
                        icon={<DepositIcon />}
                        title={card.title}
                        date={card.date}
                        amount={card.amount}
                        amountColor={card.amountColor}
                        backgroundColor={card.backgroundColor}
                      />
                    ))}
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
