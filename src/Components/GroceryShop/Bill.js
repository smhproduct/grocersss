import React from 'react';
import { Table } from 'reactstrap';
import { useCart } from "react-use-cart";

const Bill = () => {
    const {
        cartTotal
    } = useCart();

    const buy = () => {
        alert("No Connection!");
    };
    return (
        <div>
            <div>
                <h5 style={{ textAlign: 'center', padding: '20px 20px 15px 20px' }}>Your Bill at GROCERSSS</h5>
            </div>
            <hr />
            <div>
                <Table borderless>



                    <tr>

                        <td>
                            <h6>Subtotal</h6>
                        </td>
                        <td allign="right">
                            <h6>Tk {cartTotal} </h6>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <h6>VAT</h6>
                        </td>
                        <td allign="right">
                            <h6>Tk {parseFloat(cartTotal * 0.15).toFixed(2)} </h6>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <h6>Delivery Charge</h6>
                        </td>
                        <td allign="right">
                            <h6>Tk 50 </h6>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <h6>Voucher</h6>
                        </td>
                        <td allign="right">
                            <h6>Tk0 </h6>
                        </td>
                    </tr>
                    <tr style={{ borderTop: '1px solid grey' }}>

                        <td>
                            <h6>Total(incl. VAT)</h6>
                        </td>
                        <td allign="right">
                            <h6>Tk {parseFloat(cartTotal + 50 + cartTotal * 0.15).toFixed(2)} </h6>
                        </td>
                    </tr>

                </Table>
            </div>
            <div>
                <button onClick={buy} style={{ backgroundColor: "#D70F64", color: "white" }} className="btn ms-2">
                    Continue to Checkout{" "}
                </button>
            </div>
        </div>
    );
};

export default Bill;