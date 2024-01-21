import { useEffect /* , useState */ } from "react";
/* import Skeleton from "react-loading-skeleton";
import { NoImage, SERVER_URL } from "../Consts/Consts"; */
import * as S from "./Comment";

export const ModalComment = () => {
  useEffect(() => {}, []);
  return !isVisible ? null : (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
            <S.ModalClose>
              <S.ModalCloseLine onClick={onClose}></S.ModalCloseLine>
            </S.ModalClose>
            <S.ModalScroll></S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
