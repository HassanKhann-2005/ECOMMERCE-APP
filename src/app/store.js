import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth/authSlice";
import productReducer from "./features/auth/products/productSlice";

export const store = configureStore({
    reducer:{
        app:auth,
        products:productReducer
    }
})
export default store;