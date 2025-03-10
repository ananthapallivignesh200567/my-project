import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cart/cartSlice"
import authApi from './features/auth/authapi'
import authReducer from "./features/auth/authSlice"
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})