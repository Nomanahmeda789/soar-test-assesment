import styled from "styled-components";

export const SideBarWrapper = styled.div`
  .side-bar-desktop {
    width: 250px;
    height: calc(100% - 30px);
    border-right: 1px solid #e6eff5;
  }
  .side-bar-header-section {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 40px;
    height: 90px;
  }
  .soar-header {
    color: #343c6a;
    font-weight: 800;
    font-size: 24px;
  }
  .menu-section {
    margin-top: 20px;
  }
  .menu-item {
    height: 55px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 40px;
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease,
      border-radius 0.3s ease;
    &:hover {
      .menu-label {
        color: #232323 !important;
      }
      path {
        fill: #232323 !important;
      }
    }

    &.active {
      .menu-label {
        color: #232323;
      }

      path {
        fill: #232323 !important;
      }
      .menu-border {
        background-color: black;
        border-radius: 0px 10px 10px 0px;
      }
    }
  }
  .menu-border {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background-color: transparent;
    border-radius: 0px;
    transition: background-color 0.3s ease, border-radius 0.3s ease;
  }

  .menu-label {
    font-size: 17px;
    color: #b1b1b1;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  .side-bar-mobile {
    display: none;
  }
  @media (max-width: 1000px) {
    width: auto;
    .side-bar-desktop {
      display: none;
    }
    .side-bar-header-section {
      height: 60px;
      padding-top: 10px;
    }
    .side-bar-mobile {
      display: block;
    }
    .ant-drawer-header {
      display: none !important;
    }
  }
`;
