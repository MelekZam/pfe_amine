import Product from "../components/Product";
import styles from "../styles/App.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [products, setPorducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:5000/best-seller-products"
            );
            setPorducts(data.products);
        } catch (error) {}
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="App">
            <div className={styles.container}>
                <div className={styles.banner}>
                    <div className="btn-div">
                        <Link
                            to="/products"
                            className={`${styles.bouncy} ${styles.button1}`}
                        >
                            Start Shopping Now
                        </Link>
                    </div>
                </div>
                <div className={styles.title}>Best Seller Products</div>
                <div className={styles.grid}>
                    {products.map(({ name, price, path, _id }, index) => {
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
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
