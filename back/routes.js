const express = require("express");
const router = express.Router();
const Product = require("./models/Product");

router.get("/products", async (req, res) => {
    const { min, max, category } = req.query;
    const query = Product.find();
    if (min && max) query.where("price").gte(Number(min)).lte(Number(max));
    if (category) query.where("category", category);
    const products = await query.select({ name: 1, price: 1, path: 1 }).exec();
    res.status(200).json({ products, categories });
});

router.get("/best-seller-products", async (req, res) => {
    const products = await Product.find({})
        .sort({ purchases: -1 })
        .limit(8)
        .select({ name: 1, price: 1, path: 1 })
        .exec();
    res.status(200).json({ products });
});

router.get("/product/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id).exec();
        const category = product.category;
        const similarProducts = await Product.find({ category })
            .select({ name: 1, price: 1, path: 1 })
            .exec();
        return res.status(200).json({ product, similarProducts });
    } catch (error) {
        return res.status(500).json({ message: "error" });
    }
});

const categories = ["Books", "Electronics", "Health"];
module.exports = router;
