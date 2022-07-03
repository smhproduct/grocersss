import React from "react";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./GroceryShop/Home";
import Cart from "./GroceryShop/Cart";
import CartAdvanced from "./GroceryShop/CartAdvanced";
import { CartProvider } from "react-use-cart";
import { Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Checkout from "./Orders/Checkout";
import Orders from "./Orders/Orders";
import { fetchOrders } from "./Orders/Orders";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Main = () => {
    let theme = createTheme({
        palette: {
            primary: {
                main: '#d70f64',
            },
        },
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CartProvider>
                    <SnackbarProvider maxSnack={3} autoHideDuration={1000}>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/cartadvanced' element={<CartAdvanced />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/orders" element={<Orders />} />
                        </Routes>
                    </SnackbarProvider>
                </CartProvider>
            </ThemeProvider>

        </div>
    );
};

export default Main;