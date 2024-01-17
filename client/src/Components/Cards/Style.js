import styled from "styled-components";
import { device } from "../../Consts/ConstMediaScreen";

export const CardItem = styled.div`
  margin: 0;
  @media ${device.tablet} {
    margin: 0;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

export const CardBody = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
  }
`;

export const CardImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  @media ${device.tablet} {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;
  }
`;

export const A = styled.a.attrs((props) => ({
  href: props.href,
  title: props.title,
}))``;

export const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export const CardContent = styled.div``;

export const CardTitleH3 = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${device.tablet} {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const P = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
`;

export const CardPrice = styled(P)`
  margin-bottom: 10px;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const CardPlace = styled(P)`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
  @media ${device.tablet} {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;

export const CardDate = styled(P)`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  @media ${device.tablet} {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;
