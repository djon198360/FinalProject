/* eslint-disable camelcase */
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setAuthToken, logout } from "./Slice/SliceAuth";
import { SERVER_URL } from "../Consts/Consts";

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().SliceAuth.access_token;
      console.debug("Использую токен из стора", { token });
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });

  // Делаем запрос
  const result = await baseQuery(args, api, extraOptions);
  console.debug("Результат первого запроса", { result });

  // Если запрос выполнился не с 401 кодом, то все хорошо, просто отдаем результат запроса наружу
  if (result?.error?.status !== 401) {
    return result;
  }
  // Ниже обрабатываем 401 код
  // Функция которая отчищает данные о юзере в сторе и отправляет на страницу логина
  const forceLogout = () => {
    console.debug("Принудительная авторизация!");
    api.dispatch(logout());
    // window.location.navigate("/");
  };

  // Функция getState возвращает состояние redux стейта целиком, ее нам предоставляет rtk query, она прилетает параметром запроса в функцию
  /*   const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token"); */
  const refresh_token = localStorage.getItem("refresh_token");
  const access_token = localStorage.getItem("access_token");
  console.debug("Данные пользователя", refresh_token, access_token);
  // Если в сторе нет refresh токена, то помочь пользователю мы уже ничем не сможем, разлогиниваем его и отправляем авторизоваться руками
  if (!refresh_token) {
    return forceLogout();
  }

  // Делаем запрос за новым access токеном в API обновления токена
  const refreshResult = await baseQuery(
    {
      url: "/auth/login/",
      method: "PUT",
      body: {
        access_token,
        refresh_token,
      },
      headers: {
        "content-type": "application/json",
      },
    },
    api,
    extraOptions
  );

  console.debug("Результат запроса на обновление токена", { refreshResult });

  // Если api обновления токена не вернуло новый access токен, то ничего сделать мы не можем, разлогиниваем юзера
  // Апи может не вернуть новый access токен по разным причинам, например у нас неверный refresh токен или refresh токен протух (обычно refresh токены не протухаю, но бывает и такое)
  // if (!refreshResult.data.access_token) {
  //   return forceLogout();
  // }
  if (refreshResult?.error?.status === 401) {
    return forceLogout();
  }
  if (!refreshResult.data.access_token) {
    return forceLogout();
  }

  // Мы наконец получили новый access токен, сохраняем его в стор, чтобы последующие запросы могли его использовать внутри prepareHeaders
  api.dispatch(setAuthToken(refreshResult.data));
  localStorage.setItem("access_token", refreshResult.data.access_token);
  localStorage.setItem("refresh_token", refreshResult.data.refresh_token);

  // Делаем повторный запрос с теми же параметрами что и исходный,
  // но помним, что повторный запрос произойдет уже с новым токеном,
  // потому что для него вызовется callback prepareHeaders, который получит актуальный access токен из стора,
  // который мы положили в стор строчкой выше
  const retryResult = await baseQuery(args, api, extraOptions);

  // Если повторный запрос выполнился с 401 кодом, то что-то совсем пошло не так, отправляем на принудительную ручную авторизацию
  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  console.debug("Повторный запрос завершился успешно");

  return retryResult;
};
