import React from "react";
import ItemCard from "./ItemCard";
import data from "./../../data";

const Home = () => {
    return (
        <div>
            <h1 className="text-center mt-3" style={{ fontFamily: 'sans-serif' }}>Order Now!!!</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (
                            <ItemCard
                                img={item.img}
                                price={item.price}
                                title={item.title}
                                item={item}
                                key={index}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
export default Home;
