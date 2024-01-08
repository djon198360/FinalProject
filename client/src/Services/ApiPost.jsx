import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../Consts/Consts";
/* import { store } from "../Store/Store"; */

const DATA_TAG = { type: "POST", id: "LIST" };

export const refreshToken = async (functionCallback) => {
  const tokens = {
    refresh_token: localStorage.getItem("refresh_token"),
    access_token: localStorage.getItem("access_token"),
  };
  const token = await fetch(`${SERVER_URL}auth/login/`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(tokens),
  });
  const data = await token.json();
  if (!token.ok) {
    throw new Error("error");
  }
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
  if (functionCallback) {
    functionCallback();
  }
};

export const ALLPOSTS = createApi({
  reducerPath: "AllPosts",
  /*  tagTypes: ["POST", "AUTH"], */
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers) => {
      const token = localStorage?.getItem("access_token");
      if (token) {
        headers.set("content-type", "application/json");
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),

  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (query) => `ads/?${query}`,
      providesTags: (result = []) => [
        ...result.map((id) => ({ type: "POST", id })),
        DATA_TAG,
      ],
    }),

    getPostId: builder.query({
      query: (id) => `ads/${id}`,
      providesTags: (id) => [{ type: "POST", id }],
    }),

    getAllMyPost: builder.query({
      query: () => `ads/me`,
      providesTags: (id) => [{ type: "POST", id }],
    }),

    setEditMyInfo: builder.mutation({
      query(data) {
        const { name, city, surname, role, phone } = data;
        return {
          url: `user/`,
          method: "PATCH",
          body: { name, city, surname, role, phone },
        };
      },
      invalidatesTags: ["AUTH"],
    }),
    userRegister: builder.mutation({
      query(data) {
        const { email, password, name, city, surname, role } = data;
        return {
          url: `/auth/register/`,
          method: "POST",
          body: { email, password, name, city, surname, role },
        };
      },
      invalidatesTags: ["AUTH"],
    }),

    userGet: builder.query({
      //  query: () => `user/`,
      query() {
        return {
          url: `user/`,
          /*           headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          }, */
        };
      },
      /* transformResponse: (response) => {
        Object.entries(response).map(([key, value]) =>
          localStorage.setItem(key, value)
        ); 
      }, */
      providesTags: ["AUTH"],
    }),

    userLogin: builder.mutation({
      /*   async queryFn(data) {
        const state = { token: "", info: "" };
        const { email, password } = data;
        const response = await fetch(`${SERVER_URL}auth/login/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const token = await response.json();
        token.isAuth = true;
        Object.entries(token).map(([key, value]) =>
          localStorage.setItem(key, value)
        );
        state.token = "ok";
        if (response.ok) {
          ALLPOSTS.endpoint.userGet();
          const res = await fetch(`${SERVER_URL}user/`, {
            method: "GET",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token.access_token}`,
            },
          });
          Object.entries(await res.json()).map(([key, value]) =>
            localStorage.setItem(key, value)
          );
          state.info = "ok";
        }
      }, */

      query(data) {
        const { email, password } = data;
        return {
          url: `/auth/login/`,
          method: "POST",
          body: { email, password },
        };
      },
      transformResponse: async (response) => {
        response.isAuth = true;
        const info = await fetch(`${SERVER_URL}user/`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${response.access_token}`,
          },
        });
        const infos = await info.json();
        Object.entries(infos).map(([key, value]) =>
          localStorage.setItem(key, value)
        );
        Object.entries(response).map(([key, value]) =>
          localStorage.setItem(key, value)
        );

        return response;
      },
      invalidatesTags: ["AUTH"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostIdQuery,
  useGetAllMyPostQuery,
  useUserGetQuery,
  useUserRegisterMutation,
  useUserLoginMutation,
  useSetEditMyInfoMutation,
} = ALLPOSTS;
