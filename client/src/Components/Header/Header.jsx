import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ModalAuth } from "../Modal/Auth";
import { logout } from "../../Services/Slice/SliceAuth";
import { RenderModal } from "../Modal/Modal";
import { ModalAddAds } from "../Modal/SignUp";
import * as S from "./Style";

export const RenderHeader = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.SliceAuth.isAuth);
  const history = useNavigate();
  const [isModal, setModal] = useState();
  const [createPost, setCreatePost] = useState();
  /*   const { isAuth } = userInfo; */ // || JSON.parse(localStorage.getItem("isAuth"));
  const logaut = () => {
    dispatch(logout(false));
  };
  return (
    <S.Header>
      <S.Nav>
        {isAuth ? (
          <>
            <RenderModal
              isVisible={createPost}
              content={null}
              loading={null}
              action="create"
              onClose={() => setCreatePost(false)}
            ></RenderModal>
            <ModalAddAds isVisible={isModal} onClose={() => setModal(false)} />
            <S.ButtonLk onClick={() => logaut()}>Выйти</S.ButtonLk>
            <S.Button onClick={() => setCreatePost(true)}>
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
