import React, { useState } from 'react';
import { Card, Badge, CardBody, Button, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Order = props => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const itemSummary = props.order.items.map(item => {
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
                        <div className='col-4 col-md-2'><span>Status: </span><Badge color="success" pill>Completed</Badge></div>
                    </CardTitle>
                    <CardText
                        className="mb-2"
                    >
                        <div>Date: {new Date(props.order.orderTime).toUTCString()}</div>

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
                                style={{ backgroundColor: '#d70f64', border: 'none', color: 'white' }}
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
                            Delivery Address:  {props.order.customer.deliveryAddress}
                        </div>

                        <div>
                            Payment Type: {props.order.customer.paymentType}
                        </div>

                        <div>
                            Date: {new Date(props.order.orderTime).toUTCString()}
                        </div>
                        <hr />
                        <div className='row'>
                            <div className="col-9 p-2" align='left'>
                                <h5 style={{ fontWeight: 'bold' }}>BDT {props.order.price}</h5>
                            </div>
                            <div className='col-3 text-end'>
                                <Button className='btn' color="secondary" size="small" onClick={toggleModal}
                                > Cancel </Button> </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>

        </div>
    )
};








/* <div style={{

                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                    borderRadius: '5px',
                    padding: '20px',
                    marginBottom: '20px',

                }}>
                    <p>Order ID: {props.order.id}</p>
                    <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
                    <p>Payment Type: {props.order.customer.paymentType}</p>
                    <hr />
                    <p>Total: BDT  {props.order.price} </p>
                    <hr />
                    <p>Date: {new Date(props.order.orderTime).toString()}</p>
                    <hr />
                    <p>Total Items: {props.order.totalItems}</p>
                    <hr />


                </div> */




/* <div className='container'>

            <div className='row'>
                <div className='col-10'>
                    <p>Order ID: {props.order.id}</p>
                </div>
                <div className='col-2'>
                    <p style={color:pink}>Completed</p>
                </div>
                <h1> </h1>
            </div>

            <div>

            </div>
            <div>

    </div>*/



export default Order;























