import styled from "styled-components";

export const InputWrapper = styled.div`
  .custom-input {
    border: none;
    border-radius: 50px;
    height: 50px;
    background-color: #f5f7fa;
    color: #8ba3cb !important;
    font-size: 15px;
    padding: 0px 25px;
  }
  .ant-input {
    background-color: #f5f7fa;
    color: #8ba3cb;
    padding-bottom: 4px;
  }
  .ant-input::placeholder {
    color: #8ba3cb !important;
    opacity: 0.6;
    font-weight: 400;
  }
  .ant-input-prefix {
    margin-right: 15px;
  }
`;
