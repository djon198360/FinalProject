import styled from "styled-components";
import { device } from "../../Consts/ConstMediaScreen";

export const Main = styled.main``;

export const Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
`;

export const CenterBlock = styled.div`
  margin: 0 auto;
`;

export const MainTitleH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
`;

export const ProfileSell = styled.div`
  width: 100%;
  padding: 0 0 70px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ProfileSeller = styled.div`
  display: flex;
  align-items: top;
  justify-content: start;
`;

export const SellerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`;

export const SellerImgDiv = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;

export const SellerImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
`;

export const SellerRight = styled.div`
  width: auto;
`;

export const RightTitleH3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
`;

export const RightCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
`;

export const RightInf = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
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

export const PhoneButton = styled(Button)`
  height: 57px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
`;

export const PhoneButtonSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
`;

export const MainTitleH3 = styled.h3`
  font-size: 18px;
  line-height: 1;
  margin-bottom: 30px;
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const MainCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  /* overflow-y: auto; */
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 441px;
  @media ${device.laptopL} {
    overflow-y: auto;
  }
  @media ${device.laptop} {
    overflow-y: auto;
  }
  @media ${device.tablet} {
    overflow-y: auto;
  }
`;
