import { useNavigate } from "react-router-dom";
import * as S from "./Style";

export const RenderFooter = () => {
  const history = useNavigate();
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <S.ImgA
            onClick={() => {
              history("/");
            }}
          >
            <S.Img src="../img/icon_01.png" alt="home" />
          </S.ImgA>
        </S.FooterImg>
        <S.FooterImg>
          <S.ImgA>
            <S.Img src="../img/icon_02.png" alt="home" />
          </S.ImgA>
        </S.FooterImg>
        <S.FooterImg>
          <S.ImgA
            onClick={() => {
              history("/profile/");
            }}
          >
            <S.Img src="../img/icon_03.png" alt="home" />
          </S.ImgA>
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  );
};
