import styled from "styled-components";

export const ButtonWrapper = styled.div`
  .btn {
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    background-color: #232323;
    height: 50px;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: none;
  }
  .btn:hover {
    cursor: pointer;
  }
  .ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover {
    color: #fff;
    background-color: #232323;
    border: none !important;
    height: 50px;
  }
  .btn img {
    margin-right: 7px;
    width: 16px;
    height: 16px;
  }
`;
