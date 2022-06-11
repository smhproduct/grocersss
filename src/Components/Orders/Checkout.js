import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';
import { Table } from 'reactstrap';
import { useCart } from "react-use-cart";
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { Formik } from 'formik';

const Checkout = () => {

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

    const [state, setState] = useState({
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery"
        },
        isLoading: false,
        isModalOpen: false,
        modalMsg: '',
        disablePlaceOrder: true

    });
    const isLoading = state.isLoading;
    const isModalOpen = state.isModalOpen;
    const modalMsg = state.modalMsg;
    const disablePlaceOrder = state.disablePlaceOrder;

    const submitHandler = (values) => {
        setState(prevState => {
            return {
                ...prevState,
                isLoading: true,
            }
        })

        const order = {
            items: items,
            totalItems: totalItems,
            customer: values,
            price: parseFloat(cartTotal + 50 + cartTotal * 0.15).toFixed(2),
            orderTime: new Date()
        }
        console.log(order);

        axios.post("https://grocersss-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json", order)
            .then(response => {
                if (response.status === 200) {
                    setState(prevState => {
                        return {
                            ...prevState,
                            isLoading: false,
                            isModalOpen: true,
                            modalMsg: "Order Placed Successfully!",
                        }
                    })
                    emptyCart();
                } else {
                    setState(prevState => {
                        return {
                            ...prevState,
                            isLoading: false,
                            isModalOpen: true,
                            modalMsg: "Something Went Wrong! Order Again",
                        }
                    })
                }
            })
            .catch(err => {
                setState(prevState => {
                    return {
                        ...prevState,
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Something Went Wrong! Order Again",
                    }
                })
            })
    }

    let form = (
        <div className='container'>
            <h4 style={
                {
                    border: '1px solid grey',
                    boxShadow: '1px 1px #888888',
                    borderRadius: '5px',
                    padding: '20px',
                }
            }>Payment: BDT {cartTotal}</h4>
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
            </Table><br />

            <h4 style={
                {
                    border: '1px solid grey',
                    boxShadow: '1px 1px #888888',
                    borderRadius: '5px',
                    padding: '20px',
                }
            }>Your Information: </h4>
            <Formik
                initialValues={{
                    deliveryAddress: "",
                    phone: "",
                    paymentType: "Cash On Delivery",
                }}
                validate={values => {
                    const errors = {};
                    if (!values.deliveryAddress) {
                        errors.deliveryAddress = 'Required';
                        setState({
                            disablePlaceOrder: true
                        });
                        return errors;
                    }
                    if (!values.phone) {
                        errors.phone = 'Required';
                        setState({
                            disablePlaceOrder: true
                        });
                        return errors;

                    } else if (!/^(\+)?(88)?01[0-9]{9}$/i.test(values.phone)) {
                        errors.phone = "Invalid Phone Number";
                        setState({
                            disablePlaceOrder: true
                        });
                        return errors;
                    } else setState({ disablePlaceOrder: false })
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                    submitHandler(values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,

                }) => (
                    <form style={
                        {
                            border: '1px solid grey',
                            boxShadow: '1px 1px #888888',
                            borderRadius: '5px',
                            padding: '20px',
                        }
                    } onSubmit={handleSubmit}>
                        <textarea
                            name='deliveryAddress'
                            id="deliveryAddress"
                            className="form-control"
                            value={values.deliveryAddress}
                            placeholder='Your address'
                            onChange={handleChange} >
                        </textarea>
                        <span style={{ color: 'red' }}>{errors.deliveryAddress}</span><br />
                        <input name="phone" id='phone' className='form-control' value={values.phone} placeholder='Your Phone Number' onChange={handleChange} onBlur={handleBlur} />
                        <span style={{ color: 'red' }}>{errors.phone}</span>
                        <br />
                        <select name='paymentType' id='paymentType' className='form-control' value={values.paymentType} onBlur={handleBlur} onChange={handleChange} >
                            <option value="Cash On Delivery">Cash On Delivery</option>
                            <option value="Bkash">Bkash</option>
                        </select>
                        <br />
                        <Button type='submit' style={{ backgroundColor: '#d70f64' }} className="mr-auto" disabled={disablePlaceOrder}  >Place Order</Button>
                        <Link to={'/'}>
                            <Button color='secondary' className='mx-1'>Cancel</Button>
                        </Link>

                    </form>)}
            </Formik>
        </div>
    )
    return (
        <div style={{ marginTop: '100px' }}>
            {isLoading ? <Spinner /> : form}

            <Modal isOpen={isModalOpen}>
                <Link to={'/'}>
                    <ModalBody><p>{modalMsg}</p></ModalBody>
                </Link>
            </Modal>
        </div>
    );
};

export default Checkout;