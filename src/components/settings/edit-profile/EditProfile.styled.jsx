import styled from "styled-components";

export const EditProfileWrapper = styled.div`
  .form-input {
    background-color: #fff;
    border: 1px solid #dfeaf2;
    border-radius: 15px;
    color: #718ebf !important;
  }
  .save-btn-col {
    margin-top: 18px;
    display: flex;
    justify-content: end;
  }
  .ant-form-item {
    margin-bottom: 0px;
  }
  .input-label {
    color: #232323;
    font-size: 16px;
    margin-bottom: 11px;
  }
  .dob-input {
    border: 1px solid #dfeaf2;
    border-radius: 15px;
    height: 50px;
    background-color: #ffffff;
    color: #8ba3cb !important;
    font-size: 15px;
    padding: 0px 25px;
    cursor: pointer;
    position: relative;
    z-index: 10;
  }
  Input::placeholder {
    color: #8ba3cb !important;
    opacity: 0.6;
    font-weight: 400;
  }

  .calendar-dropdown {
    position: absolute;
    top: 70px;
    left: 0;
    z-index: 1000;
    border: 1px solid #dfeaf2;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .above-elements {
    animation: fade-in 0.2s ease-in-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: 1200px) {
    .upload-col {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 600px) {
    .save-btn {
    width: 100% !important;
    .btn{
        width: 100%;
    }
  }
  }

  
`;
