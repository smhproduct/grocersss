import React, { useEffect } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import Order from './Order';
import { fetchOrders } from '../../redux/grocersssSlice';

const Orders = () => {
    const data = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);


    let orders = null;
    if (data.orderErr) {
        orders = <p style={{
            border: '1px solid grey',
            boxShadow: '1px 1px #888888',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '10px',
            widht: '80%'

        }}>Sorry Failed to Load Orders</p>
    } else {
        if (data.orders.length === 0) {
            orders = <p style={{
                border: '1px solid grey',
                boxShadow: '1px 1px #888888',
                borderRadius: '5px',
                padding: '20px',
                marginBottom: '10px'

            }}>You Have No Orders</p>

        } else {
            orders = data.orders.slice(0).reverse().map(order => {
                return <Order order={order} key={order.id} />
            })
        }
    }
    document.title = "Orders | GROCERSSS";
    return (
        <div style={{ marginTop: '90px' }}>
            {data.orderLoading ? <Spinner /> : orders}
        </div>
    );
};

export default Orders;
