import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/login/loginSlice"
import cartsReducer from "../slices/cartsData/cartsSlice"
export const store = configureStore({
  reducer: {
    login:loginReducer,
    carts:cartsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;