import { Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const isOpen = useSelector((state) => state.cartIsOpen);
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        let nbrProducts = 0;
        let totalPrice = 0;
        cartItems.forEach(({ quantity, price }) => {
            nbrProducts += quantity;
            totalPrice += price * quantity;
        });
        setQuantity(nbrProducts);
        setTotal(totalPrice);
    }, [cartItems]);

    const closeDrawer = () => {
        dispatch({ type: "close" });
    };

    return (
        <Drawer
            open={isOpen}
            direction="right"
            style={{
                width: "30vw",
                height: "100vh",
                display: "flex",
                "flex-direction": "column",
                justifyContent: "space-between",
            }}
        >
            <div className={styles.header}>
                <IconButton onClick={closeDrawer} color="primary">
                    <ArrowBackIcon fontSize="small" />
                </IconButton>
                <span>Your Cart&nbsp;&nbsp;&nbsp;</span>
                <span style={{ color: "red" }}>({quantity} items)</span>
            </div>
            <div className={styles.list}>
                {cartItems.map(
                    ({ name, path, price, quantity, _id }, index) => {
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
                    }
                )}
            </div>
            <div
                style={{
                    marginTop: "15px",
                    padding: "5px",
                    minHeight: "5%",
                }}
            >
                <Button fullWidth variant="contained">
                    Check Out Total {total}$
                </Button>
            </div>
        </Drawer>
    );
};

export default Cart;
