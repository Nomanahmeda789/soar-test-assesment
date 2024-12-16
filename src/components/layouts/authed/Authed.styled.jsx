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
    width: 100%;
  }
  .children {
    background-color: #f5f7fa;
    padding: 20px 30px;
    height: 100vh;
  }

  @media (max-width: 768px) {
    .children {
      padding: 20px 20px;
    }
  }
`;
