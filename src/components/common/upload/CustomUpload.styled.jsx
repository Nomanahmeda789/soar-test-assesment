import styled from "styled-components";

export const UploadWrapper = styled.div`
  position: relative;
  .pen-section {
    width: 30px;
    height: 30px;
    position: absolute;
    background-color: #232323;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 65px;
    bottom: 3px;
  }
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;

  }
  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;
