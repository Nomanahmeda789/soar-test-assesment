import styled from "styled-components";

export const CreditCardWrapper = styled.div`
  .black-card {
    background: linear-gradient(90deg, #5b5a6f 0%, #000000 100%);
    padding: 0px;
  }
  .white-card {
    background-color: #fff;
    padding: 0px;
    border: 1px solid #dfeaf2;
  }
  .balance-chip-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 25px 0px 25px;
  }
  .balance-number {
    display: flex;
    flex-direction: column;
  }
  .balance-text {
    color: #ffffff;
    font-size: 12px;
  }
  .balance-text-white {
    color: #718ebf;
    font-size: 12px;
  }
  .balance-amount {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    margin-top: -5px;
  }
  .balance-amount-white {
    color: #343c6a;
    font-size: 20px;
    font-weight: 600;
    margin-top: -5px;
  }
  .card-holder-valid {
    display: flex;
    align-items: center;
    gap: 90px;
    margin-top: 35px;
    padding: 0px 25px;
  }
  .card-holder-text {
    color: #ffffffb2;
    font-size: 12px;
  }
  .card-holder-text-white {
    color: #718ebf;
    font-size: 12px;
  }
  .card-name {
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    margin-top: -2px;
  }
  .card-name-white {
    color: #343c6a;
    font-size: 15px;
    font-weight: 600;
    margin-top: -2px;
  }
  .account-number-icon {
    margin-top: 35px;
    border-radius: 0px 0px 25px 25px;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(90deg, #565664 0%, #202024 100%);
  }
  .account-number-icon-white {
    margin-top: 35px;
    border-top: 1px solid #dfeaf2;
    border-radius: 0px 0px 25px 25px;
    padding: 25px;
    display: flex;
    justify-content: space-between;
  }
  .account-number {
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
  }
  .account-number-white {
    color: #343c6a;
    font-size: 22px;
    font-weight: 600;
  }
`;
