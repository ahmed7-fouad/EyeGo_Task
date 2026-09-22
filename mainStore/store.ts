import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/login/loginSlice";
import cartsReducer from "../slices/cartsData/cartsSlice";
import usersReducer from "../slices/users/usersSlice";

export const store = configureStore({
  reducer: {
    login:loginReducer,
    carts:cartsReducer,
    users:usersReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;