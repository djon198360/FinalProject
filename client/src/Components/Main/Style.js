import styled from "styled-components";
import { device } from "../../Consts/ConstMediaScreen";

export const Main = styled.main`
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
  @media ${device.tablet} {
    padding: 0 20px 0;
  }
`;

export const MainArticle = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;

  @media ${device.tablet} {
    max-width: 1178px;
    width: 100%;
    padding: 55px 0 0px;
    margin: 0 auto;
  }
`;

export const ArticleContent = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ArticleLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;
  @media ${device.laptop} {
    margin-right: 20px;
  }

  @media ${device.tablet} {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ArticleFillImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
`;

export const ArticleImgDiv = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
  @media ${device.tablet} {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
  }
`;

export const ArticleImgImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ArticleImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;
  @media ${device.tablet} {
    display: none;
  }
`;

export const ArticleImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
  @media ${device.tablet} {
    display: none;
  }
  &:hover {
    border: 2px solid #009ee4;
  }
`;

export const ArticleImgBarDivImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ArticleImgBarMob = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 68px;
    height: 8px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 34px);
    display: flex;
    justify-content: space-between;
  }
`;

export const ImgBarMobCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  &:active {
    background-color: #ffffff;
  }
`;

export const ArticleRight = styled.div`
  max-width: 621px;
  @media ${device.tablet} {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`;

export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 1;
`;
export const ArticleTitle = styled(Title)`
  margin-bottom: 10px;
  @media ${device.tablet} {
    margin-bottom: 10px;
  }
`;

export const ArticleInfo = styled.div`
  margin-bottom: 34px;
  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`;

export const ArticleP = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;

export const ArticleDate = styled(ArticleP)``;
export const ArticleCity = styled(ArticleP)``;
export const ArticleLink = styled(ArticleP)`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 19px;
    color: #009ee4;
  }
`;
export const ArticlePrice = styled(ArticleP)`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
export const ArticleBtnBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ArticleButton = styled.button.attrs((props) => ({
  type: props.type,
}))`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 10px;
  @media ${device.tablet} {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
  &:hover {
    background-color: #0080c1;
  }
`;
export const ButtonRedact = styled(ArticleButton)`
  width: 189px;
  margin-right: 10px;
  @media ${device.laptop} {
    width: 225px;
    margin-right: 0;
  }
  @media ${device.tablet} {
    width: 189px;
    margin-right: 10px;
  }
`;
export const ButtonRemove = styled(ArticleButton)`
  width: 225px;
  @media ${device.laptop} {
    width: 225px;
  }
`;

export const ArticleAuthor = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media ${device.tablet} {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const AuthorImgDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

export const AuthorImg = styled.img.attrs((props) => ({
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

export const AuthorCont = styled.div`
  margin-left: 12px;
`;

export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`;

export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`;

export const MainTitle = styled(Title)`
  margin-bottom: 32px;
  padding: 0 5px;
  @media ${device.tablet} {
    margin-bottom: 14px;
    padding: 0;
  }
`;

export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
  @media ${device.tablet} {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
  }
`;

export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const ArticleButtonSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
`;
