import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

        fetchOrders: () => dispatch => {
            axios.get('https://grocersss-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json')
                .then(response => {
                    dispatch(loadOrders(response.data));
                })
                .catch(err => {
                    dispatch(orderLoadFailed());
                })
        }
    }
});

export const { loadOrders, orderLoadFailed, fetchOrders } = grocersssSlice.actions;

export default grocersssSlice.reducer;