import react from "react";
import { DashboardWrapper } from "./Dashboard.styled";
import TransactionCardSection from "../../components/dashboard/transaction-card-section/TransactionCardSection";
import { Col, Row } from "antd";
import WeeklyExpenseCardSection from "../../components/dashboard/weekly-expense-card-section/WeeklyExpenseCardSection";
import QuickBalanceCardSection from "../../components/dashboard/quick-balance-card-section/QuickBalanceCardSection";

const DashboardPage = () => {
  return (
    <DashboardWrapper>
      <Row>
        <Col span={24}>
          <TransactionCardSection />
        </Col>
        <Col span={24}>
          <WeeklyExpenseCardSection />
        </Col>
        <Col span={24}>
          <QuickBalanceCardSection />
        </Col>
      </Row>
    </DashboardWrapper>
  );
};

export default DashboardPage;
