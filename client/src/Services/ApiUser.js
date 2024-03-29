import { createApi /* , fetchBaseQuery */ } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../Consts/Consts";
import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { createQuery } from "../assets/utils";

export const apiUser = createApi({
  reducerPath: "apiUser",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
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
        const authArray = { ...infos, ...response };
        return authArray;
      },
      //    invalidatesTags: ["CURRENT_USER"],
    }),

    getUsersAll: builder.query({
      query: (arg) => `user/all/?${createQuery(arg)}`,
      providesTags: (result, error, arg) => [{ type: "Users", id: arg }],
    }),
    getUser: builder.query({
      query: () => `user/`,
      providesTags: (result, error, arg) => [{ type: "Users", id: arg }],
    }),
    getPosts: builder.query({
      query: (arg) => `posts/${arg}`,
      providesTags: (result, error, arg) => [{ type: "Posts", id: arg }],
    }),
    /*  editPostId: builder.mutation({
      query: ({ dataFiles, id }) => {
         const { title, price, description } = formData; 
        return {
          url: `/ads/${id}`,
          method: "PATCH",

          body: dataFiles,  { title, price, description },
        };
      },
      invalidatesTags: (id) => [{ type: "POST", id }],
    }), */
    updateUser: builder.mutation({
      query: ({ name, city, surname, role, phone }) => ({
        url: `user/`,
        method: "PATCH",
        body: { name, city, surname, role, phone },
      }),
      invalidatesTags: (result, error, { name }) => [{ type: "Users", name }],
      async onQueryStarted({ name, ...body }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiUser.util.updateQueryData("getUser", name, (draft) =>
            Object.assign(draft, body)
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    uploadAvatar: builder.mutation({
      query: (datas) => {
        return {
          url: `/user/avatar`,
          method: "POST",
          body: datas,
        };
      },
      invalidatesTags: () => [{ type: "Users" }],
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
  }),
});

export const {
  useUserRegisterMutation,
  useUploadAvatarMutation,
  useUserGetAllQuery,
  useGetUserQuery,
  useGetPostsQuery,
  useUpdateUserMutation,
  useUserLoginMutation,
} = apiUser;
