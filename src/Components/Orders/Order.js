import React from 'react';

const Order = props => {
    /* const itemSummary = props.orde.map(item => {
        return (
            <span style={{
                border: '1px solid grey',
                borderRadius: '5px',
                padding: '5px',
                marginRight: '10px'

            }} key={item.type} >
                {item.amount}x <span style={{ textTransform: 'capitalize' }}>{item.type}</span>
            </span>
        )
    })  */
    return (
        <div style={{
            border: '1px solid grey',
            boxShadow: '10px 10px 5px lightblue',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '10px'

        }}>
            {/* <p>Order Number: {props.order.id}</p>
            <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
            <hr />
            {itemSummary}
            <hr />
            <p>Total: BDT {props.order.price}</p> */}
            <h1>Kutu</h1>
        </div>
    );
};

export default Order;