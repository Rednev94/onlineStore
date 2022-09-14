import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [],
    item: [],
    value: 0,
};

export const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.item = action.payload;
        },
        addCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const { addItems, addCategory } = itemSlice.actions;

export default itemSlice.reducer;
