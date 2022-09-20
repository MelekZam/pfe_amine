import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Product.module.css";

const Product = ({ name, price, path, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className={styles.container}
            onClick={() => {
                navigate(`/products/${id}`, 0);
            }}
        >
            <img
                className={styles.img}
                src={
                    path ? `http://localhost:5000/${path}` : "/placeholder.png"
                }
                alt={name}
                height="auto"
            />
            <div className={styles.text}>
                <text style={{ marginBottom: "5px", display: "block" }}>
                    {name}
                </text>
                <text className={styles.price}>{price}$</text>
            </div>
        </div>
    );
};

export default Product;
