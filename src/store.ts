import { configureStore, Action, PreloadedState } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { useDispatch } from "react-redux";

import rootReducer, { RootState } from "./rootReducer";

export function setupStore(preloadedState?: PreloadedState<RootState>): any {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
