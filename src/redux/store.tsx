import { configureStore } from "@reduxjs/toolkit";
import { AppReducer, UserInfoState } from "./reducer";

// Define the type for the store state
export type RootState = {
  AppReducer: UserInfoState;
};

const store = configureStore<RootState>({
  reducer: {
    AppReducer,
  },
});

export default store;
