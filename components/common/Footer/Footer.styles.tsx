import styled from "styled-components";

export const FooterWrap = styled.div`
  .footerWrap {
    padding: 0px 0 0px;
    a {
      color: #fff;
      text-align: center;
      height: 60px;
      width: 60px;
      border: 5px solid transparent;
      transform: translateY(0);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: all 0.5s;
      &.active {
        transform: translateY(-20px);
        border: 10px solid #498553;
        background: #fff;
        box-shadow: 0px 0px 20px #498553;
        color: #498553;
      }
    }
  }
`;
