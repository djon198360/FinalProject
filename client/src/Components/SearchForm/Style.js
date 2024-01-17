import styled from "styled-components";
import { device } from "../../Consts/ConstMediaScreen";

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
  @media ${device.tablet} {
    width: 100%;
    height: 55px;
    background-color: #009ee4;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    margin-bottom: 0px;
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
`;

export const SearchLogoLink = styled.a`
  @media ${device.tablet} {
    display: none;
  }
`;

export const SearchLogoImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 54px;
  height: auto;
`;

export const SearchLogoLinkMob = styled.a`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const SearchLogoImgMob = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 32px;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const SearchForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
  @media ${device.tablet} {
    margin-left: 10px;
    max-width: 1044px;
    width: 100%;
    display: flex;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const InputMob = styled.input.attrs((props) => ({
  type: props.type,
}))`
  display: none;
  @media ${device.tablet} {
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  &::placeholder {
    background-color: transparent;
    color: #b3b3b3;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const SearchButton = styled.button.attrs((props) => ({
  type: props.type,
}))`
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  @media ${device.tablet} {
    display: none;
  }
`;
