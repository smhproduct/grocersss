import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    orderLoading: true,
    orderErr: false
}

export const grocersssSlice = createSlice({
    name: 'grocersss',
    initialState,
    reducers: {
        loadOrders: (state, action) => {
            let orders = [];
            for (let key in action.payload) {
                orders.push({
                    ...action.payload[key],
                    id: key
                })
            }
            return {
                ...state,
                orders: orders,
                orderLoading: false,
                orderErr: false
            }
        },

        orderLoadFailed: (state) => {
            return {
                ...state,
                orderErr: true,
                orderLoading: false
            }
        },


    }
});

export const { loadOrders, orderLoadFailed } = grocersssSlice.actions;

export default grocersssSlice.reducer;