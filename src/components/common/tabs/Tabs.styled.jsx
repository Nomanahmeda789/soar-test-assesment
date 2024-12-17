import styled from "styled-components";

export const TabsWrapper = styled.div`
  .tab-header {
    display: flex;
    border-bottom: 1px solid #f4f5f7;
    gap: 70px;
  }
  .tab-title {
    color: #718ebf;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .tab-title.active {
    color: #232323;
    font-size: 16px;
    font-weight: 500;
  }

  .tab-content {
    border-radius: 0 0 5px 5px;
    padding: 40px 30px;
  }
  .tab-active-border {
    height: 3px;
    background-color: #232323;
    border-radius: 10px 10px 0px 0px;
  }

  @media (max-width: 1000px) {
    .tab-content {
      padding: 0;
    }
  }
`;
