import styled from "styled-components";
import { device } from "../Consts/ConstMediaScreen";

export const Wrapper = styled.div`
  /*   width: 100%;
  min-height: 100%;
  overflow: hidden; */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: Appear;
  animation-duration: 300ms;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #f4f5f6;
  width: 100%;
  /*   min-height: 100%; */
  overflow: auto;
`;

export const ContainerBg = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - 300px);
  top: 60px;
  opacity: 1;
  @media ${device.tablet} {
    position: absolute;
    z-index: 5;
    left: 0px;
    top: 55px;
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
  @media ${device.tablet} {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;
  }
  @media ${device.tablet} {
    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 0;
      cursor: pointer;
    }
  }
`;

export const ModalClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
  @media ${device.tablet} {
    display: none;
  }
`;

export const ModalCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:hover::after,
  &:hover::before {
    background-color: #0080c1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const ModalForm = styled.form`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${device.tablet} {
    margin-top: 22px;
  }
`;
export const ModalFormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media ${device.tablet} {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
`;

export const FormInput = styled.input.attrs((props) => ({
  type: props.type,
  name: props.name,
}))`
  padding: 13px 19px;
  background: #ffffff;
  border-radius: 0.375rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  line-height: 24px;
  @media ${device.tablet} {
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
  }
  @media ${device.tablet} {
    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.3019607843);
    }
  }
`;
export const InputName = styled(FormInput)`
  width: 100%;
`;

export const TextArea = styled.textarea.attrs((props) => ({
  type: props.type,
  name: props.name,
}))`
  padding: 13px 19px;
  font-family: "Roboto", sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 0.375rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.3019607843);
  }
  @media ${device.tablet} {
    padding: 9px 17px;
    font-family: "Roboto", sans-serif;
    width: 100%;
    display: flex;
    padding: 0.5625rem 1.1875rem 0.6875rem 1.0625rem;
    justify-content: center;
    align-items: center;
    max-height: 107px;
    border-radius: 1.25rem;
    border: 1px solid #d9d9d9;
  }
  @media ${device.tablet} {
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const FormP = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
  }
`;

export const FormPSpan = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
  @media ${device.tablet} {
    display: block;
    margin-left: 0px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const FormBarImg = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
  @media ${device.tablet} {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow: hidden;
  }
`;

export const BarImg = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
  @media ${device.tablet} {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`;

export const BarImgImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  display: block;
  width: 100%;
  height: 100%;
  /*   height: auto; */
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 2;
  @media ${device.tablet} {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const ImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - 15px);
  }
  &::before {
    transform: rotate(90deg);
  }
`;

export const ModalFormBlockPrice = styled(ModalFormBlock)`
  position: relative;
`;

export const InputNamePrice = styled(FormInput)`
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.tablet} {
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }
`;

export const InputNamePriceCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #ffffff;
  &::after {
    content: " ₽";
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
  }
  @media ${device.tablet} {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;
    &::after {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const FormButton = styled.button.attrs((props) => ({
  type: props.type,
}))`
  margin-top: 10px;
  width: 141px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  @media ${device.tablet} {
    margin-top: 10px;
    width: 100%;
    height: 46px;
  }
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #ffffff;
    margin-bottom: 10px;
  }
`;
