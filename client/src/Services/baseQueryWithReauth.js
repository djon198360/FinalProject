/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setAuthToken, logout } from "./Slice/SliceAuth";
import { SERVER_URL } from "../Consts/Consts";

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const token = {
      refresh_token: localStorage.getItem("refresh_token"),
      access_token: localStorage.getItem("access_token"),
    };
    const refreshResult = await baseQuery(
      {
        url: "/auth/login/",
        method: "PUT",
        body: token,
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      const { data } = refreshResult;
      api.dispatch(
        setAuthToken({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          isAuth: Boolean(data.access_token),
        })
      );

      if (args && !args.headers) {
        /*  headers: new Headers({
          'Content-Type': 'application/json',
        }), */
        args.headers = new Headers();
      }
      /*       if (args.headers) {
        args.headers.set("Authorization", `Bearer ${data.access_token}`);
      } else {
        args.headers["Authorization"] = `Bearer ${data.access_token}`;
      } */
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};
