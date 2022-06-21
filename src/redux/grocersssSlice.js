import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    orderLoading: true,
    orderErr: false,
    voucherName: '',
    voucherAmount: 0

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

        addVoucher: (state, action) => {
            console.log(action.payload.voucherAmount);
            return {
                ...state,
                voucherName: action.payload.voucher,
                voucherAmount: action.payload.voucherAmount,
            }

        },

        resetVoucher: (state) => {
            return {
                ...state,
                voucherName: '',
                voucherAmount: 0
            }
        }


    }
});

export const { loadOrders, orderLoadFailed, addVoucher, resetVoucher } = grocersssSlice.actions;

export default grocersssSlice.reducer;