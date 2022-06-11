import React, { useState } from "react";
import { useCart } from "react-use-cart";
import './ItemCard.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSnackbar } from 'notistack';
import { ModalBody, Modal, Button } from "reactstrap";

const ItemCard = (props) => {

    const { enqueueSnackbar } = useSnackbar();
    const addItemHandler = (props) => {
        handleClickVariant('success');
        addItem(props.item);

    }
    const { addItem } = useCart();


    const handleClickVariant = (variant) => {
        enqueueSnackbar(props.title + ' Added To Cart!', { variant });
    };

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    return (
        <div>
            <div className="card mb-3 shadow" style={{ width: "100%", height: '280px', borderRadius: '10%', padding: '10px', cursor: 'pointer' }}>
                <img onClick={toggleModal} className="card-img-top img-fluid" style={{ height: "50%" }} src={props.img} alt={props.title} />
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
            <Modal
                isOpen={modal} toggle={toggleModal} size='lg' centered scrollable
            >

                <ModalBody>
                    <div className="row container my-2 justify-content-center">
                        <div className="col" style={{ alignItems: 'center' }} width='50%' height="100%">
                            <img src={props.img} alt={props.title} width='100%' height='250px' style={{ paddingLeft: '15%', paddingTop: '15%' }} />
                        </div>
                        <div className="col align-middle" width='50%' style={{ textAlign: 'center', paddingTop: '15%' }}>
                            <h3>{props.title}</h3>
                            <h2>Tk. {props.price}</h2>
                            <Button className="btn"
                                color="danger" size="small"
                                outline
                                onClick={() => addItemHandler(props)}
                            >
                                Add To Cart
                            </Button>
                            {' '}
                            <Button className="btn" color="secondary" size="small" outline onClick={toggleModal}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                    <br /><br />
                    <hr />
                    <div className="p-4" align='left'>
                        <h5>Product Description:</h5>
                        <p>{props.desc}</p>
                    </div>
                </ModalBody>

            </Modal>

        </div>



    );
};

export default ItemCard;
