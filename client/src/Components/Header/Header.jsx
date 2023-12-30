import * as S from "./Style";
import { isAuth } from "../../Consts/Consts";

export const RenderHeader = () => {
  return (
    <S.Header>
      <S.Nav>
        {isAuth ? (
          <>
            <S.Button>Вход в личный кабинет</S.Button>
            <S.ButtonLk>Личный кабинет</S.ButtonLk>
          </>
        ) : (
          <S.Button>Вход в личный кабинет</S.Button>
        )}
      </S.Nav>
    </S.Header>
  );
};
