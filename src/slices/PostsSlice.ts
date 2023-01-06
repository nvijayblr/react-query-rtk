import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

export interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface State {
  isLoading: boolean;
  isError: boolean,
  list: Posts[],
}

const initialState: State = {
  isLoading: false,
  isError: false,
  list: [],
};

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetState: () => initialState,
    setPostsList: (
      state: Draft<State>,
      action: PayloadAction<Posts[]>
    ) => {
      state.list = action.payload;
    },
    setIsLoading: (state: Draft<State>, action) => {
      state.isLoading = action.payload;
    },
    setError: (state: Draft<State>, action) => {
      state.isError = action.payload;
    },
  },
});


export const {
  setIsLoading,
  setError,
  setPostsList,
} = PostsSlice.actions;

export const getPostsList = (): AppThunk => (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) {
          dispatch(setError(true));
        }
        return res.json();
      }).then((data => {
        dispatch(setPostsList(data))
        dispatch(setIsLoading(false));
      }), err => {
        dispatch(setIsLoading(false));
        dispatch(setError(true));
      });
  } catch (err) {
    dispatch(setIsLoading(false));
  }
};

export default PostsSlice.reducer;
