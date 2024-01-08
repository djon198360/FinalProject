import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../Consts/Consts";
import { createQuery } from "../assets/helpFunc";
/* import { setToken } from "../Store/Slice/SliceAuth"; */

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
    throw data.error;
  }
  if (token.ok) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    if (functionCallback) {
      functionCallback();
    }
  }
  return token;
};

export const AllPosts = createApi({
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
      invalidatesTags: ["USER"],
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

    userGetAll: builder.query({
      query(query) {
        const querySearch = createQuery(query);
        return {
          url: `user/all/?${querySearch}`,
        };
      },
      /* transformResponse: (response) => {
        Object.entries(response).map(([key, value]) =>
          localStorage.setItem(key, value)
        ); 
      }, */
      providesTags: ["AUTH"],
    }),

    userGet: builder.query({
      query() {
        return {
          url: `user/`,
        };
      },
      providesTags: ["USER"],
    }),

    userLogin: builder.mutation({
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
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostIdQuery,
  useGetAllMyPostQuery,
  useUserGetAllQuery,
  useUserGetQuery,
  useUserRegisterMutation,
  useUserLoginMutation,
  useSetEditMyInfoMutation,
} = AllPosts;
