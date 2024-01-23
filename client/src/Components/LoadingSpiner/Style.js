import styled, { keyframes } from "styled-components";

const SpinFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.4;
  z-index: 99999999;
`;

export const Spin = styled.div`
  position: absolute;
  z-index: 999999999;
  height: 60px;
  width: 60px;
  border: 3px solid transparent;
  border-top-color: #a04668;
  top: 50%;
  left: 50%;
  margin: -30px;
  border-radius: 50%;
  animation: ${SpinFrames} 2s linear infinite;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
  }

  &:before {
    border-top-color: #254e70;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    animation: ${SpinFrames} 3s linear infinite;
  }

  &:after {
    border-top-color: #fffbfe;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    animation: ${SpinFrames} 4s linear infinite;
  }
`;
