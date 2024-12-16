import react from "react";
import { DashboardWrapper } from "./Dashboard.styled";
import TransactionCardSection from "../../components/dashboard/transaction-card-section/TransactionCardSection";
import { Col, Row } from "antd";

const DashboardPage = () => {
  return (
    <DashboardWrapper>
      <Row>
        <Col span={24}>
          <TransactionCardSection />
        </Col>
        <Col span={24}></Col>
        <Col span={24}></Col>
      </Row>
    </DashboardWrapper>
  );
};

export default DashboardPage;
