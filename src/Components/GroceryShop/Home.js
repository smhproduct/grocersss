import React from "react";
import ItemCard from "./ItemCard";
import data from "./../../data";
import Top from './Top';
import { SnackbarProvider } from 'notistack';
const Home = () => {
    return (
        <div>
            <h1 className="text-center mt-3" style={{ fontFamily: 'sans-serif' }}>Order Now!!!</h1>
            <section className="container-fluid">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (
                            <div className="col-xl-2 col-md-3 col-sm-4 m-1">
                                <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                                    <ItemCard
                                        img={item.img}
                                        price={item.price}
                                        title={item.title}
                                        item={item}
                                        key={index}
                                    />
                                </SnackbarProvider>
                            </div>

                        );
                    })}
                </div>


                <Top />


            </section>

        </div>
    );
};
export default Home;
