import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
    currentCurrency: "RUB",
    exchangeRates: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems: (state, action) => {
            const findItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (findItem) {
                findItem.count = findItem.count + action.payload.count;
            } else {
                state.items.push(action.payload);
            }
            state.totalPrice = state.items.reduce((total, item) => {
                return item.price * item.count + total;
            }, 0);
            state.totalCount = state.items.reduce((total, item) => {
                return item.count + total;
            }, 0);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            state.totalCount = state.items.reduce((total, item) => {
                return item.count + total;
            }, 0);
            state.totalPrice = state.items.reduce((total, item) => {
                return item.price * item.count + total;
            }, 0);
        },
        changeCount: (state, action) => {
            const findItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            findItem.count = action.payload.newCount;
            state.totalCount = state.items.reduce((total, item) => {
                return item.count + total;
            }, 0);
            state.totalPrice = state.items.reduce((total, item) => {
                return item.price * item.count + total;
            }, 0);
        },
        setCurrentCurrency: (state, action) => {
            state.currentCurrency = action.payload;
        },
        addExchangeRates: (state, action) => {
            state.exchangeRates = action.payload;
        },
    },
});

export const {
    addItems,
    removeItem,
    changeCount,
    setCurrentCurrency,
    addExchangeRates,
} = cartSlice.actions;

export default cartSlice.reducer;
