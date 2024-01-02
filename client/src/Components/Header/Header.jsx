import { useState } from "react";
import { isAuth } from "../../Consts/Consts";
import { ModalAuth } from "../../Modal/SignIn";
import * as S from "./Style";

export const RenderHeader = () => {
  const [isModal, setModal] = useState(false);
  return (
    <S.Header>
      <ModalAuth isVisible={isModal} onClose={() => setModal(false)} />
      <S.Nav>
        {isAuth ? (
          <>
            <S.Button>Разместить объявление</S.Button>
            <S.ButtonLk>Личный кабинет</S.ButtonLk>
          </>
        ) : (
          <S.Button onClick={() => setModal(true)}>
            Вход в личный кабинет
          </S.Button>
        )}
      </S.Nav>
    </S.Header>
  );
};
