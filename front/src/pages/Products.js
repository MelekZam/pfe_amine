import {
    Button,
    FormControl,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
    Slider,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import styles from "../styles/Products.module.css";
import axios from "axios";

function valuetext(value) {
    return `${value} CAD`;
}

const minDistance = 10;
const marks = [
    {
        value: 0,
        label: "0 CAD",
    },
    {
        value: 10000,
        label: "10000 CAD",
    },
];

const Products = () => {
    const [disabled, setDisabled] = useState(true);
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState([0, 10000]);
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
        }
        setDisabled(false);
    };

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:5000/products?min=${price[0]}&max=${price[1]}&category=${category}`
            );
            setCategories(data.categories);
            setProductList(data.products);
            setDisabled(true);
        } catch (error) {}
    };

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        console.log(productList);
    }, [productList]);

    return (
        <div className={styles.main}>
            <div className={styles["filters-container"]}>
                <div className={styles.filters}>
                    <div className={styles.filter}>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">
                                Categories
                            </InputLabel>
                            <Select
                                labelId="select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Categories"
                                onChange={({ target }) => {
                                    setCategory(target.value);
                                    setDisabled(false);
                                }}
                            >
                                {categories.map((el, index) => {
                                    return (
                                        <MenuItem value={el} key={index}>
                                            {el}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={styles.filter}>
                        <FormControl fullWidth>
                            <FormLabel id="sldier-label">Price</FormLabel>
                            <Slider
                                getAriaLabel={() => "Minimum distance"}
                                value={price}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                                min={0}
                                max={10000}
                                marks={marks}
                            />
                        </FormControl>
                    </div>
                    <div className={styles.filter}>
                        <FormControl fullWidth>
                            <Button
                                disabled={disabled}
                                variant="contained"
                                onClick={fetchProducts}
                            >
                                Apply Filters
                            </Button>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className={styles["products-container"]}>
                <div className={styles["search-div"]}>
                    <div className={styles.textfield}>
                        <TextField
                            value={searchTerm}
                            fullWidth
                            label="Search By Name"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.products}>
                    {productList
                        .filter(({ name }) =>
                            name
                                .toLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                        )
                        .map(({ name, price, path, _id }, index) => {
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
};

export default Products;
