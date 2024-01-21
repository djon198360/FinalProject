/* eslint-disable no-restricted-syntax */
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
      providesTags: (id) => [{ type: "POST", id }],
    }),
    getAllMyPost: builder.query({
      query: () => `ads/me`,
      providesTags: (id) => [{ type: "POST", id }],
    }),
    editPost: builder.mutation({
      query: ({ post }) => {
        const { title, description, price, id } = post;
        return {
          url: `/ads/${id}`,
          method: "PATCH",
          body: { title, price, description },
        };
      },
      invalidatesTags: (id) => [{ type: "POST", id }],
    }),
    createPost: builder.mutation({
      query: ({ arrayImage, post }) => {
        const { title, description, price } = post;
        const formDataCreate = new FormData();
        for (const file of arrayImage) {
          formDataCreate.append("files", file);
        }
        formDataCreate.append("title", title);
        formDataCreate.append("description", description);
        formDataCreate.append("price", price);
        const querySearch = createQuery({ title, description, price });
        return {
          url: `/ads/?${querySearch}`,
          method: "POST",
          body: formDataCreate,
        };
      },
      invalidatesTags: () => [{ type: "POST" }],
    }),
    uploadImage: builder.mutation({
      query: ({ arrayImage, post }) => {
        const { id } = post;
        const formDataCreate = new FormData();
        for (const file of arrayImage) {
          formDataCreate.append("file", file);
        }
        return {
          url: `/ads/${id}/image`,
          method: "POST",
          body: formDataCreate,
        };
      },
      invalidatesTags: () => [{ type: "Users" }],
    }),
    deletePost: builder.mutation({
      query: (id) => {
        return {
          url: `/ads/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: () => [{ type: "POST" }],
    }),
  }),
});

export const {
  useDeletePostMutation,
  useUploadImageMutation,
  useCreatePostMutation,
  useEditPostMutation,
  useGetAllPostsQuery,
  useGetPostIdQuery,
  useGetAllMyPostQuery,
} = apiPost;
