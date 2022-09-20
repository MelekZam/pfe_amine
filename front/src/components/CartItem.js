import React from "react";
import styles from "../styles/CartItem.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";

const CartItem = ({ name, path, price, quantity, id }) => {
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch({ type: "remove_item", payload: id });
    };
    const decrementItem = () => {
        dispatch({ type: "decrement_item", payload: id });
    };
    const incrementItem = () => {
        dispatch({ type: "increment_item", payload: id });
    };

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img
                    className={styles.img}
                    src={`http://localhost:5000/${path}`}
                    alt="product"
                />
            </div>
            <div className={styles.details}>
                <div className={styles.itemHeader}>
                    <div className={styles.name}>{name}</div>
                    <div>
                        <IconButton color="primary">
                            <DeleteForeverIcon
                                fontSize="large"
                                color="error"
                                onClick={removeItem}
                            />
                        </IconButton>
                    </div>
                </div>
                <div className={styles.subtitle}>Details:</div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <span className={styles.price}>{price}$</span>
                <div className={styles.quantity}>
                    <span className={styles.span}>Quantity:</span>
                    <IconButton color="primary">
                        <RemoveCircleOutlineIcon
                            fontSize="large"
                            onClick={decrementItem}
                        />
                    </IconButton>
                    {quantity}
                    <IconButton color="primary">
                        <AddCircleOutlineIcon
                            fontSize="large"
                            onClick={incrementItem}
                        />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
