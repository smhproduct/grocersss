import React from "react";
import { useCart } from "react-use-cart";
import './ItemCard.css';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useSnackbar } from "notistack";



const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    const buy = () => {
        alert("No Connection!");
    };

    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = (variant) => {
        switch (variant) {
            case 'success':
                enqueueSnackbar('Item Added Successfully!', { variant });
                break;
            case 'error':
                enqueueSnackbar('Item Removed Completely!', { variant });
                break;
            case 'secondary':
                enqueueSnackbar('Item Removed Successfully!', { variant });
                break;
            default:
                return;
        }

    };
    if (isEmpty) return <h1 className="text-center"> Your cart is empty </h1>;
    return (
        <section className="container-md container-xs-fluid">
            <div className="row jistufy-content-center">
                <div className="col-12">
                    <h5>
                        {" "}
                        Cart ({totalUniqueItems}) Total Item :({totalItems})
                    </h5>
                    <table className="table table-light m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img className="card" src={item.img} style={{ height: "6rem" }} alt={item.title} />
                                        </td>

                                        <td style={{ fontWeight: 'bold' }}>{item.title}</td>

                                        <td style={{ fontWeight: 'bold' }}>Price: BDT {item.price * item.quantity}</td>

                                        <td style={{ fontWeight: 'bold' }}> (x{item.quantity})</td>

                                        <td>
                                            <ButtonGroup>

                                                <Button
                                                    aria-label="increase" color="success" onClick={() => { updateItemQuantity(item.id, item.quantity + 1); handleClickVariant('success'); }}


                                                >
                                                    <AddIcon fontSize="small" />
                                                </Button>
                                                <Button
                                                    aria-label="reduce" color="error" onClick={() => { updateItemQuantity(item.id, item.quantity - 1); handleClickVariant('secondary'); }}


                                                >
                                                    <RemoveIcon fontSize="small" />
                                                </Button>
                                                <Button onClick={() => { removeItem(item.id); handleClickVariant('error'); }} style={{ backgroundColor: "#D70F64", color: "white", }} variant="conatined">
                                                    <DeleteIcon />

                                                </Button>
                                            </ButtonGroup>


                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <br />

                    <br />
                </div>
                <div className="col-auto mb-2">
                    <button onClick={() => { handleClickVariant('error'); emptyCart() }} className="btn btn-secondary">
                        Clear Cart
                    </button>
                </div>
            </div>
        </section >
    );
};

export default Cart;
