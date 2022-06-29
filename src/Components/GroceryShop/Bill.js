import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import { ModalBody, Modal, Button } from "reactstrap";
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addVoucher, resetVoucher } from '../../redux/grocersssSlice';

const Bill = () => {
    const {
        cartTotal
    } = useCart();

    const data = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch();


    const [voucher, setVoucher] = useState("");
    const [error, setError] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const handleVoucherSubmit = (e) => {
        e.preventDefault();
        console.log(voucher);
        if (voucher !== "HAPPY50") {
            setError(true)
            setErrMsg("Invalid Voucher!")
        } else {
            if (cartTotal < 200) {
                setError(true)
                setErrMsg("Minimum order amount (Tk 200) not reached!")
            } else {
                dispatch(addVoucher({ voucher, voucherAmount: 50 }))
                setError(false);
                toggleModal();
            }

        }
    }

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);


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
                            <td align="right">
                                <h6>Tk {cartTotal} </h6>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <h6>VAT</h6>
                            </td>
                            <td align="right">
                                <h6>Tk {parseFloat(cartTotal * 0.15).toFixed(2)} </h6>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <h6>Delivery Charge</h6>
                            </td>
                            <td align="right">
                                <h6>Tk 50 </h6>
                            </td>
                        </tr>
                        <tr style={{ color: '#d70f64' }}>

                            <td>
                                <h6>Voucher</h6>
                            </td>
                            <td align="right">
                                <h6>(Tk {data.voucherAmount}) {data.voucherName} </h6>
                                {data.voucherAmount !== 0 ? <span style={{ cursor: 'pointer' }} onClick={() => dispatch(resetVoucher())}>Remove</span> : ""}
                            </td>
                        </tr>
                        <tr style={{ borderTop: '1px solid grey' }}>

                            <td>
                                <h6>Total(incl. VAT)</h6>
                            </td>
                            <td align="right">
                                <h6>Tk {parseFloat(cartTotal + 50 + cartTotal * 0.15 - data.voucherAmount).toFixed(2)} </h6>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <p style={{ color: "#D70F64", cursor: 'pointer' }} onClick={toggleModal} >
                    Do you want to use voucher?
                </p>
            </div>
            <br />

            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalBody>

                    <form style={
                        {
                            borderRadius: '5px',
                            padding: '20px',
                            marginTop: '-40px'
                        }
                    } onSubmit={handleVoucherSubmit}>

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <TextField name="voucher" id="voucher" margin='normal' className="form-control" label="Use Voucher" variant="standard" onChange={e => setVoucher(e.target.value)} />
                        </Box>

                        {error ? <label style={{ color: 'red' }}>{errMsg}</label> : ""}
                        <br />

                        <Button style={{ backgroundColor: '#d70f64' }} className="mr-auto" >Apply Voucher</Button>

                        <Button color='secondary' className='mx-1' onClick={toggleModal}>Cancel</Button>


                    </form>
                </ModalBody>
            </Modal>

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