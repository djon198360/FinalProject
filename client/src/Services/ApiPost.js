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
      query: (post) => {
        console.log(post);
        const { title, description, price, id } = post;
        /* const { title, price, des
          console.log(cription } = formData; */
        return {
          url: `/ads/${id}`,
          method: "PATCH",
          /* header: { "content-type": "multipart/form-data" }, */
          /*  headers: { "content-type": "application/json" }, */
          body: { title, price, description }, // { title, price, description },
        };
      },
      invalidatesTags: (id) => [{ type: "POST", id }],
    }),
    createPost: builder.mutation({
      query: (post) => {
        const { title, description, price } = post;
        const data = new FormData();
        data.append("title", title);
        data.append("description", description);
        data.append("price ", price);
        const querySearch = createQuery(post);
        return {
          url: `/ads/?${querySearch}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "POST" }],
    }),

    uploadImage: builder.mutation({
      query: ({ images, id }) => {
        console.log(images);
        console.log(id);
        return {
          url: `/ads/${id}/image`,
          method: "POST",
          body: images,
        };
      },
      invalidatesTags: () => [{ type: "Users" }],
    }),
  }),
});

export const {
  useUploadImageMutation,
  useCreatePostMutation,
  useEditPostMutation,
  useGetAllPostsQuery,
  useGetPostIdQuery,
  useGetAllMyPostQuery,
} = apiPost;
