import { combineReducers } from "@reduxjs/toolkit";
import PostsSlice from "./slices/PostsSlice";

const rootReducer = combineReducers({
  posts: PostsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
