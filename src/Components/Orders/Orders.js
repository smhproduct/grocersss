import React, { useEffect } from 'react';
import { useSelector, useDispatch, } from 'react-redux';

import { loadOrders, orderLoadFailed } from '../../redux/grocersssSlice'
import Spinner from '../Spinner/Spinner';
import Order from './Order';
import axios from 'axios';


export const fetchOrders = () => dispatch => {
    axios.get('https://grocersss-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json')
        .then(response => {
            dispatch(loadOrders(response.data));
        })
        .catch(err => {
            dispatch(orderLoadFailed());
        })
}

const Orders = () => {
    const data = useSelector((state) => {
        return state
    })
    /* const orderErr = useSelector((state) => {
        return state.orderErr
    })
    const orderLoading = useSelector((state) => {
        return state.orderLoading
    }) */

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders())
    }

    )
    let orders = null;
    if (data.orderErr) {
        orders = <p style={{
            border: '1px solid grey',
            boxShadow: '1px 1px #888888',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '10px'

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
            orders = data.orders.map(order => {
                return <Order order={order} key={order.id} />
            })
        }
    }
    return (
        <div>
            {data.orderLoading ? <Spinner /> : orders}
        </div>
    );
};

export default Orders;
