import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6eff5;

  .desktop-header-main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
  }
  .mobile-header-main {
    display: none;
  }
  .header-text {
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
    color: #343c6a;
  }
  .right {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 25px;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #f5f7fa;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .profile-icon {
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    height: 150px;
    border: none;
    .desktop-header-main {
      display: none;
    }
    .mobile-header-main {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0px 40px;
    }
    .menu-header-icon {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .menu-icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .header-input {
      height: 40px !important;
      font-size: 13px !important;
    }
  }

  @media (max-width: 768px) {
    .mobile-header-main {
      padding: 0px 20px;
    }

    .profile-icon {
      width: 35px !important;
      height: 35px !important;
    }
    .header-text {
      font-size: 20px;
      line-height: 24px;
    }
    .search-icon {
      width: 16px;
      height: 16px;
    }
  }
`;
