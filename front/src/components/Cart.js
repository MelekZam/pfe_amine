import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const [quantity, setQuantity] = useState(0);
    const isOpen = useSelector((state) => state.cartIsOpen);
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        let nbrProducts = 0;
        cartItems.forEach(({ quantity }) => {
            nbrProducts += quantity;
        });
        setQuantity(nbrProducts);
    }, [cartItems]);

    const closeDrawer = () => {
        dispatch({ type: "close" });
    };

    return (
        <Drawer open={isOpen} direction="right" style={{ width: "30vw" }}>
            <div className={styles.header}>
                <IconButton onClick={closeDrawer} color="primary">
                    <ArrowBackIcon fontSize="small" />
                </IconButton>
                <span>Your Cart&nbsp;&nbsp;&nbsp;</span>
                <span style={{ color: "red" }}>({quantity} items)</span>
            </div>
            {cartItems.map(({ name, path, price, quantity, _id }, index) => {
                return (
                    <div style={{ margin: "10px" }} key={index}>
                        <CartItem
                            name={name}
                            path={path}
                            price={price}
                            id={_id}
                            quantity={quantity}
                        />
                    </div>
                );
            })}
        </Drawer>
    );
};

export default Cart;
