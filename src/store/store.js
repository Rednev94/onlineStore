import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import itemSlice from "./itemSlice";

export const store = configureStore({
    reducer: {
        item: itemSlice,
        cart: cartSlice,
    },
});
