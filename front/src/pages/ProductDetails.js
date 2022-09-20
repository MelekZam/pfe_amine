import React, { useEffect, useMemo, useState } from "react";
import styles from "../styles/ProductDetails.module.css";
import Rating from "@mui/material/Rating";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, IconButton } from "@mui/material";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
    const [product, setProduct] = useState({
        name: "",
        path: "",
        price: null,
        rating: null,
    });
    const { id } = useParams();
    const [quantity, setQuantity] = useState(0);
    const [similarProducts, setSimilarProducts] = useState([]);
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);

    const fetchProduct = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:5000/product/${id}`
            );
            setProduct(data.product);
            setSimilarProducts(data.similarProducts);
        } catch (error) {
            console.log(error);
        }
    };

    const addProduct = () => {
        if (!quantity) return;
        dispatch({ type: "add_item", payload: { ...product, quantity, id } });
        setDisabled(false);
        setQuantity(0);
    };

    const openCart = () => {
        dispatch({ type: "open" });
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        <div className={styles.main}>
            <div className={styles["product-container"]}>
                <div className={styles.img}>
                    <img
                        className={styles.img}
                        src={`http://localhost:5000/${product.path}`}
                        alt="product"
                        height="auto"
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.name}>{product.name}</div>
                    <div className={styles.rating}>
                        <Rating
                            name="read-only"
                            value={product.rating}
                            readOnly
                        />
                    </div>
                    <div className={styles.subtitle}>Details:</div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className={styles.price}>{product.price}$</div>
                    <div>
                        <span className={styles.span}>Quantity:</span>
                        <IconButton color="primary">
                            <RemoveCircleOutlineIcon
                                fontSize="large"
                                onClick={() => {
                                    if (quantity)
                                        setQuantity(
                                            (prevState) => prevState - 1
                                        );
                                }}
                            />
                        </IconButton>
                        {quantity}
                        <IconButton color="primary">
                            <AddCircleOutlineIcon
                                fontSize="large"
                                onClick={() => {
                                    setQuantity((prevState) => prevState + 1);
                                }}
                            />
                        </IconButton>
                    </div>
                    <div className="">
                        <Button variant="outlined" onClick={addProduct}>
                            Add To Cart
                        </Button>
                        <Button
                            style={{ marginLeft: 15 }}
                            variant="contained"
                            disabled={disabled}
                            onClick={openCart}
                        >
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles.other}>
                <div className={styles.title}>Similar Products</div>
                <div className={styles.list}>
                    {similarProducts.map(
                        ({ name, path, price, _id }, index) => {
                            return (
                                <div key={index}>
                                    <Product
                                        name={name}
                                        price={price}
                                        path={path}
                                        id={_id}
                                    />
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
