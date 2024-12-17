import styled from "styled-components";

export const ButtonWrapper = styled.div`
  .btn {
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    background-color: #232323;
    height: 50px;
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
    color: #232323;
    background-color: #fff;
    border: 1px solid #232323;
    path {
      fill: #232323 !important;
    }
  }
  .btn svg {
    margin-left: 5px;
  }
`;
