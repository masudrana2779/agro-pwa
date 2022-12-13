import styled from "styled-components";

export const FarmingTipsWrap = styled.div`
  .slick-dots {
    li {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #a9b2b6;
      margin: 0 2px;
      transition: all 0.5s;
      &.slick-active {
        transform: scale(1.5);
        background: #498553;
      }
      button {
        display: none;
      }
    }
  }
`;
