import styled from "styled-components";

export const CardWrapper = styled.div`
  .card-title-status-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-title-icon,
  .card-status-section {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .card-icon {
    width: 15px;
    height: 15px;
  }
  .title-text {
    color: #1e293b;
    font-size: 16px;
    font-weight: 700;
    opacity: 0.8;
    padding-top: 2px;
  }
  .status-title {
    color: #526077;
    font-size: 14px;
    font-weight: 600;
    padding-top: 2px;
  }
  .ant-card {
    width: 100% !important;
    border: none;
    border-radius: 25px;
  }
  .ant-card-head {
    border-bottom: 1px solid #d8d8d8;
    padding: 0 12px;
  }
  .ant-card-head-title {
    padding: 12px 0;
  }
  .ant-card-body {
    padding: 0px;
  }
`;
