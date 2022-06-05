import React from "react";
import { useCart } from "react-use-cart";
import './ItemCard.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSnackbar } from 'notistack';

const ItemCard = (props) => {

    const { enqueueSnackbar } = useSnackbar();
    const addItemHandler = (props) => {
        handleClickVariant('success');
        addItem(props.item);

    }
    const { addItem } = useCart();


    const handleClickVariant = (variant) => {
        enqueueSnackbar('Item Added Successfully!', { variant });
    };
    return (

        <div className="card mb-3 shadow" style={{ width: "110%", height: '280px', borderRadius: '10%', padding: '10px' }}>
            <img className="card-img-top img-fluid" style={{ height: "45%" }} src={props.img} alt={props.title} />
            <div className="card-body text-center">
                <div style={{}} className="card-title">{props.title}</div>
            </div>
            <div style={{ overflow: 'hidden' }} className="card-footer row">
                <p style={{ fontSize: 'medium', paddingTop: '5px', fontWeight: 'bold' }} className="card-text col">BDT {props.price}
                    <IconButton style={{ float: 'right', marginTop: '-8px' }} color="primary" aria-label="add to shopping cart" onClick={() => addItemHandler(props)}>
                        <AddShoppingCartIcon style={{ color: "#D70F64" }} />
                    </IconButton>
                </p>

            </div>
        </div >


    );
};

export default ItemCard;
