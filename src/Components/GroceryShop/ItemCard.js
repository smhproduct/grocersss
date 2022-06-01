import React from "react";
import { useCart } from "react-use-cart";
import { Button } from "reactstrap";
import './ItemCard.css';

const ItemsCard = (props) => {
    const { addItem } = useCart();
    return (

        <div className="card mx-3 mb-5 shadow card" style={{ width: "18rem", borderRadius: '10%', padding: '20px' }}>
            <img className="card-img-top img-fluid" style={{ height: "200px", width: "300px" }} src={props.img} alt={props.title} />
            <div className="card-body text-center">
                <h6 className="card-title">{props.title}</h6>
                <h5 className="card-text">BDT {props.price}
                    <Button style={{ backgroundColor: '#D70F64', marginLeft: '15px' }}
                        className="btn btn-success"
                        onClick={() => addItem(props.item)}>
                        Add To Cart
                    </Button></h5>
            </div>
        </div>


    );
};

export default ItemsCard;
