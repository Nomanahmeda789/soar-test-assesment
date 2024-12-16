import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  .not-found-header {
    color: #343c6a;
    font-weight: 600;
    font-size: 60px;
  }
  .not-found-desc {
    color: #232323;
    font-weight: 500;
    font-size: 22px;
  }
`;
