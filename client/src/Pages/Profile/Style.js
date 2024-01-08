import styled from "styled-components";

export const Main = styled.main``;

export const Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
`;

export const CenterBlock = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;

export const TitleH2 = styled.h2`
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 20px;
`;

export const Profile = styled.div`
  width: 100%;
  padding: 0 0 40px;
`;

export const Content = styled.div`
  max-width: 834px;
`;

export const ProfileTitleH3 = styled.h3`
  margin-bottom: 20px;
`;

export const Settings = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 43px;
`;

export const Avatar = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;

export const AvatarImg = styled.img.attrs((props) => ({
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
`;

export const SettingsForm = styled.form`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
`;

export const SettingDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
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
`;

const Input = styled.input.attrs((props) => ({
  name: props.name,
  type: props.type,
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
`;

export const Fname = styled(Input)``;
export const Lname = styled(Input)``;
export const City = styled(Input)``;
export const Phone = styled(Input)`
  width: 614px;
`;
export const Button = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
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
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 441px;
`;
