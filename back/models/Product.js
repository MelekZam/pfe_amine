const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String,
    details: String,
    path: String,
    category: String,
    price: Number,
    rating: Number,
    purchases: Number,
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
