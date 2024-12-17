import styled from "styled-components";

export const AuthedWrapper = styled.div`
  height: 100vh;
  .authed-container {
    display: flex;
    height: 100%;
  }
  .authed-header-children {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 251px);
  }
  .children {
    background-color: #f5f7fa;
    padding: 20px 30px;
    height: calc(100vh - 90px);
    overflow-y: auto;
    font-family: "Inter", sans-serif !important;
  }

  @media (max-width: 1000px) {
    .children {
      padding: 25px;
    }
    .authed-header-children {
      width: 100%;
    }
  }
`;
