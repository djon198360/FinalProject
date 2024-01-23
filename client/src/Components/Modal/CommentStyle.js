import styled from "styled-components";
import { device } from "../../Consts/ConstMediaScreen";

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
  /* position: absolute; */
  z-index: 5;
  left: calc(50% - 300px);
  top: 60px;
  opacity: 1;
  @media ${device.tablet} {
    /* position: absolute; */
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
  width: 800px;
  height: auto;
  padding: 20px 92px 57px 50px;
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

export const ModalScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
`;

export const ModalForm = styled.form`
  margin-top: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${device.tablet} {
    margin-top: 22px;
  }
`;
export const FormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;
  @media ${device.tablet} {
    display: none;
  }
`;

export const FormTextArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  padding: 10px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 100px;
  max-height: 100px;
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.3019607843);
  }

  @media ${device.tablet} {
    font-family: "Roboto", sans-serif;
    width: 100%;
    max-height: 107px;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const FormButton = styled.button`
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  @media ${device.tablet} {
    margin-top: 0px;
    width: 100%;
    height: 46px;
    background-color: #009ee4;
  }
  &:hover {
    background-color: #0080c1;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 495px;
`;
