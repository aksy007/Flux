import { configureStore } from "@reduxjs/toolkit";
import { AppReducer, UserState } from "./reducer";

// Define the type for the store state
export type RootState = {
  AppReducer: UserState;
};

const store = configureStore<RootState>({
  reducer: {
    AppReducer,
  },
});

export default store;
