import { createApi /* , fetchBaseQuery */ } from "@reduxjs/toolkit/query/react";
/* import { SERVER_URL } from "../Consts/Consts"; */
import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { createQuery } from "../assets/helpFunc";

export const apiPost = createApi({
  reducerPath: "apiPost",
  baseQuery: baseQueryWithReauth,
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
      providesTags: () => [{ type: "POST" }],
    }),
    getPostId: builder.query({
      query: (id) => `ads/${id}`,
      /*   providesTags: (id) => [{ type: "POST", id }], */
    }),
    getAllMyPost: builder.query({
      query: () => `ads/me`,
      providesTags: (id) => [{ type: "POST", id }],
    }),
    editPost: builder.mutation({
      query: ({ dat, id }) => {
        /* const { title, price, description } = formData; */
        return {
          url: `/ads/${id}`,
          method: "PATCH",
          /* header: { "content-type": "multipart/form-data" }, */
          /*  headers: { "content-type": "application/json" }, */
          body: dat, // { title, price, description },
        };
      },
      invalidatesTags: (id) => [{ type: "POST", id }],
    }),
  }),
});

export const {
  useEditPostMutation,
  useGetAllPostsQuery,
  useGetPostIdQuery,
  useGetAllMyPostQuery,
} = apiPost;
