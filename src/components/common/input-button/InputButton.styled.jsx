import styled from "styled-components";

export const InputButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 0px 0px 0px 20px;
  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    background-color: #f4f7fc;
    padding: 0px 0px 0px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .input-label {
    font-size: 14px;
    color: #8b9aba;
    margin-right: 60px;
    white-space: nowrap;
  }

  .input-field {
    border: none;
    outline: none;
    font-size: 16px;
    color: #8b9aba;
    background: transparent;
    width: 100%;
    flex: 1;
  }

  .send-button {
    background-color: #232323;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 13px 30px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #3a3a3a;
    }
  }

  .icon {
    margin-left: 5px;
    font-size: 14px;
  }
`;
