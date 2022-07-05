import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    orders: [],
    orderLoading: true,
    orderErr: false,

    voucherName: '',
    voucherAmount: 0,

    productData: [],
    productDataLoading: true,
    productDataErr: false,

    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null,

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

        loadProductData: (state, action) => {
            let productData = [];
            for (let key in action.payload) {
                productData.push({
                    ...action.payload[key],
                    id: key
                })
            }
            return {
                ...state,
                productData: productData,
                productDataLoading: false,
                productDataErr: false
            }
        },

        productDataFailed: (state) => {
            return {
                ...state,
                productDataErr: true,
                productDataLoading: false
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
        },
        authSuccess: (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                token: action.payload.idToken,
                userId: action.payload.localId,
            }

        },
        logout: (state) => {
            localStorage.clear();
            return {
                ...state,
                token: null,
                userId: null
            }

        },
        authLoading: (state, action) => {
            return {
                ...state,
                authLoading: action.payload
            }
        },
        authFailed: (state, action) => {
            return {
                ...state,
                authFailedMsg: action.payload
            }
        }

    }
});

//Fetched Orders through multiple dispatch
export const fetchOrders = (token, userId) => dispatch => {
    const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('https://grocersss-d8d44-default-rtdb.firebaseio.com/orders.json?auth=' + token + queryParams)
        .then(response => {
            dispatch(loadOrders(response.data));
        })
        .catch(err => {
            dispatch(orderLoadFailed());
        })
}

//Worked with SignUp and SignIn
export const auth = (email, password, mode) => dispatch => {
    dispatch(authLoading(true));
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }
    let authUrl = null;
    if (mode === "Sign Up") {
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    } else {
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }
    const API_KEY = "AIzaSyBEKE4bzhIpHK1TlEzwuDUx-LySltr0tBk";

    axios.post(authUrl + API_KEY, authData)
        .then(response => {
            dispatch(authLoading(false));
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationTime', expirationTime);
            dispatch(authSuccess(response.data))
        })
        .catch(err => {
            dispatch(authLoading(false));
            dispatch(authFailed(err.response.data.error.message));
        })
}


//To stay signed in within expiration time
export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logout());
    } else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess('token', userId));
        }
    }
}


export const { loadOrders, orderLoadFailed, addVoucher, resetVoucher, loadProductData, productDataFailed, authSuccess, logout, authLoading, authFailed } = grocersssSlice.actions;

export default grocersssSlice.reducer;