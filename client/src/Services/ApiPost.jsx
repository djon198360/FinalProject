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
  reducerPath: "AllPostS",
  tagTypes: ["POST"],
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    //  refreshToken: refreshToken(),
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "ads/",
      providesTags: (result = []) => [
        ...result.map((id) => ({ type: "POST", id })),
        DATA_TAG,
      ],
    }),

    /*  getAllFavorite: builder.query({
      query() {
        return {
          url: "catalog/track/favorite/all/",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        };
      },
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Tracks", id })),
        DATA_TAG,
      ],
    }), */

    getTrack: builder.query({
      query(id) {
        return {
          url: `catalog/track/${id}`,
        };
      },
      providesTags: (result = []) => [
        ...(Array.isArray(result)
          ? result.map((track) => ({ type: "Tracks", id: track?.id }))
          : []),
        DATA_TAG,
      ],
    }),

    getCategory: builder.query({
      query: (data) => `catalog/selection/${data}`,
      providesTags: (result = []) => [
        ...(Array.isArray(result)
          ? result.map(({ id }) => ({ type: "Tracks", id }))
          : []),
        DATA_TAG,
      ],
    }),

    likeTrack: builder.mutation({
      query(data) {
        const { id } = data;
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        };
      },
      invalidatesTags: (track) => [{ type: "Tracks", id: track?.id }],
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
  /*   useGetAllFavoriteQuery,
  useGetAllTrackQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
  useGetCategoryQuery,
  useRefreshTokenMutation,
  useGetTrackIdQuery, */
} = ALLPOSTS;
