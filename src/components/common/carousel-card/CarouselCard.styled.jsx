import styled from "styled-components";

export const CarouselCardWrapper = styled.div`
  .carousel-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin: 0 auto;
  }

  .carousel {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px 0;
  }

  .card {
    flex: 0 0 122px;
    border-radius: 15px;
    text-align: center;
    background: #ffffff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .bold-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    color: #232323;
    margin: 5px 0px;
    font-weight: bold;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-image {
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-image svg {
    width: 70px;
    height: 70px;
  }

  .card-title {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    color: #232323;
    margin: 5px 0px;
  }

  .card-role {
    font-size: 15px;
    font-weight: 400;
    line-height: 18.15px;
    color: #718ebf;

    margin: 0;
  }

  .scroll-button {
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    background-color: #ffffff;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    z-index: 10;
    transition: background-color 0.2s;
  }

  .scroll-button:hover {
    background-color: #f0f0f0;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }
`;
