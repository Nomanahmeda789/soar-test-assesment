import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: 250px;
  height: calc(100% - 30px);
  border-right: 1px solid #e6eff5;
  padding-top: 30px;
  .side-bar-header-section {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 40px;
  }
  .soar-header {
    color: #343c6a;
    font-weight: 800;
    font-size: 24px;
  }
  .menu-section {
    margin-top: 50px;
  }
  .menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding-left: 40px;
  }
  .menu-label {
    font-size: 18px;
    color: #b1b1b1;
    font-weight: 500;
  }
`;
