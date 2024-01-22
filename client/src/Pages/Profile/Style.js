import styled from "styled-components";
import { device } from "../../Consts/ConstMediaScreen";

export const Main = styled.main``;

export const Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
  @media ${device.laptop} {
    padding: 85px 0px 84px;
  }
  @media ${device.tablet} {
    padding: 85px 0px 84px;
  }
`;

export const CenterBlock = styled.div`
  @media ${device.laptop} {
    margin: 0 auto;
    padding: 0 20px;
  }
  @media ${device.tablet} {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const TitleH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  @media ${device.tablet} {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`;

export const Profile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media ${device.tablet} {
    width: 100%;
    padding: 0 0 40px;
  }
`;

export const Content = styled.div`
  max-width: 834px;
  @media ${device.tablet} {
    max-width: 834px;
    width: 100%;
  }
`;

export const ProfileTitleH3 = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 1;
  }
`;

export const Settings = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 43px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;

export const Avatar = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  @media ${device.tablet} {
    width: 132px;
    height: 132px;
  }
`;

export const AvatarImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const AvatarSettingLink = styled.a`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`;

export const Right = styled.div`
  width: 630px;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const SettingsForm = styled.form`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SettingDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
  @media ${device.tablet} {
    width: 100%;
    display: inline-block;
    margin: 0 0px 18px;
  }
`;

export const Label = styled.label.attrs((props) => ({
  for: props.for,
}))`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`;

export const UploadLabel = styled(Label)`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
  cursor: pointer;
`;

export const Input = styled.input.attrs((props) => ({
  name: props.name,
  type: props.type,
  maxLength: props.maxLength,
  minLength: props.minLength,
  /* value: props.value, */
  placeholder: props.placeholder,
  pattern: props.pattern,
}))`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  width: 300px;
  outline: none;
  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media ${device.tablet} {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const UploadAvatarInput = styled(Input)`
  display: none;
`;

export const Fname = styled(Input)``;
export const Lname = styled(Input)``;
export const City = styled(Input)``;
export const Phone = styled(Input)`
  width: 614px;
`;
export const Button = styled.button.attrs((props) => ({
  type: props.type,
  disabled: props?.disabled,
}))`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  &:hover {
    background-color: #0080c1;
  }
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
  &:disabled {
    background-color: #c4c8ca;
    border: 1px solid #c4c8ca;
  }
`;

export const MainContentTitle = styled(ProfileTitleH3)`
  margin-bottom: 20px;
  @media ${device.tablet} {
    margin-bottom: 30px;
  }
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
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }
  @media ${device.laptop} {
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }
  @media ${device.tablet} {
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
    height: 596px;
  }
`;
