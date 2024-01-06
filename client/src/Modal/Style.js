import { styled, keyframes } from "styled-components";

export const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
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
  min-height: 100%;
  overflow: hidden;
`;

export const Modal = styled.div`
  border-radius: 0.75rem;
  max-width: 100%;
  margin: 0 auto;
  background-color: #f4f5f6;
  position: absolute;
  z-index: 2;
  top: calc(50% - 219.5px);
  opacity: 1;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: SlideIn;
  animation-duration: 0.5s;
`;

export const Block = styled.div`
  /*  position: absolute; */
  z-index: 2;
  left: calc(50% - 183px);
  top: calc(50% - 219.5px);
  opacity: 1;
`;

export const Form = styled.form`
  width: 366px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 47px 47px 40px;
  display: flex;
`;

export const Logo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 2.6rem;
  background-color: transparent;
`;

export const LogoImg = styled.img`
  width: 140px;
  height: auto;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
  color: props.color,
  name: props.name,
}))`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  outline: none;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  &::placeholder {
    color: #d0cece;
  }
  /*   ${({ color }) =>
    color
      ? "border-bottom: 1px solid green;"
      : "border-bottom: 1px solid red;"}; */
  border-bottom: ${(props) =>
    props.color ? `1px solid ${props.color}` : "1px solid #d0cece"};
`;

export const Button = styled.button.attrs((props) => ({
  type: props.type,
  disabled: props.disabled,
}))`
  width: 100%;
  height: 52px;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ primary }) =>
    primary
      ? "background-color: #009EE4;margin-top: 60px;margin-bottom: 20px;color:#fff;border: 1px solid #009EE4;&:hover {background: #0080c1;border: 1px solid #0080c1;}&:active{background-color: #0080C1;} &:disabled { margin-top: 60px;margin-bottom: 20px; background: #d9d9d9;border: 1px solid #d9d9d9;}"
      : "background-color: transparent;border: 1px solid #D0CECE;color:#000;&:hover{background-color: #F4F5F6;} &:active {background-color: #D9D9D9;} &:disabled { background: #d9d9d9;border: 1px solid #d9d9d9;}"};
`;

export const A = styled.a.attrs((props) => ({
  href: props.href,
}))``;

export const Appear = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
 `;
export const SlideIn = keyframes`
 
    from {
      transform: translateY(-150px);
    }
    to {
      transform: translateY(0);
    }
`;

export const ErrorSpan = styled.span`
  color: red;
`;
