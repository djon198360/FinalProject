import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalAuth } from "../../Modal/Auth";
import { ModalAddAds } from "../../Modal/SignUp";
/* import { store } from "../../Store/Store"; */
import * as S from "./Style";

export const RenderHeader = () => {
  const history = useNavigate();
  const isAuth = localStorage?.getItem("isAuth")
    ? JSON.parse(localStorage.getItem("isAuth"))
    : false;
  const [isModal, setModal] = useState(false);

  return (
    <S.Header>
      <S.Nav>
        {isAuth ? (
          <>
            <ModalAddAds isVisible={isModal} onClose={() => setModal(false)} />
            <S.ButtonLk onClick={() => setModal(true)}>Выйти</S.ButtonLk>
            <S.Button onClick={() => setModal(true)}>
              Разместить объявление
            </S.Button>
            <S.ButtonLk
              onClick={() => {
                history("/profile/");
              }}
            >
              Личный кабинет
            </S.ButtonLk>
          </>
        ) : (
          <>
            <ModalAuth isVisible={isModal} onClose={() => setModal(false)} />
            <S.Button onClick={() => setModal(true)}>
              Вход в личный кабинет
            </S.Button>
          </>
        )}
      </S.Nav>
    </S.Header>
  );
};
