import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiPost } from "../Services/ApiPost";
import { apiUser } from "../Services/ApiUser";
import SliceAuth from "../Services/Slice/SliceAuth";

export const store = configureStore({
  reducer: {
    [apiPost.reducerPath]: apiPost.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    SliceAuth,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiPost.middleware,
      apiUser.middleware
    ),
});

setupListeners(store.dispatch);
