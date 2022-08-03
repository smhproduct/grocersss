import React, { useState } from 'react';
import { Card, Badge, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Button from '@mui/material/Button';

const Order = props => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const handleBadge = (status) => {
        if (status === "Pending") return "warning";
        else if (status === "Completed") return "success";
        else return "danger";

    }

    const itemSummary = props.order.items?.map(item => {
        return (
            <li style={{
                padding: '5px',
                marginLeft: '20px'
            }} key={item.id}>
                <div className='row' style={{ fontWeight: 'bold' }}>
                    <div className='col-8'>{item.title} ({item.quantity}) :</div>
                    <div className='col-4'>BDT {item.itemTotal}</div>
                </div>

            </li>
        )
    })
    return (
        <div className='container'>
            <Card className='shadow' style={{ borderRadius: '10px' }}>
                <CardBody>
                    <CardTitle className='row'>
                        <div className='col-8 col-md-10'><h5>Order Id: {props.order.id}</h5></div>
                        <div className='col-4 col-md-2'><span>Status: </span><Badge color={handleBadge(props.order.status)} pill>{props.order.status}</Badge></div>
                    </CardTitle>
                    <CardText
                        className="mb-1"
                    >
                        <div>Date: {new Date(props.order.orderTime).toString()}</div>

                        <div>Delivery Address: {props.order.customer.deliveryAddress}</div>


                        <div>Total Items: {props.order.totalItems}</div>
                        <div className='row'>
                            <div className='col-8 col-lg-10'>
                                Payment Type: {props.order.customer.paymentType}
                            </div>
                            <div className='col-4 col-lg-2' style={{ fontWeight: 'bold' }}><span style={{ fontSize: '20px' }}>BDT  {props.order.price}</span></div>
                        </div>

                        <div>
                            <Button
                                color="primary" variant="contained"
                                onClick={toggleModal}
                            >
                                Details
                            </Button>
                        </div>


                    </CardText>
                </CardBody>
            </Card>
            <br />

            <div>
                <Modal
                    size='lg' centered scrollable
                    isOpen={modal} toggle={toggleModal}

                >
                    <ModalHeader className='row'>
                        {/* Order Id:{props.order.id} */}
                        <div className='col'><h5>Order Id: {props.order.id}</h5></div>
                        <div className='col' style={{ fontSize: '15px' }}><span>Status: </span><Badge color="success" pill>Completed</Badge></div>
                    </ModalHeader>
                    <ModalBody>
                        <div className='row'>
                            <div className='col-12'>Purchased Items:</div>
                            <ul>{itemSummary}</ul>

                        </div>


                        <div>
                            Voucher: {props.order.voucherAmount}Tk ({props.order.voucherName})
                        </div>

                        <div>
                            Delivery Address:  {props.order.customer.deliveryAddress}
                        </div>

                        <div>
                            Payment Type: {props.order.customer.paymentType}
                        </div>

                        <div>
                            Date: {new Date(props.order.orderTime).toString()}
                        </div>
                        <hr />
                        <div className='row'>
                            <div className="col-9 p-2" align='left'>
                                <h5 style={{ fontWeight: 'bold' }}>BDT {props.order.price}</h5>
                            </div>
                            <div className='col-3 text-end'>
                                <Button color="secondary" variant='contained' size="small" onClick={toggleModal}
                                > Cancel </Button> </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>

        </div>
    )
};


export default Order;
