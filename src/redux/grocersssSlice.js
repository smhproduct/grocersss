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

    appUser: null,
    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null,

    userData: null,

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

        appUserSuccess: (state, action) => {
            return {
                ...state,
                appUser: action.payload
            }
        },
        authSuccess: (state, action) => {
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
                userId: null,
                appUser: null,
                userData: null
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
        },
        userDataRedux: (state, action) => {
            return {
                ...state,
                userData: action.payload
            }
        }

    }
});

//Fetched ProductData through multiple dispatch
export const fetchProductData = () => dispatch => {

    axios.get('https://grocersss-d8d44-default-rtdb.firebaseio.com/productData.json')
        .then(response => {
            dispatch(loadProductData(response.data));
        })
        .catch(err => {
            dispatch(productDataFailed());
        })
}

//Fetched Orders through multiple dispatch
export const fetchOrders = () => dispatch => {
    const queryParams = '&orderBy="userId"&equalTo="' + localStorage.getItem('userId') + '"';
    axios.get('https://grocersss-d8d44-default-rtdb.firebaseio.com/orders.json?auth=' + localStorage.getItem('token') + queryParams)
        .then(response => {
            console.log(response.data);
            dispatch(loadOrders(response.data));
        })
        .catch(err => {
            dispatch(orderLoadFailed());
        })
}

//Worked with SignUp and SignIn, added data to both authentication and database, also received username foravatar
export const auth = (email, password, fname, lname, mode, appUser) => dispatch => {
    dispatch(authLoading(true));
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }
    console.log(appUser);
    let authUrl = null;
    if (mode === "Sign Up" || mode === "Rider Sign Up") {
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    } else {
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }
    const API_KEY = "AIzaSyBEKE4bzhIpHK1TlEzwuDUx-LySltr0tBk";

    axios.post(authUrl + API_KEY, authData)
        .then(response => {
            dispatch(authLoading(false));
            dispatch(appUserSuccess(appUser));
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            localStorage.setItem('appUser', appUser);
            const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationTime', expirationTime);
            if (mode === "Sign Up" || mode === "Rider Sign Up") {
                let userData = {
                    userId: response.data.localId,
                    fname: fname,
                    lname: lname,
                    email: email,
                    registered: new Date()
                }
                mode === "Sign Up" ? axios.post("https://grocersss-d8d44-default-rtdb.firebaseio.com/userData.json", userData) : axios.post("https://grocersss-d8d44-default-rtdb.firebaseio.com/riderData.json", userData)

                axios.post("https://grocersss-d8d44-default-rtdb.firebaseio.com/userData.json", userData)
            }


            const queryParams = '&orderBy="userId"&equalTo="' + localStorage.getItem('userId') + '"';
            if (appUser === "User") {
                axios.get('https://grocersss-d8d44-default-rtdb.firebaseio.com/userData.json?auth=' + localStorage.getItem('token') + queryParams)
                    .then(res => {
                        for (let key in res.data) {
                            console.log(res.data[key]);
                            dispatch(userDataRedux(res.data[key]));
                        }
                    })
            } /*else if (appUser === "Admin") {
                axios.get('https://grocersss-d8d44-default-rtdb.firebaseio.com/adminData.json?auth=' + localStorage.getItem('token') + queryParams)
                    .then(res => {
                        for (let key in res.data) {
                            console.log(res.data[key]);
                            console.log('eta admin');
                            dispatch(userDataRedux(res.data[key]));
                        }
                    })
            } */else {
                axios.get('https://grocersss-d8d44-default-rtdb.firebaseio.com/riderData.json?auth=' + localStorage.getItem('token') + queryParams)
                    .then(res => {
                        for (let key in res.data) {
                            console.log(res.data[key]);
                            console.log('eta rider');
                            dispatch(userDataRedux(res.data[key]));
                        }
                    })
            }

            dispatch(authSuccess(response.data));
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


export const { loadOrders, orderLoadFailed, addVoucher, resetVoucher, loadProductData, productDataFailed, appUserSuccess, authSuccess, logout, authLoading, authFailed, userDataRedux } = grocersssSlice.actions;

export default grocersssSlice.reducer;