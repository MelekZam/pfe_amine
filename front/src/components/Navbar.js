import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
    const dispatch = useDispatch();
    const openCart = () => {
        dispatch({ type: "open" });
    };
    const [quantity, setQuantity] = useState(0);
    const cartItems = useSelector((state) => state.cartItems);

    useEffect(() => {
        let nbrProducts = 0;
        cartItems.forEach(({ quantity }) => {
            nbrProducts += quantity;
        });
        setQuantity(nbrProducts);
    }, [cartItems]);

    return (
        <div className={styles.navbar}>
            <div>
                <Link style={{ textDecoration: "none" }} to="/">
                    <div className={styles.title}>E-commerce</div>
                </Link>
            </div>
            <div className={styles.cart} onClick={openCart}>
                <ShoppingCartOutlined fontSize="large" />
                <span className={styles["cart-circle"]}>{quantity}</span>
            </div>
        </div>
    );
};
