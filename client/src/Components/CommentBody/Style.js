import styled from "styled-components";
import { device } from "../../Consts/ConstMediaScreen";

export const ItemBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Left = styled.div`
  margin-right: 12px;
`;

export const ImgDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const Right = styled.div`
  display: block;
`;

export const Name = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;

export const NameSpan = styled.span`
  margin-left: 10px;
  color: #5f5f5f;
`;

export const H5 = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;
