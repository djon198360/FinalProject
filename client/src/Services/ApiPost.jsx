/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../Consts/Consts";

const DATA_TAG = { type: "POST", id: "LIST" };

/* export const refreshToken = async (functionCallback) => {
  const token = await fetch(`${APIHOST}user/token/refresh/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ refresh: localStorage.getItem("token_refresh") }),
  });
  const data = await token.json();
  if (!token.ok) {
    throw data;
  }
  localStorage.setItem("token_access", data.access);
  if (functionCallback) {
    functionCallback();
  }
}; */

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
      query: () => "ads/",
      providesTags: (result = []) => [
        ...result.map((id) => ({ type: "POST", id })),
        DATA_TAG,
      ],
    }),

    getPostId: builder.query({
      query: (id) => `ads/${id}`,
      providesTags: (id) => [{ type: "POST", id }],
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
      /*     invalidatesTags: (id) => [{ type: "POST", id }], */
    }),

    /*     userGet: builder.query({
      query: () => `user`,
      headers: {
        Authorization: JSON.stringify(
          `Bearer ${localStorage?.getItem("access_token")}`
        ),
      },
      // providesTags: ["AUTH"],
    }), */

    userGet: builder.query({
      query: () => `user/`,
      providesTags: ["AUTH"],
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
      transformResponse: (response) => {
        response.isAuth = true;
        Object.entries(response).map(([key, value]) =>
          localStorage.setItem(key, value)
        );

        return response;
      },

      invalidatesTags: ["AUTH"],
    }),

    DislikeTrack: builder.mutation({
      query(data) {
        const { id } = data;
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        };
      },
      invalidatesTags: (track) => [{ type: "Tracks", id: track?.id }],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostIdQuery,
  useUserGetQuery,
  useUserRegisterMutation,
  useUserLoginMutation,
  /*   useGetAllFavoriteQuery,
  useGetAllTrackQuery,
  useUserRegisterMutation,
  useDislikeTrackMutation,
  useGetCategoryQuery,
  useRefreshTokenMutation,
  useGetTrackIdQuery, */
} = ALLPOSTS;
