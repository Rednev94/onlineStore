import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
    "items/fetchItems",
    async (goodsType, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(
                `https://63109c8936e6a2a04ef2ddc9.mockapi.io/${goodsType}`
            );
            if (!response.statusText === "OK") {
                throw new Error("Server Error");
            }

            dispatch(addItems(response.data));
        } catch (error) {
            return rejectWithValue("Server Error");
        }
    }
);

export const fetchCategory = createAsyncThunk(
    "items/fetchCategory",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(
                "https://63109c8936e6a2a04ef2ddc9.mockapi.io/Category"
            );
            if (!response.statusText === "OK") {
                throw new Error("Server Error");
            }

            dispatch(addCategory(response.data));
        } catch (error) {
            return rejectWithValue("Server Error");
        }
    }
);

const initialState = {
    category: [],
    categoryStatus: null,
    items: [],
    itemsStatus: null,
    value: 0,
};

export const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.items = action.payload;
        },
        addCategory: (state, action) => {
            state.category = action.payload;
        },
    },
    extraReducers: {
        [fetchItems.pending]: (state) => {
            state.itemsStatus = "Loading";
        },
        [fetchItems.fulfilled]: (state) => {
            state.itemsStatus = "Fulfilled";
        },
        [fetchItems.rejected]: (state, action) => {
            state.itemsStatus = action.payload;
        },
        [fetchCategory.pending]: (state) => {
            state.categoryStatus = "Loading";
        },
        [fetchCategory.fulfilled]: (state) => {
            state.categoryStatus = "Fulfilled";
        },
        [fetchCategory.rejected]: (state, action) => {
            state.categoryStatus = action.payload;
        },
    },
});

export const { addItems, addCategory } = itemSlice.actions;

export default itemSlice.reducer;
