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


const Main = props => {
    return (
        <div>
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


        </div>
    );
};

export default Main;