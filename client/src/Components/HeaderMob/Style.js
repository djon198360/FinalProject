import styled from "styled-components";
import { device } from "../../Consts/ConstMediaScreen";

export const Header = styled.header`
  @media ${device.min_tablet} {
    display: none;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 55px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    background-color: #009ee4;
  }
`;

export const HeaderNav = styled.nav`
  @media ${device.tablet} {
    display: flex;
    height: 55px;
    justify-content: flex-start;
    padding: 0 20px;
    flex-direction: row;
    align-items: center;
  }
`;
export const HeaderLogo = styled.div`
  @media ${device.tablet} {
    display: block;
  }
`;

export const LogoLink = styled.a`
  @media ${device.tablet} {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const LogoImg = styled.img`
  @media ${device.tablet} {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
