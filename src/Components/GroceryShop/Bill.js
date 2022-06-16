import React from 'react';
import { Table } from 'reactstrap';
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';

const Bill = () => {
    const {
        cartTotal
    } = useCart();

    /*const buy = () => {
        alert("No Connection!");
    };*/
    return (
        <div className='container-fluid'>
            <div>
                <h5 style={{ textAlign: 'center', padding: '20px 20px 15px 20px' }}>Your Bill at GROCERSSS</h5>
            </div>
            <hr />
            <div>
                <Table borderless>
                    <tbody>
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
                    </tbody>
                </Table>
            </div>
            <div>
                <Link to={'/checkout'}>
                    <button style={{ backgroundColor: "#D70F64", color: "white" }} className="btn ms-2">
                        Continue to Checkout{" "}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Bill;