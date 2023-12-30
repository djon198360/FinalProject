import { isMobile } from "react-device-detect";
import { RenderSearchForm } from "../../Components/SearchForm/Form";
import * as S from "./Style";

export const Main = () => {
  return (
    <S.Main>
      <RenderSearchForm />
      {!isMobile ? (
        <S.MainContainer>
          <S.MainH2>Объявления</S.MainH2>
          <S.MainContent></S.MainContent>
        </S.MainContainer>
      ) : (
        <S.MainContainerMob>
          <S.MainH2>Объявления</S.MainH2>
          <S.MainContentMob></S.MainContentMob>
        </S.MainContainerMob>
      )}
    </S.Main>
  );
};
