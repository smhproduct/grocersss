import React from "react";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./GroceryShop/Home";
import Cart from "./GroceryShop/Cart";
import CartAdvanced from "./GroceryShop/CartAdvanced";
import { CartProvider } from "react-use-cart";
import { Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";


const Main = props => {
    return (
        <div>
            <CartProvider>
                <SnackbarProvider maxSnack={3} autoHideDuration={1000}>
                    <Header />
                    {/* <Header />*/}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cartadvanced' element={<CartAdvanced />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </SnackbarProvider>
            </CartProvider>


        </div>
    );
};

export default Main;