import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/* import { useDispatch } from "react-redux"; */
import { SERVER_URL } from "../Consts/Consts";
import { createQuery } from "../assets/helpFunc";

const DATA_TAG = { type: "POST", id: "LIST" };
/* const tokenss = {
  refresh_token: localStorage.getItem("refresh_token"),
  access_token: localStorage.getItem("access_token"),
}; */

export const refreshToken = async (functionCallback) => {
  const tokens = {
    refresh_token: localStorage.getItem("refresh_token"),
    access_token: localStorage.getItem("access_token"),
  };

  const response = await fetch(`${SERVER_URL}auth/login/`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(tokens),
  });
  const data = await response.json();
  if (!response.ok) {
    return response;
    /*   throw new Error({
      error: `Не удалось загрузить плейлист, попробуйте позже!`,
    }); */
  }
  if (response.ok) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    if (functionCallback) {
      functionCallback();
    }
    return data;
  }
  return data;
};
const tokens = {
  refresh_token: localStorage.getItem("refresh_token"),
  access_token: localStorage.getItem("access_token"),
};

export const AllPosts = createApi({
  reducerPath: "AllPosts",
  /*  tagTypes: ["POST", "AUTH"], */
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    maxRetries: 5,
    prepareHeaders: (headers) => {
      const token = localStorage?.getItem("access_token");
      if (token) {
        headers.set("content-type", "application/json");
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getRefreshToken: builder.mutation({
      query: () => ({
        url: `${SERVER_URL}auth/login/`,
        method: "PUT",
        body: JSON.stringify({ tokens }),
        headers: { "content-type": "application/json" },
        extraOptions: { maxRetries: 2 },
      }),

      /*     query: async () => {
        const tokens = {
          refresh_token: localStorage.getItem("refresh_token"),
          access_token: localStorage.getItem("access_token"),
        };
        return {
          url: `auth/login/`,
          method: "PUT",
          body: JSON.stringify(tokens),
          headers: { "content-type": "application/json" },
        };
      }, */
      /*       providesTags: (result = []) => [
        ...result.map((id) => ({ type: "POST", id })),
        DATA_TAG,
      ], */
    }),

    getAllPosts: builder.query({
      query: (query) => {
        const querySearch = createQuery(query);
        return {
          url: `/ads/?${querySearch}`,
          method: "GET",
          headers: { "content-type": "application/json" },
        };
      },
      providesTags: (result = []) => [
        ...result.map((id) => ({ type: "POST", id })),
        DATA_TAG,
      ],
    }),

    getPostId: builder.query({
      query: (id) => `ads/${id}`,
      providesTags: (id) => [{ type: "POST", id }],
    }),

    editPostId: builder.mutation({
      query: (formData, id) => {
        //  const { id } = query;
        return {
          url: `/ads/${id}`,
          method: "PATCH",
          // header: { "content-type": "multipart/form-data" },
          headers: { "content-type": "application/json" },
          body: { formData }, // { title, price, description },
        };
      },
      invalidatesTags: (id) => [{ type: "POST", id }],
    }),

    getAllMyPost: builder.query({
      query: () => `ads/me`,
      providesTags: (id) => [{ type: "POST", id }],
    }),

    /*     setEditMyInfo: builder.mutation({
      query(data) {
        const { name, city, surname, role, phone } = data;
        return {
          url: `user/`,
          method: "PATCH",
          body: { name, city, surname, role, phone },
        };
      },
      invalidatesTags: ["CURRENT_USER"],
    }), */

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

    userGetAll: builder.query({
      query(query) {
        const querySearch = createQuery(query);
        return {
          url: `user/all/?${querySearch}`,
        };
      },
      //  providesTags: ["USER"],
    }),

    userGet: builder.query({
      query() {
        return {
          url: `user/`,
        };
      },
      //  providesTags: ["USER"],
    }),
  }),
});

export const {
  useEditPostIdMutation,
  useGetRefreshTokenMutation,
  useGetAllPostsQuery,
  useGetPostIdQuery,
  useGetAllMyPostQuery,
  useUserGetAllQuery,
  useUserGetQuery,
  useUserRegisterMutation,
  /*  useUserLoginMutation, */
  /*   useSetEditMyInfoMutation, */
} = AllPosts;
