import styled from "styled-components";

export const PaymentCardWrapper = styled.div`
  .card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 17px;
  }

  .icon-section {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    background-color: #f2f2f7;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .card-title {
    font-size: 16px;
    font-weight: 500;
    color: #232323;
    margin: 0;
  }

  .card-date {
    font-size: 15px;
    font-weight: 400;
    color: #718ebf;
    margin: 0;
  }

  .amount {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  .amount-red {
    color: #ff4b4a;
  }

  .amount-green {
    color: #41d4a8;
  }
`;
