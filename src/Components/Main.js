import React from "react";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./GroceryShop/Home";
import Cart from "./GroceryShop/Cart";
import { CartProvider } from "react-use-cart";
import { Route, Routes } from "react-router-dom";


const Main = props => {
    return (
        <div>
            <CartProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>

            </CartProvider>


        </div>
    );
};

export default Main;