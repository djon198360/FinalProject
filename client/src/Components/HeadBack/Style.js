import styled from "styled-components";
import { device } from "../../Consts/ConstMediaScreen";

export const Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;
  @media ${device.tablet} {
    display: none;
  }
`;
export const Links = styled.a`
  width: 54;
  height: 50px;
`;
export const MenuImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 54px;
  height: auto;
`;

export const Form = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
`;

export const Button = styled.button.attrs((props) => ({
  type: props.type,
}))`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
`;
