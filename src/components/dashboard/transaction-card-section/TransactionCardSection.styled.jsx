import styled from "styled-components";

export const TransactionCardWrapper = styled.div`
  .card-see-all {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .my-card-text {
    color: #343c6a;
    font-size: 22px;
    font-weight: 600;
  }
  .see-all-text {
    color: #343c6a;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
  }
  .see-all-text:hover {
    color: #718ebf;
  }
  .recent-transaction {
    color: #343c6a;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .deposite-card {
    padding: 24px 25px;
    height: 265px;
    overflow-y: scroll;
  }
  .mobile-carosule {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-carosule {
      display: none;
    }
    .mobile-carosule {
      display: flex;
    }
  }

  .credit-card-carousel-container {
    width: 100%;
    overflow: hidden;
  }
  .carousel-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-slide .ant-row {
    width: 100%;
    justify-content: space-between;
  }

  .carousel-slide .ant-col {
    flex: 0 0 48%;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
  }

  .carousel-slide .ant-col .credit-card {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .carousel-slide .ant-col .credit-card:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .carousel-slide .ant-col {
      flex: 0 0 100%;
    }
    .carousel-slide .ant-row {
      display: flex;
      gap: 20px;
      width: 100%;
      justify-content: center;
    }

    .credit-card-carousel-container {
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;
    }
  }
`;
