import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    const buy = () => {
        alert("No Connection!");
    };
    if (isEmpty) return <h1 className="text-center"> Your cart is empty </h1>;
    return (
        <section className="container">
            <div className="row jistufy-content-center">
                <div className="col-12">
                    <h5>
                        {" "}
                        Cart ({totalUniqueItems}) Total Item :({totalItems})
                    </h5>
                    <table className="table table-light m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: "6rem" }} alt={item.title} />
                                        </td>

                                        <td>{item.title}</td>

                                        <td>Price: BDT {item.price}</td>

                                        <td>Quantity({item.quantity})</td>

                                        <td>
                                            <button
                                                onClick={() =>
                                                    updateItemQuantity(item.id, item.quantity - 1)
                                                }
                                                className="btn btn-secondary ms-2"
                                            >
                                                {" "}
                                                -{" "}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    updateItemQuantity(item.id, item.quantity + 1)
                                                }
                                                className="btn btn-secondary ms-2"
                                            >
                                                {" "}
                                                +{" "}
                                            </button>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="btn ms-2"
                                                style={{ backgroundColor: "#D70F64", color: "white" }}
                                            >
                                                {" "}
                                                RemoveItem{" "}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <br />
                    <div className="col-auto ms-auto">
                        <h3> Total Price: BDT {cartTotal} </h3>
                    </div>
                    <br />
                </div>
                <div className="col-auto mb-2">
                    <button onClick={() => emptyCart()} className="btn btn-secondary">
                        Clear Cart
                    </button>
                    <button onClick={buy} style={{ backgroundColor: "#D70F64", color: "white" }} className="btn ms-2">
                        Buy Now{" "}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
