import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RenderModal } from "../../Modal/Modal";
import * as S from "./Style";

export const RenderFooter = () => {
  const [createPost, setCreatePost] = useState(false);
  const history = useNavigate();
  return (
    <>
      <RenderModal
        isVisible={createPost}
        content={null}
        loading={null}
        action="create"
        onClose={() => setCreatePost(false)}
      ></RenderModal>
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
            <S.ImgA onClick={() => setCreatePost(true)}>
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
    </>
  );
};
