import styled from "styled-components";

export const InputButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .input-button-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .label {
    font-size: 14px;
    color: #8b9aba;
    margin-right: 60px;
    white-space: nowrap;
  }

  .input-field {
    font-size: 16px;
    color: #718ebf;
    width: 100%;
    padding-right: 70px;
  }
  .send-button {
    font-size: 16px;
    font-weight: 500;
    border-radius: 50px !important;
    padding: 0px 24px;
    position: absolute;
    top: 0px;
    left: 62%;
    z-index: 10;
  }
  @media (max-width: 768px) {
    .label {
      margin-right: 40px;
    }
    .send-button {
      padding: 0px 15px;
      left: 55%;
    }
    .input-field {
      width: 90%;
      font-size: 12px;
    }
    @media (max-width: 500px) {
      .send-button {
        left: 50%;
      }
      .label {
        margin-right: 10px;
      }
      .input-field {
        width: 80%;
      }
      .send-button {
        font-size: 13px;
      }
      .label {
        font-size: 12px;
      }
    }
  }
`;
