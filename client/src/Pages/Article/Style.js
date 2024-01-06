import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  padding: 43px 5px 77px;
`;

export const MenuImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 54px;
  height: auto;
`;

export const Form = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
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

export const Article = styled.div`
  max-width: 1178px;
  width: 100%;
  padding: 55px 0 0px;
  margin: 0 auto;
`;
export const ArticleContent = styled.div`
  display: flex;
  align-items: top;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ArticleLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;
`;

export const ArticleFiilImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleImg = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
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
`;

export const ArticleImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
`;

export const ArticleRight = styled.div`
  max-width: 621px;
`;

export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
`;

export const ArticleInfo = styled.div`
  margin-bottom: 34px;
`;

export const ArticleLink = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;
export const ArticleDate = styled(ArticleLink)`
  margin-bottom: 4px;
`;

export const ArticleSity = styled(ArticleLink)`
  margin-bottom: 4px;
`;

export const ArticlePrice = styled(ArticleLink)`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ArticleButton = styled(Button)`
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
export const ArticleButtonSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
`;
export const ArticleAuthor = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

export const AuthorImgImg = styled.img.attrs((props) => ({
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

export const AuthorCont = styled.div`
  margin-left: 12px;
`;

export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
`;
export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
`;

export const MainTitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
`;

export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
`;
