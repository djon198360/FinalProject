import { useEffect, useState, useRef } from "react";
import { validInput } from "../assets/helpFunc";
import * as S from "./Style";

export const ModalAuth = ({ isVisible = false, onClose }) => {
  const { emails, passwords, passwordsRepeat } = useRef(null);
  const [isLogin, setLogin] = useState(true);
  const [isRegister, setRegister] = useState(false);
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [isBlock, setisBlock] = useState(true);
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  const validateInputs = (e) => {
    setLoginValue({
      ...loginValue,
      [e.target.name]: validInput({
        [e.target.name]: e.target.value,
        loginValue,
      }),
    });
  };

  const updateInputValue = (e) => {
    setLoginValue({
      ...loginValue,
      [e.target.name]: e.target.value,
    });

    return validateInputs(e);
  };

  const toggle = () => {
    if (isLogin) {
      setLogin(false);
      setRegister(true);
    } else {
      setLogin(true);
      setRegister(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  useEffect(() => {
    console.log(loginValue);
    console.log(`isLogin ${isLogin}`);
    console.log(`is Register ${isRegister}`);
    console.log(`is Block ${isBlock}`);
    if (
      isRegister &&
      loginValue.email.validate &&
      loginValue.password.validate &&
      loginValue.passwordRepeat.validate
    ) {
      setisBlock(false);
    } else if (
      isLogin &&
      loginValue.email.validate &&
      loginValue.password.validate
    ) {
      setisBlock(false);
    } else {
      setisBlock(true);
    }
  }, [loginValue, isBlock, isLogin, isRegister]);

  return !isVisible ? null : (
    <S.ModalBlock onClick={onClose}>
      <S.Modal
        onClick={(e) => e.stopPropagation()}
        onBlur={(e) => {
          updateInputValue(e);
        }}
      >
        <S.Block>
          <S.Form>
            <S.Logo>
              <S.A onClick={() => toggle()}>
                <S.LogoImg src="../img/logo_modal.png" alt="logo" />
              </S.A>
            </S.Logo>
            <S.Input
              color={loginValue.email?.color}
              type="text"
              placeholder="email *"
              name="email"
              ref={emails}
              value={loginValue.email.text}
              onChange={(e) => {
                updateInputValue(e);
              }}
              onBlur={(e) => {
                updateInputValue(e);
              }}
            />
            <S.Input
              color={loginValue.password?.color}
              type="password"
              placeholder="Пароль *"
              name="password"
              ref={passwords}
              value={loginValue.password?.text}
              onChange={(e) => {
                updateInputValue(e);
              }}
              onBlur={(e) => {
                validateInputs(e);
              }}
            />
            {isRegister || !isLogin ? (
              <>
                <S.Input
                  color={loginValue.passwordRepeat?.color}
                  type="password"
                  placeholder="Повторите пароль *"
                  name="passwordRepeat"
                  ref={passwordsRepeat}
                  value={loginValue.passwordRepeat?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                  onBlur={(e) => {
                    updateInputValue(e);
                  }}
                />
                <S.Input
                  type="text"
                  placeholder="Имя (Необязятально)"
                  name="name"
                  value={loginValue.name?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                />
                <S.Input
                  type="text"
                  placeholder="Фамилия (Необязятально)"
                  name="family"
                  value={loginValue.family?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                />
                <S.Input
                  type="text"
                  placeholder="Город (Необязятально)"
                  name="city"
                  value={loginValue.city?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                  onBlur={(e) => {
                    updateInputValue(e);
                  }}
                />
              </>
            ) : null}

            {isLogin ? (
              <>
                <S.Button primary type="button" disabled={isBlock}>
                  Войти
                </S.Button>
                <S.Button type="button" onClick={() => toggle()}>
                  Зарегистрироваться
                </S.Button>
              </>
            ) : (
              <S.Button
                primary
                type="button"
                onClick={() => toggle()}
                disabled={isBlock}
              >
                Зарегистрироваться
              </S.Button>
            )}
          </S.Form>
        </S.Block>
      </S.Modal>
    </S.ModalBlock>
  );
};
