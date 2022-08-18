import React, { useEffect } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { fetchRiderOrders } from '../../redux/grocersssSlice';
import RiderOrder from './RiderOrder';

const RiderOrders = () => {
    const data = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRiderOrders());
    }, [dispatch]);

    let orders = null;
    if (data.riderOrderErr) {
        orders = <p style={{
            border: '1px solid grey',
            boxShadow: '1px 1px #888888',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '10px',
            widht: '80%'

        }}>Sorry Failed to Load Orders</p>
    } else {
        if (data.riderOrders.length === 0) {
            orders = <p style={{
                border: '1px solid grey',
                boxShadow: '1px 1px #888888',
                borderRadius: '5px',
                padding: '20px',
                marginBottom: '10px'

            }}>You Have No Orders</p>

        } else {
            orders = data.riderOrders.slice(0).reverse().map(order => {
                return <RiderOrder order={order} key={order.id} />
            })
        }
    }
    document.title = "Orders | GROCERSSS";
    return (
        <div>
            {data.riderOrderLoading ? <Spinner /> : orders}
        </div>
    );
};

export default RiderOrders;