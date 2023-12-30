import styled from "styled-components";

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
`;

export const SearchLogoLink = styled.a``;

export const SearchLogoImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 54px;
  height: auto;
`;

export const SearchLogoLinkMob = styled.a``;

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
`;
export const SearchFormMob = styled.form`
  margin-left: 10px;
  max-width: 1044px;
  width: 100%;
  display: flex;
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
  outline: none;
  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  /* 
  width: ${(props) => props.width ?? "20%"};
  margin-left: 10px;
  height: ${(props) => props.height ?? "50px"}; // 50px;
  padding: 13px 19px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #000; */
`;
export const InputMob = styled.input.attrs((props) => ({
  type: props.type,
}))`
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
`;
