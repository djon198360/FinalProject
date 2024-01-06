import { useEffect, useState } from "react";
import { validInput } from "../assets/helpFunc";
import { lang } from "../assets/Language";
/* import { isAuth } from "../Consts/Consts"; */
import {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserGetQuery,
} from "../Services/ApiPost";
import * as S from "./Style";

export const ModalAuth = ({ isVisible = false, onClose }) => {
  const [registerApi, isLoadings] = useUserRegisterMutation();
  const [loginUserApi, { data, isLoading }] = useUserLoginMutation();
  const [isLogin, setLogin] = useState(true);
  const [isRegister, setRegister] = useState(false);
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
    role: "user",
  });

  const userId = data?.access_token;

  // Затем получаем проекты пользователя
  const { data: projects } = useUserGetQuery(["projects", userId], {
    // Запрос не будет выполняться до получения userId
    enabled: !!userId,
  });
  console.log(projects);
  const [errorMessage, setErrorMessage] = useState(null);
  // const [userGetApi, { isLoadin }] = useUserGetQuery();
  const handleLogin = async () => {
    const result = await loginUserApi({
      email: loginValue.email.text,
      password: loginValue.password.text,
    });
    if (result.data) {
      onClose();
    }

    if (result?.error) {
      setErrorMessage(result.error.data);
      if (result?.error.status === 401) {
        console.log("Неверный логин , или пароль");
      }
      if (result?.error.status === 422) {
        console.log("Неверный логин , или пароль");
      }
    }
  };

  const handleRegister = async () => {
    const result = await registerApi({
      email: loginValue.email.text,
      password: loginValue.password.text,
      name: loginValue.name.text,
      surname: loginValue.surname.text,
      city: loginValue.city.text,
      role: loginValue.role,
    });
    if (result?.error) {
      if (result?.error.status === 401) {
        setErrorMessage(result.error.detail);
        console.log("Неверный логин , или пароль");
      }
    }
    //  results.error ? alert("error") : alert("succes");
  };
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
    setErrorMessage();
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
            <S.ErrorSpan>
              {lang[errorMessage] ? lang[errorMessage] : errorMessage}
            </S.ErrorSpan>
            <S.Input
              color={loginValue.email?.color}
              type="text"
              placeholder="email *"
              autocomplete="username"
              name="email"
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
              autocomplete="current-password"
              name="password"
              value={loginValue.password?.text}
              onChange={(e) => {
                updateInputValue(e);
              }}
              onBlur={(e) => {
                updateInputValue(e);
              }}
              onInput={(e) => {
                updateInputValue(e);
              }}
              onClick={(e) => {
                updateInputValue(e);
              }}
            />
            {isRegister || !isLogin ? (
              <>
                <S.Input
                  color={loginValue.passwordRepeat?.color}
                  type="password"
                  placeholder="Повторите пароль *"
                  name="passwordRepeat"
                  value={loginValue.passwordRepeat?.text}
                  onChange={(e) => {
                    updateInputValue(e);
                  }}
                  onBlur={(e) => {
                    updateInputValue(e);
                  }}
                  onInput={(e) => {
                    updateInputValue(e);
                  }}
                  onClick={(e) => {
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
                  name="surname"
                  value={loginValue.surname?.text}
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
                <S.Button
                  primary
                  type="button"
                  disabled={isBlock}
                  onClick={() => handleLogin()}
                >
                  {isLoading ? "Загрузка" : "Войти"}
                </S.Button>
                <S.Button type="button" onClick={() => toggle()}>
                  Зарегистрироваться
                </S.Button>
              </>
            ) : (
              <S.Button
                primary
                type="button"
                onClick={() => handleRegister()}
                disabled={isBlock}
              >
                {isLoadings ? "Загрузка" : "Зарегистрироваться"}
              </S.Button>
            )}
          </S.Form>
        </S.Block>
      </S.Modal>
    </S.ModalBlock>
  );
};
